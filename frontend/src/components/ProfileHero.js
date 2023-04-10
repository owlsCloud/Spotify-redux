import { getUserTopArtist, getUserTopTrack } from "@/util/spotify";
import React, { useEffect, useState } from "react";
const ProfileHero = ({ user }) => {
  const [topArtist, setTopArtist] = useState(null);
  const [topTrack, setTopTrack] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserTopArtist();
        setTopArtist(data);
        //console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserTopTrack();
        setTopTrack(data);
        //console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-4xl text-white mt-4">Hello {user.display_name}!</h1>
      {user.images.length && user.images[0].url && (
        <img
          src={user.images[0].url}
          alt="Avatar"
          className="rounded-full mt-2"
        />
      )}
      <div className="flex gap-2 justify-between">
        <p className="text-white mt-2">
          Top Artist:&nbsp;
          <span className="text-[#1DB954]">
            {topArtist && topArtist.items[0].name}
          </span>
        </p>
        <p className="text-white mt-2">
          Top Track:&nbsp;
          <span className="text-[#1DB954]">
            {topTrack && topTrack.items[0].name}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProfileHero;
