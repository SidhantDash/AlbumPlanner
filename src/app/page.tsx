import Image from "next/image";
import { auth } from "@/auth";
import SignInButton from "./components/SignInButton";
import "./globals.css";

import SearchBar from "./components/SearchBar";
import SearchResultCard from "./components/SearchResultCard";
import SearchResults from "./components/SearchResults";
import SavedAlbums from "./components/SavedAlbums";

export default async function Home() {

  const session = await auth();
  
  
  // In case there is a session user
  if (session?.user) {
    return (
      <>
        {" "}
        <p>User signed in with name: {session.user.name}</p>
        <p>User signed in with name: {session.user.email}</p>
        {session.user.image && (
          <Image 
          src={session.user.image}
          width={48}
          height={48}
          alt={session.user.name ?? "Avatar"}
          />
        )}

        <div className="p-16">
          <div className="flex flex-row mb-2">
            <div className="w-2/3"></div>
            <h1 className="w-1/3 text-3xl font-extrabold text-center">
              Saved <span className="text-mq-lightblue">Albums</span>
            </h1>
          </div>
          <div className="flex flex-row gap-4 h-[90vh]">
            <div className="flex flex-col gap-4 w-2/3">
              <SearchBar />
              <SearchResults />
            </div>
            <div className="w-1/3">
              <SavedAlbums />
            </div>
          </div>
        </div>
        
        
      </>
    )
  }

  return (
    <>
      {" "}
      <p> You Are Not Signed In</p>
      <SignInButton />
    </>
  );
}
