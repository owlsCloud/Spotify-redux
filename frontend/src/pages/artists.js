import { getUserTop20Artist } from "@/util/spotify";
import React, { useEffect, useState } from "react";

const artists = () => {
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserTop20Artist();
        setTopArtists(data);
        //console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Top Artists</h1>
    </>
  );
};

export default artists;
