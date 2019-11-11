const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { join } = require('path');
const express = require('express');
const cache = require('lru-cache'); // for using least-recently-used based caching

const port = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new cache({
  max: 20, // not more than 20 results will be cached
  maxAge: 1000 * 60 * 5 // 5 mins
});

app.prepare().then(() => {
  const server = express();

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const rootStaticFiles = [
      '/manifest.json',
      '/sitemap.xml',
      '/favicon.ico',
      '/robots.txt',
      '/browserconfig.xml',
      '/site.webmanifest'
    ];

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }

    server.get('/', (req, res) => {
      renderAndCache(req, res, '/');
    });

    server.get('*', (req, res) => {
      if (req.url.includes('/sw')) {
        const filePath = join(__dirname, 'static', 'workbox', 'sw.js');
        app.serveStatic(req, res, filePath);
      } else if (req.url.startsWith('static/workbox/')) {
        app.serveStatic(req, res, join(__dirname, req.url));
      } else {
        handle(req, res, req.url);
      }
    });
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

const renderAndCache = async (req, res, pagePath, queryParams) => {
  const key = req.url;

  // if page is in cache, server from cache
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // if not in cache, render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // if something wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
};
