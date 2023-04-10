import Image from "next/image";
import { useEffect } from "react";

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
    <main className="bg-[#121212] w-full h-screen">
      <div className="flex justify-center items-center h-full">
        <a
          href="http://localhost:8888/login"
          className="text-white px-4 py-1.5 rounded-[20px] text-2xl bg-[#1DB954]"
        >
          Login to Spotify
        </a>
      </div>
    </main>
  );
}
