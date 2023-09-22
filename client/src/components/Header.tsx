import axios from "axios";
import { SignOutButton } from "./SignOutButton";
import Link from "next/link";

interface User {
  id: number;
  email: string;
}

interface HeaderProps {
  user: User | null;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      ticketing.app
      <div className="flex ga-3 items-center justify-center ">
        {user && (
          <>
            <p>Hello, {user.email}</p>
            <SignOutButton />
          </>
        )}

        {!user && (
          <div className=" flex items-center gap-3">
            <Link
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              href="/auth/signin"
            >
              Sign In
            </Link>

            <Link
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              href="/auth/signup"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
