"use client";

import { useRequest } from "@/hooks/useRequest";
import axios from "axios";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
  const Router = useRouter();

  const handleSignOut = async () => {
    const response = await axios.post(
      "/api/users/signout",
      {}
    );

    if (response.status === 200) {
      Router.refresh();
    }
  };
  return (
    <>
      <button
        onClick={handleSignOut}
        className="bg-emerald-300-500 hover:bg-emerald-400-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </>
  );
};
