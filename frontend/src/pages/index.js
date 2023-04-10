import ProfileHero from "@/components/ProfileHero";
import { accessToken, getCurrentUserProfile, logout } from "@/util/spotify";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      try {
        const { data } = await getCurrentUserProfile();
        setUser(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="w-full h-screen">
      <div className="flex justify-center items-center h-full">
        {!token ? (
          <a
            href="http://localhost:8888/login"
            className="text-white px-4 py-1.5 rounded-[20px] text-2xl bg-[#1DB954]"
          >
            Login to Spotify
          </a>
        ) : (
          <div className="flex flex-col text-center">
            {user && (
              <>
                <ProfileHero user={user} />
                <a
                  href="#"
                  onClick={logout}
                  className="mt-4 text-white py-1 rounded-[20px] text-2xl bg-[#1DB954]"
                >
                  Log out
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
