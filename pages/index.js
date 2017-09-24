import Head from "next/head"

const FluidTypography = () => (
    <style>{`
        /* https://css-tricks.com/snippets/css/fluid-typography/ */
        html {
          font-size: 16px;
        }
        @media screen and (min-width: 320px) {
          html {
            font-size: calc(16px + 6 * ((100vw - 320px) / 680));
          }
        }
        @media screen and (min-width: 1000px) {
          html {
            font-size: 22px;
          }
        }
    `}</style>
)

const MenuLink = ({href, children}) => (
    <li className="pure-menu-item">
        <a href={href}
            className="pure-menu-link">
            {children}
        </a>
    </li>
)

export default () => (
    <div className="root">
        <Head>
            <meta name="viewport"
                content="width=device-width,initial-scale=1" />
            <link rel="stylesheet"
                href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
                integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
                crossorigin="anonymous" />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Saira" />
            <FluidTypography />
        </Head>
        <style>{`
            body {
                color: #555;
                font-family: Saira, sans-serif;
            }
            .links {
                font-size: .8em;
                text-align: center;
                border-bottom: 1px solid #ccc;
            }
            section {
                padding: 5vw;
                max-width: 30rem;
                margin: auto;
            }
            @media (min-width: 40em) {
                section {
                    border-left: .4rem solid #ccc;
                    border-radius: 0 0 0 100%;
                }
            }
            .hero {
                font-size: 1.5em;
            }
            blockquote {
            }
            .resume {
                text-align: center;
            }
        `}</style>
        <div className="links pure-menu pure-menu-horizontal pure-menu-scrollable">
            <ul className="pure-menu-list">
                <MenuLink href="/static/Joan Rieu - Resume.pdf">Resume (PDF)</MenuLink>
                <MenuLink href="https://www.linkedin.com/in/joanrieu/">LinkedIn</MenuLink>
                <MenuLink href="https://github.com/joanrieu">GitHub</MenuLink>
                <MenuLink href="https://twitter.com/joanrieu">Twitter</MenuLink>
            </ul>
        </div>
        <section>
            <div className="hero">
                <h1>Joan Rieu</h1>
                <p>Software engineering<br/>& systems architecture</p>
            </div>
            <blockquote>I build complex software systems.</blockquote>
        </section>
    </div>
)
