import React from "react";

//This is a function that displays my web apps
export default function WebApps() {
  return (
    <div className="webapps">
      <h1> Web Apps</h1>

      <ul className="center">
        <li className="project-list">
          <h2>App Name: Story Book </h2>
          <p>
            This is an app that when finished, will allow you to create daily
            journal posts aswell as write stories. It has a section that allows
            you to create carachters, plots and concepts using helpful prompts.
            Click the video option below to see a full version of how it is
            coming along. If you would like to navigate to the app on heroku,
            click on the go to site button. Unfortunately, the deployed Heroku
            app does not display the database due to temporary technical
            difficulties however it does show the frontend app. Technologies
            used:
            <ul>
              <br />
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>NodeJS</li>
            </ul>{" "}
          </p>
          <ul>
            <li>
              <button>
                {" "}
                <a href="https://delaine-storybook-app.herokuapp.com/">
                  {" "}
                  Heroku App (Database not displaying)
                </a>{" "}
              </button>
            </li>
            <li>Video of App running Locally</li>
            <li>
              <button>
                <a href="https://github.com/delaine3/delaine-storybook-app">
                  {" "}
                  Source Code
                </a>
              </button>
            </li>
          </ul>
        </li>
        <li className="project-list">
          <h2>App Name: Organiser</h2>
          <br />
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
              Technologies used:{" "}
              <ul>
                <li>Firebase Authentication</li>
                <li>Firestore Databse</li>
                <li>React</li>
                <li>Redux</li>
                <li>NodeJS</li>
              </ul>{" "}
            </p>
          </p>
          <div>
            <button>
              <a href="https://delaine-organizer-app8.herokuapp.com/">
                Heroku App
              </a>
            </button>
            <br />
            <button>
              <a href="https://github.com/delaine3/delaine-organizer-app">
                {" "}
                Source Code
              </a>
            </button>
          </div>
        </li>
        <li className="project-list">
          <h2> App Name: My Portfolio</h2>
          <p>
            This is the app that you are currently on. I created the fractal
            trees in the background by adapting code from{" "}
            <button>
              <a href="https://www.youtube.com/watch?v=axve3EgJlYI">this </a>
            </button>
            video. Click on the button to change the trees and background.
            <p>
              <br />
              Technologies used:{" "}
              <ul>
                <li>React</li>
                <li>NodeJS</li>
                <li>Canvas</li>
              </ul>{" "}
            </p>
          </p>
          <div>
            <button>
              <a href="https://delaine-portfolio.herokuapp.com/">Heroku App</a>
            </button>
            <br />
            <button>
              {" "}
              <a href="https://github.com/delaine3/Delaine-portfolio">
                {" "}
                Source Code
              </a>
            </button>
          </div>
        </li>
        <li className="project-list">
          <h2>App Name: Text Formatter</h2>
          <br />
          <p>
            This app was created for people who are trying to clean data. It
            allows the user to remove carachters, seperate words by charachter,
            enclose strings in carachters and remove duplicates.
            <p>
              Technologies used:{" "}
              <ul>
                <li>React</li>
                <li>NodeJS</li>
              </ul>{" "}
            </p>
          </p>
          <div>
            <button>
              <a href="https://delaine-text-formatter.herokuapp.com/">
                Heroku App
              </a>
            </button>
            <br />
            <button>
              <a href="https://github.com/delaine3/Delaine-Text-Formatter">
                {" "}
                Source Code
              </a>
            </button>
          </div>
        </li>
        <li className="project-list">
          <h2> App Name: Calculator </h2>
          <p>
            This app allows you to add, subtract, multiply and divide numbers.
            It has an interactive, color coded calculator UI.
            <br />
            <p>
              Technologies used:{" "}
              <ul>
                <li>React</li>
                <li>NodeJS</li>
              </ul>{" "}
            </p>
          </p>
          <div>
            <button>
              <a href="https://delaine-calculator.herokuapp.com/">Heroku App</a>
            </button>
            <br />
            <button>
              <a href="https://github.com/delaine3/delaine-calculator">
                {" "}
                Source Code
              </a>
            </button>
          </div>
        </li>
        <li className="project-list">
          <h2> App Name: Random Quote Generator </h2>
          <br />
          <div>
            <p>
              This is an app allows you to generate random quotes and change the
              application background
              <p>
                Technologies used:{" "}
                <ul>
                  <li>React</li>
                  <li>NodeJS</li>
                </ul>{" "}
              </p>
            </p>
          </div>
          <ul>
            <li>
              <button>
                <a href="https://delaine-quote-generator.herokuapp.com/">
                  Heroku App
                </a>
              </button>
            </li>
            <button>
              <a href="https://github.com/delaine3/delaine-quote-generator">
                {" "}
                Source Code
              </a>
            </button>
          </ul>
        </li>
      </ul>
    </div>
  );
}