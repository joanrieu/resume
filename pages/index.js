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
                text-shadow: 0 0 .5em rgb(53, 46, 38);
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
                background: rgb(142, 100, 68);
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
                font-size: .8em;
                text-align: center;
            }
            .pure-menu-item:first-child .pure-menu-link {
                color: white;
            }
            .pure-menu-link:hover {
                background-color: rgba(255, 255, 255, .1);
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
                    /* Photo by Azhar J on Unsplash */
                    /* https://unsplash.com/photos/-27Pzw5c_kU */
                    /* mogrify -scale 50% -interlace Plane {,static/}azhar-j-177284.jpg */
                    background-image: url(/static/azhar-j-177284.jpg);
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    font-family: Saira Semi Condensed, sans-serif;
                    text-align: center;
                    color: white;
                }
            `}</style>
        </Head>
        <Links />
        <Hero />
        <About />
    </div>
)
