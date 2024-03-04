import { createSignal } from "solid-js";

const Docs = () => {
  const [menuVisible, setMenuVisible] = createSignal(false);
  const [activeSection, setActiveSection] = createSignal("home");

  const toggleMenu = () => setMenuVisible(!menuVisible());

  const showContent = (sectionId: string) => {
    setActiveSection(sectionId);
    setMenuVisible(false);
  };

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2.0-Website-Breaker Docs</title>
      </head>
      <body>
        <style>
          {`
            body {
              margin: 0;
              background-color: rgba(34, 32, 32);
              padding: 0;
              display: flex;
              height: 100vh;
            }

            .menu-container {
              display: flex;
              flex-direction: column;
            }

            .open-close-menu {
              cursor: pointer;
              padding: 10px;
              z-index: 2;
            }

            .menu {
              display: ${menuVisible() ? "block" : "none"};
              background-color: rgba(34, 32, 32);
              box-shadow: 0 0 10px rgba(34, 32, 32);
              z-index: 1;
            }

            .menu ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .menu ul li {
              position: relative;
            }

            .menu ul li a {
              color: #333;
              text-decoration: none;
              display: block;
              padding: 10px;
              border-bottom: 1px solid #333;
              transition: background-color 0.3s ease;
            }

            .menu ul li a:hover {
              background-color: rgba(34, 32, 32);
            }

            .menu ul ul {
              display: none;
              position: absolute;
              left: 100%;
              top: 0;
            }

            .menu ul li:hover > ul {
              display: block;
            }

            .menu ul li a {
              border: 1px solid #333;
              background-color: rgba(34, 32, 32);
              padding: 8px 12px;
              margin: 2px;
              border-radius: 4px;
            }

            .menu ul li ul li a {
              background-color: #333;
            }

            .content {
              flex: 1;
              padding: 20px;
            }

            @media screen and (max-width: 600px) {
              .menu-container {
                display: flex;
                flex-direction: column;
                padding: 10px;
              }

              .open-close-menu {
                order: -1;
              }

              .menu {
                width: 100%;
              }

              .content {
                margin: 20px;
              }
            }
          `}
        </style>

        <div class="menu-container">
          <div class="open-close-menu" onclick={() => toggleMenu()}>
            <span>☰</span>
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="#" onclick={() => showContent("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Demos</a>
                <ul>
                  <li>
                    <a href="#" onclick={() => showContent("demo1")}>
                      Demo 1
                    </a>
                  </li>
                  <li>
                    <a href="#" onclick={() => showContent("demo2")}>
                      Demo 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div class="content">
          <section
            id="home"
            style={{ display: activeSection() === "home" ? "block" : "none" }}
          >
            <h1>Welcome to 2.0-Website-Breaker Docs</h1>
            <p>The website-breaker can break any website by react or code</p>
            <h1>How to use 🚀</h1>
            <p>
              There are 2 ways to use the 2.0-Website-Breaker. You can break any
              website by typing the website URL into the homepage of this
              website. Or, you can manually install the 2.0-Website-Breaker by
              going to the external links page.
            </p>
          </section>

          <section
            id="demo1"
            style={{ display: activeSection() === "demo1" ? "block" : "none" }}
          >
            <h1>Demo 1 Info</h1>
            <p>
              Demo 1 runs on HTML, JS, and CSS and is powered by <i>vercel</i>
            </p>
            <p>It can break a site into 1000 pieces by clicking a button</p>
            <p>
              Head to the link and grab a block with your cursor and swing it
              around and watch what it can do!
            </p>
            <p>
              Link: <u>website-breaker-demo.vercel.app</u>
            </p>
          </section>

          <section
            id="demo2"
            style={{ display: activeSection() === "demo2" ? "block" : "none" }}
          >
            <h1>Demo 2 Info</h1>
            <p>
              Demo 2 runs on HTML and CSS and is powered by <i>Heroku</i>
            </p>
            <p>It can break a site into 20 pieces automatically</p>
            <p>
              Link:{" "}
              <u>https://website-breaker-demo-2e92fbab7def.herokuapp.com/</u>
            </p>
          </section>
        </div>
      </body>
    </html>
  );
};

export default Docs;