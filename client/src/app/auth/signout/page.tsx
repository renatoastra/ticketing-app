"use client";

import { useRequest } from "@/hooks/useRequest";
import { useRouter } from "next/navigation";

export default function Page() {
  const Router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <h1 className="text-4xl">Signing you out..</h1>
    </div>
  );
}
