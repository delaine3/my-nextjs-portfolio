import React from "react";
import Head from "next/head";
import Link from "next/link";

//This is a function that displays my web apps
export default function Storybook() {
  return (
    <div className="center">
      <Head>
        <title>Story Book</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/">
      <button className="home">Home</button>
      </Link>
      <div className="project-page">
        <h1 className="delaine">Story Book</h1>
        <p>
          This is app allows you to create and save characters, plots and
          perform writing excercises through helpful prompts.
          <h3>Technologies used:</h3>
          <ul>
            <li id="project" s>
              MongoDB
            </li>
            <li id="project">Express</li>
            <li id="project">ReactJS</li>
            <li id="project">NextJS</li>
            <li id="project">NodeJS</li>
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
      </div>
    </div>
  );
}
