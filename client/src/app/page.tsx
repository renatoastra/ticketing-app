import axios from "axios";
import { headers, cookies } from "next/headers";

const GET = async (url: string) => {
  const headersObj = {};
  const headersList = headers().forEach((header, key) => {
    //@ts-ignore
    headersObj[key] = header;
  });
  const res = await axios
    .get(url, {
      headers: headersObj,
    })
    .catch((err) => console.log(err));
  return res;
};

export default async function Home() {
  const response = await GET(
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser"
  );

  return (
    <div className="w-full flex items-center justify-center h-screen">
      {response?.data.currentUser ? (
        <h1 className="text-4xl">
          Hello, {response.data.currentUser.email}
        </h1>
      ) : (
        <h1 className="text-4xl">You are not signed in</h1>
      )}
    </div>
  );
}
