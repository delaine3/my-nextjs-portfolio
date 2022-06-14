import React from "react";
import Head from "next/head";
import Link from "next/link";

//This is a function that displays my web apps
export default function WebProjects() {
  return (
    <div className="center">
      <Head>
        <title>Web Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/">
      <button className="home">Home</button>
      </Link>
      <div className="">
        <h1 className="delaine">Delaines Portfolio</h1>
        <p>
          Hi, my name is Delaine. Welcome To my portfolio. All projects listed
          here are web projects. If you click on the (Go to web app) button of
          each project you will be directed to a working version of it. It will
          most likely be hosted on Heroku or Vercel. All images used are either
          in the public domain or require attribution. If attribution is
          required it will be visible in the page inwhich the image is used.
        </p>
        <ul className="tile-list">
          <li className="project-list">
            <div className="main-content">
              <h1 className="project-name"> Name: Story Book </h1>
              <div id="project-links">

              <Link href="webProjects/storybook">
                <button>Find out more</button>
              </Link>
              <button >
                {" "}
                <a href="https://day-dream.vercel.app/"> Go to web app </a>{" "}
              </button >
              <button >
                <a href="https://github.com/delaine3/dayDream"> Source Code</a>
              </button>
              </div>
            </div>
          </li>
          <li className="project-list">
            <div className="main-content">
            <h1 className="project-name"> Name: Memory Game </h1>
            <div id="project-links">
              <Link href="webProjects\memoryGame">
                <button >Find out more</button>
              </Link>
              <button >
                {" "}
                <a href="https://a-memory-game-seven.vercel.app/">
                  {" "}
                  Go to web app{" "}
                </a>{" "}
              </button>
              <button>
                <a href="https://github.com/delaine3/A_Memory_Game">
                  {" "}
                  Go to source code
                </a>
              </button>
              </div>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Pantry</h1>
            <div id="project-links">
            <Link href="webProjects\pantry">
              <button >Find out more</button>
            </Link>
           
              <button >
                <a href="https://pantry-dusky.vercel.app/">Go to web app</a>
              </button>
              <button >
                {" "}
                <a href="https://github.com/delaine3/Pantry"> Source Code</a>
              </button>
            </div>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: My Portfolio</h1>
            <p>
              This is the site that you are currently on.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li id="project">React</li>
                  <li id="project">Next JS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              {" "}
              <a href="https://github.com/delaine3/my-nextjs-portfolio">
                {" "}
                Source Code
              </a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Text Formatter</h1>
            <p>
              This site was created for people who are trying to clean data. It
              allows the user to remove charachters, seperate words by
              charachter, enclose strings in characters and remove duplicates.
              <p>
                <h3>Technologies used:</h3>
                <p id="project">React</p>
              </p>
            </p>
            <div>
              <button>
                <a href="https://text-formatter-zeta.vercel.app/">
                  Go to web app{" "}
                </a>
              </button>
              <button>
                <a href="https://github.com/delaine3/Text_Formatter">
                  {" "}
                  Source Code
                </a>
              </button>
            </div>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Calculator </h1>
            <p>
              This app allows you to add, subtract, multiply and divide numbers.
              It has an interactive colorful UI.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li id="project">Express</li>
                  <li id="project">ReactJS</li>
                  <li id="project">Redux</li>
                  <li id="project">NextJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://calculator-mu-ten.vercel.app/">Go to web app</a>
            </button>
            <button>
              <a href="https://github.com/delaine3/calculator"> Source Code</a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name">Name: Drum Machine </h1>
            <p>
              This app allows you to play drum sounds using an interactive ui.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li id="project">React</li>
                  <li id="project">Redux</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://codepen.io/Delaine/pen/eYRNBra?editors=1010">
                Go to app
              </a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Markdown Preview </h1>
            <p>
              This app allows you to type text and view it as a formatted
              preview.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li id="project">React</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://codepen.io/Delaine/pen/oNWOPyd">Go to app</a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Wack a mole game </h1>
            <Link href="/webProjects\wackAMole">
              <button>Find out more</button>
            </Link>
            <button>
              <a href="https://whack-a-mole-4jvxtc469-delaine3.vercel.app/newPlayer">
                Go to Delaines version of the game
              </a>
            </button>
            <button>
              <a href="https://github.com/delaine3/whack_a_mole">
                Go to Delaines source code
              </a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Random Quote Generator </h1>
            <div>
              <p>
                This is an app allows you to generate random quotes and change
                the application background
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li id="project">React</li>
                    <li id="project">NodeJS</li>
                  </ul>{" "}
                </p>
              </p>
            </div>
            <ul>
              <button>
                <a href="https://codepen.io/Delaine/pen/jOmxpQd">
                  Go to web app{" "}
                </a>
              </button>
            </ul>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Connect 4 game </h1>
            <Link href="/webProjects\connectFour">
              <button>Find out more</button>
            </Link>
            <button>
              <a href="https://connect-four-game.vercel.app/">
                {" "}
                Go to Delaines version of the game
              </a>
            </button>
            <button>
              <a href="https://github.com/delaine3/Connect_Four_Game">
                Go to Delaines source code
              </a>
            </button>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name">Name: Achievement Tracker </h1>
            <div>
              <p>
                This is an app allows you to input and save your daily
                achievements to keep you motivated.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li id="project">MongoDB</li>
                    <li id="project">Express</li>
                    <li id="project">ReactJS</li>
                    <li id="project">NodeJS</li>
                    <li id="project">NextJS</li>
                  </ul>{" "}
                </p>
              </p>
            </div>
            <ul>
              <button>
                <a href="https://achievements-peach.vercel.app/">
                  Go to web app{" "}
                </a>
              </button>
              <button>
                <a href="https://github.com/delaine3/Achievements">
                  {" "}
                  Source Code
                </a>
              </button>
            </ul>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name:Snake game </h1>
              <Link href="/webProjects\snakeGame">
                <button>Find out more</button>
              </Link>
              <button>
                <a href="https://snake-game-five-dun.vercel.app/">
                  Go to Delaines version of the game
                </a>
              </button>
              <button>
                <a href="https://github.com/delaine3/snake_game">
                  Go to Delaines source code
                </a>
              </button>
              </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name"> Name: Timer App </h1>
            <div>
              <p>
                This is an app similar to the pomodoro timer. Users can set a
                time to countdown from aswell as a break.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li id="project">React</li>
                  </ul>{" "}
                </p>
              </p>
            </div>
            <ul>
              <button>
                <a href="https://timer-project-one.vercel.app/">
                  Go to web app{" "}
                </a>
              </button>
              <button>
                <a href="https://github.com/delaine3/timer-project">
                  {" "}
                  Source Code
                </a>
              </button>
            </ul>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name">Name: Simple website.</h1>
            <div>
              <p>
                This is simple website created using simple HTML and CSS. All
                information in the paragraphs was copied verbatim from
                <a>
                  https://time.com/collection/guclassNamee-to-happiness/4791285/bond-with-people/
                </a>
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li id="project">HTML</li>
                    <li id="project">CSS</li>
                  </ul>{" "}
                </p>
              </p>
            </div>
            <ul>
              <button>
                <a href="https://codepen.io/Delaine/pen/NWdZmyW">
                  Go to website codepen{" "}
                </a>
              </button>
            </ul>
            </div>
          </li>
          <li className="project-list">
          <div className="main-content">

            <h1 className="project-name">Name: Simple survey form website.</h1>
            <div>
              <p>
                This is simple survey form website created using simple HTML and
                CSS.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li id="project">HTML</li>
                    <li id="project">CSS</li>
                  </ul>{" "}
                </p>
              </p>
            </div>
            <ul>
              <button>
                <a href="https://codepen.io/Delaine/pen/oNBroGY">
                  Go to website codepen{" "}
                </a>
              </button>
            </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}