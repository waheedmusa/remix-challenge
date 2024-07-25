import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import DevLogs from "~/components/DevLogs";
import FilterPosts from "~/components/FilterPosts";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [{ title: "Remix Challenge" }];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex">
        <FilterPosts />
        <DevLogs />
      </div>
    </>
  );
}
