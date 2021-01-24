import Head from "next/head";
import { ListItem } from "../components/atoms/ListItem";
import { Link } from "../components/atoms/Link";
import { FiGithub, FiFileText, FiLinkedin } from "react-icons/fi";

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
      <h2 className="block w-full text-center text-2xl font-semibold m-5">
        Web Developer based in London.
      </h2>

      <ul className="flex m-5">
        <ListItem>
          <Link>
            <FiGithub className="mr-1" />
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <FiFileText className="mr-1" />
            CV
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <FiLinkedin className="mr-1" />
            LinkedIn
          </Link>
        </ListItem>
      </ul>
    </div>
  );
}
