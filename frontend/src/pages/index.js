import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    // console.log(queryString);
    // console.log(accessToken);
  }, []);
  return (
    <main className="">
      <a href="http://localhost:8888/login" className="">
        Login to Spotify
      </a>
    </main>
  );
}
