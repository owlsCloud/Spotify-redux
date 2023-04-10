import React from "react";
import { FaGithub, FaMusic, FaSpotify } from "react-icons/fa";
import { MdGroups, MdPlaylistPlay, MdRecommend } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="flex flex-col absolute left-0 top-0 h-[100%] justify-between px-4  text-center z-100 text-white items-center bg-black">
      <div>
        <a href="/">
          <FaSpotify size="3em" className="mt-4 hover:text-[#1DB954]" />
        </a>
      </div>
      <ul className="flex flex-col items-center">
        <a href="/artists">
          <MdGroups size="2.25em" className="my-2 hover:text-[#1DB954]" />
        </a>
        <a href="/tracks">
          <FaMusic size="1.75em" className="my-2 hover:text-[#1DB954]" />
        </a>
        <a href="/playlists">
          <MdPlaylistPlay size="2.25em" className="my-2 hover:text-[#1DB954]" />
        </a>
        <a href="recommended">
          <MdRecommend size="2.25em" className="my-2 hover:text-[#1DB954]" />
        </a>
      </ul>
      <div className="flex flex-col gap-2 mb-4 text-center items-center">
        <a href="https://github.com/owlsCloud/spotify-redux">
          <FaGithub size="2em" className="my-2 hover:text-[#1DB954]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
