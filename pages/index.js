import Head from "next/head";
import { agents } from "../components/lib/agents";
import TopRatedAgent from "../components/topRatedAgent";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>ABCD</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="p-12"></main>
    </div>
  );
}
