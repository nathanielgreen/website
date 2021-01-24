import Head from "next/head";

export default function Home() {
  return (
    <div className="container flex flex-col h-screen items-center justify-center">
      <Head>
        <title>Nathaniel Green | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="block w-full text-center text-5xl font-bold m-5">
        Nat Green
      </h1>
      <h2 className="block w-full text-center text-lg font-semibold m-5">
        Web Developer based in London.
      </h2>

      <ul>
        <li>Github</li>
        <li>CV</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
}
