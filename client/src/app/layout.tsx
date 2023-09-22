import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticketing App",
  description: "Ticketing App",
};

const GetAuth = async (url: string) => {
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await GetAuth(
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser"
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header user={response?.data.currentUser} />
        {children}
      </body>
    </html>
  );
}
