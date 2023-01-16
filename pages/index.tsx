import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col flex-grow absolute top-0 bottom-0">
      <Head>
        <title>Sosha | Home</title>
        <meta name="description" content="Social media App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex flex-grow bg-white">
        <LandingPage />
      </main>
      <footer
        className={`w-full mb-0 min-h-[5rem] h-full flex justify-center items-center flex-grow ${
          router.pathname !== "/" ? "hidden" : ""
        } bg-black`}
      >
        <span className="font-medium text-center text-gray-500">
          &copy; Sosha {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
};

export default Home;
