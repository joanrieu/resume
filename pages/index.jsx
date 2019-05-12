import Head from "next/head";
import fetch from "node-fetch";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z]+/g, "-");
}

export default class extends React.Component {
  static async getInitialProps() {
    const books = await fetch(
      "https://api.github.com/repos/joanrieu/book-notes/contents"
    )
      .then(res => res.json())
      .then(books =>
        books.map(book => {
          const [title, author] = book.name.replace(/.md$/, "").split(" - ");
          const slug = slugify(title);
          return {
            title,
            author,
            slug,
            url: book.download_url
          };
        })
      );
    const dir = "./pages/books";
    if (!existsSync(dir)) mkdirSync(dir);
    await Promise.all(
      books.map(async book => {
        const file = join(dir, book.slug + ".jsx");
        writeFileSync(
          file,
          `
import fetch from "node-fetch";
import { Converter } from "showdown";
import fm from "front-matter";

export default class extends React.Component {
  static async getInitialProps() {
    const text = await fetch(book.url).then(res => res.text());
    return { text };
  }
  render() {
    const md = fm(this.props.text);
    const html = new Converter({
      headerLevelStart: 2
    }).makeHtml(md.body);
    return (
      <>
        <style>{\`
          @font-face {
            font-family: "Courier Prime";
            src: url("/static/Courier Prime.ttf");
          }
          body {
            font-family: "Courier Prime", monospace;
            color: #333;
            background: #ffe;
            margin: auto;
            padding: 2rem;
            max-width: 37em;
            line-height: 2;
          }
          h1 em {
            color: #c33;
          }
          h1 {
            color: #ab9df2;
          }
        \`}</style>
        <div>Joan's book notes</div>
        <hr />
        <h1>
          <em>{book.title}</em>
          <br />
          <small>&ndash; {book.author}</small>
        </h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  }
}

const book = ${JSON.stringify(book)};
          `
        );
      })
    );
    return { books };
  }

  render() {
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
          <style>{`
            @font-face {
              font-family: "Courier Prime";
              src: url("/static/Courier Prime.ttf");
            }
            body {
              font-family: "Courier Prime", monospace;
              color: #333;
              background: #ffe;
              margin: auto;
              padding: 2rem;
              max-width: 37em;
              line-height: 2;
            }
            * {
              font-weight: normal;
              margin: 0;
              padding: 0;
            }
            h1, h2 {
              line-height: 1.2;
            }
            h1 {
              font-size: 4rem;
            }
            h1:before {
              content: "< ";
              color: #c33;
            }
            h1:after {
              content: " />";
              color: #c33;
            }
            h2 {
              display: flex;
              place-items: center;
              font-size: 1.5rem;
              margin: 5rem 0 2rem;
            }
            h2 i {
              text-align: center;
              margin-right: 1rem;
            }
            .resume i {
              color: #fc9867;
            }
            .conferences i {
              color: #ab9df2;
            }
            .articles i {
              color: #a9dc76;
            }
            .books i {
              color: #ffd866;
            }
            nav {
              display: flex;
              flex-direction: column;
              place-items: start;
            }
            nav a + a {
              margin-top: .5rem;
            }
            a {
              color: inherit;
              text-decoration: none;
              border-bottom: .1rem solid #ccc;
            }
            a[hreflang="fr"]:after {
              content: " [FR]";
            }
            @media (min-width: 960px) {
              :root {
                font-size: 20px;
              }
              body {
                padding: 10vw;
              }
              h2 i {
                font-size: 4rem;
                width: 6rem;
              }
              nav {
                margin-left: 6rem;
              }
              nav h3 {
                margin-left: -1rem;
              }
              .resume nav {
                flex-direction: row;
              }
              .resume nav a + a {
                margin-top: 0;
                margin-left: 2rem;
              }
              .books nav {
                font-size: .8em;
              }
              .books nav a {
                font-style: italic;
              }
            }
          `}</style>
        </Head>
        <h1>Joan Rieu</h1>
        <section className="resume">
          <h2>
            <i className="fa fa-keyboard" /> I'm a software engineer
          </h2>
          <nav>
            <a href="/static/Joan Rieu - Resume.pdf">
              <i className="fa fa-file-pdf" /> Resume
            </a>
            <a href="https://www.linkedin.com/in/joanrieu">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="https://github.com/joanrieu">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="https://twitter.com/joanrieu">
              <i className="fab fa-twitter" /> Twitter
            </a>
          </nav>
        </section>
        <section className="conferences">
          <h2>
            <i className="fa fa-chalkboard-teacher" /> I speak at conferences
          </h2>
          <nav>
            <h3>Extending Visual Studio Code</h3>
            <a href="https://www.youtube.com/watch?v=CPyIZTBhzBE">
              Screencast (40min)
            </a>
            <a href="https://www.youtube.com/watch?v=ilcWOQveNKY" hrefLang="fr">
              2019 @ Devoxx France (30min)
            </a>
            <a href="https://www.youtube.com/watch?v=ABiXCFEPPOc" hrefLang="fr">
              2018 @ BDX I/O (20min)
            </a>
          </nav>
        </section>
        <section className="articles">
          <h2>
            <i className="fa fa-pen-nib" /> I write articles
          </h2>
          <nav>
            <a href="https://medium.com/@joanrieu/autonomy-at-work-a600fe4f3332">
              2018-10-26 Autonomy at work
            </a>
            <a href="https://medium.com/@joanrieu/a-years-worth-of-adventures-4d64ec971d85">
              2017-12-27 A year’s worth of adventures
            </a>
            <a href="https://medium.com/@joanrieu/split-up-the-work-39b1eae67fcf">
              2016-03-09 Split up the work
            </a>
          </nav>
        </section>
        <section className="books">
          <h2>
            <i className="fa fa-book" /> I read books
          </h2>
          <nav>
            <h3>Book notes</h3>
            {this.props.books.map(book => (
              <div>
                <a href={"/books/" + book.slug}>{book.title}</a>
                {" by "}
                {book.author}
              </div>
            ))}
          </nav>
        </section>
      </>
    );
  }
}
