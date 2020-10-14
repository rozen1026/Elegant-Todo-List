import React from "react";
import Head from "next/head";
import MainView from "../components/MainView/MainView";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Victor Todo List Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <MainView />
    </div>
  );
}
