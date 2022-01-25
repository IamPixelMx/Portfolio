//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Project from '../components/Project';
import aboutData from '../data/about';

const Dashboard = () => (
  <section id="dashboard">
    <div className="tile is-ancestor">
      <div className="tile is-vertical">
        <div className="tile is-parent is-me">
          <article className="tile is-child notification is-bold is-pink shadow">
            <div className="level">
              <figure className="image level-item">
                <img
                  className="is-rounded is-picture shadow"
                  src="/assets/Itzel_Enciso.png"
                  alt="Itzel"
                />
              </figure>
            </div>
            <p className="is-size-4 has-text-centered has-text-weight-light">
              <em>
                " Liderar es <strong> mover las velas.</strong> NO esperar a que
                el viento te favorezca."
              </em>
            </p>
            <p className="subtitle is-4">
              <strong>¡Hola, soy Itzel Enciso!</strong>
            </p>
            <div className="content has-text-justified">
              {aboutData.overview}
            </div>
            <Fade top>
              <div className="columns">
                <div className="column">
                  <a
                    className="cv hvr-grow hvr-underline-from-center has-text-weight-bold is-size-4"
                    href="/ItzelE_CV.pdf"
                    download>
                    <figure className="icon is-large">
                      <img className="" src="/assets/icons/cv.png" alt="CV" />
                      <p className="cv">CV</p>
                    </figure>
                  </a>
                </div>
              </div>
            </Fade>
          </article>
        </div>
        <div className="tile is-parent is-short">
          <article className="tile is-child notification is-bold is-orange shadow">
            <p className="title">Premios y reconocimientos</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-bold is-white">
            <p className="title">Smart Spend</p>
            <p className="subtitle">1er Lugar</p>
            <div className="level">
              <figure className="image level-item is-award">
                <img
                  className="is-rounded is-small-thumbnail"
                  src="/assets/smart_spend2.png"
                  alt="smart-spend"
                />
              </figure>
            </div>
          </article>
          <article className="tile is-child notification is-bold is-white">
            <p className="title">IBM Week</p>
            <p className="subtitle">Insignia</p>
            <div className="level">
              <figure className="image level-item is-award">
                <img
                  className="is-rounded is-small-thumbnail"
                  src="/assets/ibm.png"
                  alt="IBM batch"
                />
              </figure>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-vertical is-8">
        <Fade bottom>
          <div>
            <h1 className="title is-1 has-text-weight-bold">Proyectos</h1>
          </div>
        </Fade>
        <Zoom cascade>
          <div className="tile">
            <div className="tile is-vertical is-5">
              <div className="tile is-parent">
                <Project id="0" color="is-wine" />
              </div>
              <div className="tile is-parent">
                <Project id="2" color="is-info" />
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <Project
                id="6"
                color="is-light"
                img="is-rounded is-small-thumbnail shadow"
              />
              <Project id="1" color="is-dark" />
              <Project
                id="3"
                color="is-success"
                img="is-rounded is-small-thumbnail shadow"
              />
            </div>
          </div>
        </Zoom>
        <Zoom cascade>
          <div className="tile is-parent">
            <article className="tile is-child notification is-bold is-dark">
              <p className="title">Steam News</p>
              <p className="subtitle">Portal de noticias (JS, API)</p>
              <div className="level">
                <figure className="image level-item">
                  <img
                    className="is-thumbnail is-steam"
                    src="/assets/steam_mobile.png"
                    alt="steam"
                  />
                </figure>
                <div className="level-other">
                  <div className="content has-text-justified">
                    Steam News es un portal de noticias para Gamers. Una
                    Aplicación Web responsiva que hace uso de la base de datos
                    del portal STEAM, una popular plataforma de distribución de
                    videojuegos.
                  </div>
                  <time className="content level-left" dateTime="Jul 2019">
                    Jul 2019
                  </time>
                </div>
              </div>
              <div className="overlay show-on-hover">
                <div className="content-on-hover">
                  <p className="over title is-1 has-text-white">Steam</p>
                  <div className="level">
                    <a
                      className="level-item over"
                      href="https://github.com/IamPixelMx/MEX-Data-Lovers-008"
                      target="_blank">
                      <button className="button is-inverted is-outlined is-link subtitle is-6">
                        GitHub
                      </button>
                    </a>
                    <a
                      className="level-item"
                      href="https://IamPixelMx.github.io/MEX-Data-Lovers-008/src/"
                      target="_blank">
                      <button className="button is-inverted is-outlined is-info subtitle is-6">
                        Abrir Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Zoom>
      </div>
    </div>
    <style jsx>
      {`
        .hvr-underline-from-center:before {
          background: #b151a9;
        }
        p.cv {
          margin-top: -1rem;
          color: #b151a9;
        }
        .column {
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0;
        }
        .icon.is-large {
          width: 5rem;
          height: 5rem;
          display: inline-block;
        }
        .is-1 {
          padding: 0.75rem;
        }
        .level {
          text-align: -webkit-center;
        }
        .is-size-5 {
          margin-right: 0.5rem;
        }
        .middle {
          left: 50%;
        }
        #dashboard {
          margin-top: 1rem;
        }
        .is-size-4 {
          margin: 1.5rem 0 2.5rem 0;
        }
        .image img.is-picture {
          width: 15rem;
          height: auto;
          margin-top: 1rem;
        }
        .image img.is-thumbnail {
          border-radius: 0.45rem;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
        .image img.is-steam {
          height: 11rem;
          width: auto;
        }
        .shadow {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .image img.is-small-thumbnail {
          height: 8rem;
          width: auto;
        }
        .is-horizontal-center {
          justify-content: center;
        }

        .notification.is-wine {
          background-color: #821c48;
        }
        .subtitle.is-4 {
          margin: 3.1rem auto 1.9rem auto;
        }
        .tile.is-me {
          margin-bottom: 2rem;
          padding: 0.75rem 0.41rem 0.75rem 0.48rem;
        }

        .notification.is-pink {
          background-color: rgb(231, 202, 212, 0.38);
        }
        .notification.is-orange {
          // background-color: rgb(244, 216, 137, 0.25);
          background-color: rgb(221, 140, 0, 0.1);
        }
        .notification.is-white {
          background-color: #fff;
        }
        .is-short {
          display: inline-table;
        }
        .level-other .content {
          margin-left: 1.5rem;
        }

        .overlay {
          position: absolute;
          border-radius: 4px;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: all 0.5s ease;
          background-color: rgba(0, 0, 0);
        }

        .overlay:hover {
          opacity: 0.72;
        }

        .content-on-hover {
          position: absolute;
          top: 48%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: center;
          width: inherit;
        }
        .is-size-5 {
          color: #3273dc;
          text-decoration: underline;
        }
        .notification a:not(.button):not(.dropdown-item) {
          text-decoration: unset;
        }
        button.subtitle.is-6 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1%;
        }
        .over.title {
          margin-bottom: 7%;
        }
        over.title.is-1 {
          font-size: 3.5rem;
        }
        .level-item.subtitle {
          margin-bottom: 1%;
        }
        .button {
          border-width: 0.15rem;
        }
        .button.is-link.is-inverted.is-outlined {
          border-width: 0.2rem;
        }
        .level {
          padding: auto 50%;
        }
        @media (min-width: 769px) {
          .is-5 {
            width: 50%;
          }
        }

        @media (max-width: 768px) {
          .is-5 {
            width: 100%;
          }
          .level-other .content {
            margin-left: 0;
          }
          .is-short {
            display: block;
          }
          .is-award {
            display: block;
          }
          .image img.is-small-thumbnail {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .tile.is-me {
            margin-bottom: 1rem;
          }
        }
      `}
    </style>
  </section>
);

export default Dashboard;
