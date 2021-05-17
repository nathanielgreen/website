import Head from "next/head";
import { ListItem } from "../components/ListItem";
import { Link } from "../components/Link";
import { FiGithub, FiFileText, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div className="container flex flex-col h-screen items-center justify-center">
      <Head>
        <title>Nathaniel Green | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="block w-full text-center text-5xl font-bold my-5">
        Nat Green
      </h1>
      <h2 className="block w-full text-center text-2xl font-semibold my-5">
        Web Developer based in London.
      </h2>

      <ul className="flex my-5">
        <ListItem>
          <Link path="https://github.com/nathanielgreen/">
            <FiGithub className="mr-1" />
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link path="https://github.com/nathanielgreen/CV/">
            <FiFileText className="mr-1" />
            CV
          </Link>
        </ListItem>
        <ListItem>
          <Link path="https://www.linkedin.com/in/nat-g-727263107/">
            <FiLinkedin className="mr-1" />
            LinkedIn
          </Link>
        </ListItem>
      </ul>
    </div>
  );
}
