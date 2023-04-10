import { logout } from "@/util/spotify";
import React from "react";
import { MdLogout } from "react-icons/md";
const LogoutButton = () => {
  return (
    <div className="">
      <a href="#" onClick={logout}>
        <MdLogout size="2em" className="hover:text-[#1DB954]" />
      </a>
    </div>
  );
};

export default LogoutButton;
