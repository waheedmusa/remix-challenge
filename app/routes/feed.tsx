import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import uploadIcon from "/upload_icon.svg";
import ProfileCard from "~/components/ProfileCard";

export const meta: MetaFunction = () => {
  return [{ title: "Feed" }];
};

export default function FeedPage() {
  return (
    <>
      <Navbar />
      <div className="bg-grey1">
        <div className="flex justify-between items-center pt-4 pb-4 pr-8 pl-8 text-darkWhite">
          <div className="flex justify-between gap-24 items-center">
            <p className="text-gold relative ">
              My Feed
              <span className="block h-[3px] bg-gold absolute -bottom-8 left-0 w-full"></span>
            </p>
            <p>Featured Games Feed</p>
            <p>Global Feed</p>
          </div>
          <div className="flex justify-between gap-24 items-center">
            <button className="border-2 border-gold w-48 h-9 flex items-center justify-center px-2 text-sm">
              <img src={uploadIcon} alt="Upload Icon" className="mr-2" />
              Upload A Game
            </button>

            <div className="text-center">
              <p>0</p>
              <p>Followers</p>
            </div>
            <div className="text-center">
              <p>0</p>
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey2">
        <div className="flex justify-center items-center pt-4 pb-4 pr-8 pl-8 text-darkWhite space-x-24">
          <p>Filter:</p>
          <p>New Projects</p>
          <p>Posts</p>
          <p>Collections</p>
          <p>Ratings</p>
          <p>My Own Activity</p>
        </div>
      </div>
      <div className="text-center text-darkWhite m-4">
        <p className="mt-2">Your personal timeline is currently empty.</p>
        <p className="mt-2">
          Follow some people below to get a personalized feed of games.
        </p>
        <p className="mt-2">
          In the meantime, here is a selection of some creators on Jiwe.
        </p>
      </div>
      <ProfileCard />
    </>
  );
}
