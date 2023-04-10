import { logout } from "@/util/spotify";
import React from "react";
const LogoutButton = () => {
  return (
    <div className="">
      <a
        href="#"
        onClick={logout}
        className="mt-4 text-white  rounded-[20px] text-lg border-2 py-1 px-2 hover:text-black hover:bg-[#1DB954] hover:border-0"
      >
        Log out
      </a>
    </div>
  );
};

export default LogoutButton;
