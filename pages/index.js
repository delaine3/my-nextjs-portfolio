import React from "react";
import Head from "next/head";

//This is a function that displays my web apps
export default function WebProjects() {
  return (
    <div>
      <Head>
        <title>Web Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="webProjects">
<h1 className="delaine" >Delaines Portfolio</h1>
        <h1>Hi, my name is Delaine. Welcome To my portfolio. All projects listed here are web projects. If you click on the (Go to web app) button of each project you will be directed to a working version of it. , most likely hosted on Heroku or Vercel.</h1>
        <ul className="center">
          <li className="project-list">
            <h1> Name: Story Book </h1>
            <p>
              This is app allows you to create and save characters, plots and
              perform writing excercises through helpful prompts.
              <h3>Technologies used:</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>ReactJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>{" "}
            </p>
            <ul>
              <button>
                {" "}
                <a href="https://day-dream.vercel.app/"> Go to web app </a>{" "}
              </button>
              <button>
                <a href="https://github.com/delaine3/dayDream"> Source Code</a>
              </button>
            </ul>
          </li>
          <li className="project-list">
            <h1> Name: Memory Game </h1>
            <p>
              This is a game where you have to turn over different tiles and try
              to find matching tiles. You get a point every time you uncover a
              matching pair and lose half a point if your pair does not match.
              If you win the game, you can input your name and save your score.
              The scores on the leader board are arranged alphabetically.
              <p>
                  {" "}
                  Some of the ideas from this game are adapted from the
                  the following
                  <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                    FreeCodeCamp Tutorial Video.
                  </a>{" "}
                  You can find the original source code of this tutorial in the
                  following
                  <a href="https://github.com/kubowania/memory-game">
                    Github repo
                  </a>{" "}
                  The original source contains an MIT license which allows
                  anyone to use it. The game in the{" "}
                  <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                    FreeCodeCamp Tutorial Video
                  </a>{" "}
                  is made using Vanilla Javascript and minimal css. Mine is
                  created using the technologies below.
                </p>
              <h3>Technologies used:</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express</li>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>NextJS</li>
              </ul>{" "}
            </p>
            <ul>
              <button>
                {" "}
                <a href="https://a-memory-game-seven.vercel.app/">
                  {" "}
                  Go to Delaines version of the game{" "}
                </a>{" "}
              </button>
              <button>
                <a href="https://github.com/delaine3/A_Memory_Game">
                  {" "}
                  Go to Delaines Source Code
                </a>
              </button>
            </ul>
          </li>
          <li className="project-list">
            <h1> Name: Pantry</h1>
            <p>
              This is the app that allows you to create a shopping list aswell
              as take inventory of your current food supply. This app also lets
              you know which foods are expired and which foods are near
              expiration. It is seperated into 2 tabs: shopping list and pantry.
              For both the shopping list and pantry sections, you can add food
              into your list by filling out a form. please click on the button
              below to view and use the app.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                </ul>{" "}
              </p>
            </p>
            <div>
              <button>
                <a href="https://pantry-dusky.vercel.app/">Go to web app</a>
              </button>
              <button>
                {" "}
                <a href="https://github.com/delaine3/Pantry"> Source Code</a>
              </button>
            </div>
          </li>
          <li className="project-list">
            <h1> Name: My Portfolio</h1>
            <p>
              This is the site that you are currently on.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>React</li>
                  <li>NodeJS</li>
                  <li>Next JS</li>
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
          </li>
          <li className="project-list">
            <h1> Name: Text Formatter</h1>
            <p>
              This site was created for people who are trying to clean data. It
              allows the user to remove carachters, seperate words by
              charachter, enclose strings in carachters and remove duplicates.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>React</li>
                  <li>NodeJS</li>
                </ul>{" "}
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
          </li>
          <li className="project-list">
            <h1> Name: Calculator </h1>
            <p>
              This app allows you to add, subtract, multiply and divclassNamee
              numbers. It has an interactive, color coded calculator UI.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://calculator-mu-ten.vercel.app/">Go to web app</a>
            </button>
            <button>
              <a href="https://github.com/delaine3/calculator"> Source Code</a>
            </button>
          </li>
          <li className="project-list">
            <h1>Name: Drum Machine </h1>
            <p>
              This app allows you to play drum sounds using an interactive ui.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://codepen.io/Delaine/pen/eYRNBra?editors=1010">
                Go to app
              </a>
            </button>
          </li>
          <li className="project-list">
            <h1> Name: Markdown Preview </h1>
            <p>
              This app allows you to type text and view it as a formatted
              preview.
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>React</li>
                  <li>NodeJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://codepen.io/Delaine/pen/oNWOPyd">Go to app</a>
            </button>
          </li>
          <li className="project-list">
            <h1> Name: Wack a mole game </h1>
            <p>
              This a timed wack a mole game. Players are given a minute to wack
              as many moles as they can. During the game, they may pause and
              resume the game. After the game is over they are presented with a
              form that allows them to save their progress.
              <p>
                {" "}
                Some of the code and or ideas from my game are adapted from the
                following
                <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                  FreeCodeCamp Tutorial Video.
                </a>{" "}
                You can find the original source code of this tutorial in the
                following
                <a href="https://github.com/kubowania/whac-a-mole">
                  Github repo
                </a>{" "}
                The original source contains an MIT license which allows anyone
                to use it. The game in the{" "}
                <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                  FreeCodeCamp Tutorial Video
                </a>{" "}
                is made using vanilla javascript and minimal css. Mine is
                created using the technologies below.
              </p>
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                </ul>{" "}
              </p>
            </p>
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
          </li>
          <li className="project-list">
            <h1> Name: Random Quote Generator </h1>
            <div>
              <p>
                This is an app allows you to generate random quotes and change
                the application background
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li>React</li>
                    <li>NodeJS</li>
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
          </li>
          <li className="project-list">
            <h1> Name: Connect 4 game </h1>
            <p>
              This a timed connect 4 game. Players are given a minute to connect
              4 dots in a vertical, horizontal or diagonal line. The first
              player to connect 4 dots wins. If no player connects 4 dots within
              the alloted time, the game ends in a draw. The result of the game
              is saved upon completion.
              <p>
                <p>
                  {" "}
                  Some of the code and or ideas from my game are adapted from the
                  the following
                  <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                    FreeCodeCamp Tutorial Video.
                  </a>{" "}
                  You can find the original source code of this tutorial in the
                  following
                  <a href="https://github.com/kubowania/connect-four">
                    Github repo
                  </a>{" "}
                  The original source contains an MIT license which allows
                  anyone to use it. The game in the{" "}
                  <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                    FreeCodeCamp Tutorial Video
                  </a>{" "}
                  is made using Vanilla Javascript and minimal css. Mine is
                  created using the technologies below.
                </p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://connect-four-game.vercel.app/"> Go to Delaines version of the game</a>
            </button>
            <button>
              <a href="https://github.com/delaine3/Connect_Four_Game">
              Go to Delaines source code
              </a>
            </button>
          </li>
          <li className="project-list">
            <h1>Name: Achievement Tracker </h1>
            <div>
              <p>
                This is an app allows you to input and save your daily
                achievements to keep you motivated.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li>React</li>
                    <li>NodeJS</li>
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
          </li>
          <li className="project-list">
            <h1> Name:Snake game </h1>
            <p>
              This a snake game. The goal is to direct a snake using the up, down, left and right arrows to food withouth hitting the boundaries of the box. After the game is over the player is presented with a
              form that allows them to save their score. There is also a page that contains a leaderboard, containing the scores of other players in descending order.
              <p>
                {" "}
                Some of the code and ideas from my game are adapted from the
                following
                <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                  FreeCodeCamp Tutorial Video.
                </a>{" "}
                You can find the original source code of this tutorial in the
                following
                <a href="https://github.com/kubowania/Nokia3310-Snake">
                  Github repo
                </a>{" "}
                The original source contains an MIT license which allows anyone
                to use it. The game in the{" "}
                <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=3s">
                  FreeCodeCamp Tutorial Video
                </a>{" "}
                is made using vanilla javascript and minimal css. Mine is
                created using the technologies below.
              </p>
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                </ul>{" "}
              </p>
            </p>
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
          </li>
          <li className="project-list">
            <h1> Name: Timer App </h1>
            <div>
              <p>
                This is an app similar to the pomodoro timer. Users can set a
                time to countdown from aswell as a break.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li>React</li>
                    <li>NodeJS</li>
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
          </li>
          <li className="project-list">
            <h1>Name: Simple website.</h1>
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
                    <li>HTML</li>
                    <li>CSS</li>
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
          </li>
          <li className="project-list">
            <h1>Name: Simple survey form website.</h1>
            <div>
              <p>
                This is simple survey form website created using simple HTML and
                CSS.
                <p>
                  <h3>Technologies used:</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
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
          </li>
          <li className="project-list">
            <h1>Name: Organizer</h1>
            <p>
              This app allows user to create an account, login, logout and
              organise their subscriptions and to do lists. There is a component
              for each of the following:{" "}
              <ul>
                <li>Shows and movies to watch</li>
                <li>Current subscriptions</li>
                <li>Create Random Post</li>
                <li>List of places to go</li>
                <li>Shows and movies to watch</li>
              </ul>
              <p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>Firebase Authentication</li>
                  <li>Firestore Databse</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                </ul>{" "}
              </p>
            </p>
            <button>
              <a href="https://delaine-organizer-app8.herokuapp.com/">
                Go to web app{" "}
              </a>
            </button>
            <button>
              <a href="https://github.com/delaine3/delaine-organizer-app">
                {" "}
                Source Code
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
