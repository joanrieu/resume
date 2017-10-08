import Head from "next/head"

const FluidTypography = () => (
    <style>{`
        /* https://css-tricks.com/snippets/css/fluid-typography/ */
        html {
          font-size: 16px;
        }
        @media screen and (min-width: 320px) {
          html {
            font-size: calc(16px + (20 - 16) * ((100vw - 320px) / 680));
          }
        }
        @media screen and (min-width: 1000px) {
          html {
            font-size: 20px;
          }
        }
    `}</style>
)

const Hero = () => (
    <section>
        <style jsx>{`
            section {
                padding: .5em;
                max-width: 30rem;
                margin: auto;
                font-size: 1.5em;
                text-align: center;
            }
            h1,
            p {
                font-family: Saira, sans-serif;
            }
            h1 {
                font-size: 3em;
                font-weight: normal;
                white-space: nowrap;
            }
            p {
                margin-top: -3em;
            }
        `}</style>
        <h1>Joan Rieu</h1>
        <p>Software engineering</p>
    </section>
)

const About = () => (
    <div className="about">
        <style jsx>{`
            .about {
                margin: auto;
                max-width: 30em;
                text-align: left;
            }
            blockquote {
                padding: 1rem 0;
                font-weight: normal;
            }
            em {
                display: inline-block;
                white-space: nowrap;
                font-size: 1.2em;
                line-height: 2;
            }
            em::after {
                content: "";
                display: block;
                height: .5em;
                background: #ddd;
                border-radius: 2pt;
                margin-top: -1em;
            }
        `}</style>
        <blockquote>
            <em>I build complex software systems.</em><br/>
            As a software engineer, I have a deep interest in software architecture, programming languages and algorithms.<br/>
            I am also passionate about sharing knowledge and learning about new technologies and practices.
        </blockquote>
    </div>
)

const Links = () => (
    <div className="links pure-menu pure-menu-horizontal pure-menu-scrollable">
        <style jsx>{`
            .links {
                text-align: center;
            }
            .pure-menu-item:first-child .pure-menu-link {
            }
        `}</style>
        <ul className="pure-menu-list">
            {[
                ["Resume (PDF)", "/static/Joan Rieu - Resume.pdf"],
                ["LinkedIn", "https://www.linkedin.com/in/joanrieu/"],
                ["GitHub", "https://github.com/joanrieu"],
                ["Twitter", "https://twitter.com/joanrieu"]
            ].map(([title, href]) => (
                <li className="pure-menu-item">
                    <a href={href}
                        className="pure-menu-link">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
)

export default () => (
    <div>
        <Head>
            <title>Joan Rieu</title>
            <link rel="icon" href="/static/favicon.png" />
            <meta name="viewport"
                content="width=device-width,initial-scale=1" />
            <link rel="stylesheet"
                href="https://unpkg.com/purecss@1.0.0/build/base-min.css"
                crossorigin="anonymous" />
            <link rel="stylesheet"
                href="https://unpkg.com/purecss@1.0.0/build/menus-min.css"
                crossorigin="anonymous" />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Saira:200|Saira+Semi+Condensed:300" />
            <FluidTypography />
            <style>{`
                html,
                body {
                    min-height: 100%;
                }
                body {
                    font-family: Saira Semi Condensed, sans-serif;
                    color: #555;
                }
            `}</style>
        </Head>
        <Links />
        <Hero />
        <About />
    </div>
)
