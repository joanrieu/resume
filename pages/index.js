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

const Hero = () => (
    <section>
        <style jsx>{`
            section {
                padding: 5vw;
                max-width: 30rem;
                margin: auto;
            }
            @media (min-width: 40rem) {
                section::before {
                    content: "";
                    float: left;
                    height: 20rem;
                    border-left: .2rem solid white;
                    transform: rotateZ(-5deg);
                }
            }
            .hero {
                font-size: 1.5em;
            }
            h1 {
                font-family: "Saira", sans-serif;
                font-weight: 200;
            }
            p {
            }
            blockquote {
                font-style: italic;
            }
        `}</style>
        <div className="hero">
            <h1>Joan Rieu</h1>
            <p>Software engineering<br/>& systems architecture</p>
        </div>
        <blockquote>I build complex software systems.</blockquote>
    </section>
)

const About = () => (
    <div className="about">
        <style jsx>{`
            .about {
                margin: 3rem auto;
                font-size: .8em;
                max-width: 30em;
                text-align: left;
                background: rgba(0, 0, 0, .6);
                border-radius: 2pt;
            }
            blockquote {
                padding: 1rem 0;
            }
            h3 {
                text-align: center;
                margin: 0;
            }
        `}</style>
        <blockquote>
            <h3>About me</h3>
            As a software engineer, I have a deep interest in software architecture, programming languages and algorithms.
            I am also passionate about sharing knowledge and learning about new technologies and practices.
        </blockquote>
    </div>
)

const Links = () => (
    <div className="links pure-menu pure-menu-horizontal pure-menu-scrollable">
        <style jsx>{`
            .links {
                font-size: .8em;
                text-align: center;
                margin: 1rem 0;
            }
            .pure-menu-item:first-child {
                font-weight: bold;
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
            <meta name="viewport"
                content="width=device-width,initial-scale=1" />
            <link rel="stylesheet"
                href="https://unpkg.com/purecss@1.0.0/build/base-min.css"
                crossorigin="anonymous" />
            <link rel="stylesheet"
                href="https://unpkg.com/purecss@1.0.0/build/menus-min.css"
                crossorigin="anonymous" />
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Saira:200|Saira+Semi+Condensed:400" />
            <FluidTypography />
            <style>{`
                html,
                body {
                    min-height: 100%;
                }
                body {
                    /* Photo by Azhar J on Unsplash */
                    background: url(/static/azhar-j-177284.jpg);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    font-family: "Saira Semi Condensed", sans-serif;
                    text-align: center;
                    color: white;
                }
            `}</style>
        </Head>
        <Hero />
        <About />
        <Links />
    </div>
)
