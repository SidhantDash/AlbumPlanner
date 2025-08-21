"use client";

import SearchResultCard from "./SearchResultCard";
import { useState } from "react";

export default function SearchResults({
    searchParams} : {
        searchParams?: {
            query?: string;
        };
    }) {

        
    const query = searchParams?.query || '';
    console.log(query);
    
    const [searchResults, setSearchResults] = useState([])
    

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-3xl font-extrabold text-center mb-2">
                Search <span className="text-mq-lightblue">Results</span>
            </h1>
            <div className="bg-mq-darkgray rounded-3xl flex flex-row flex-wrap justify-center content-start p-4 gap-4 w-full h-full overflow-y-scroll after:w-84">
                <SearchResultCard
                    title="WHERE IS MY HEAD?"
                    artist="Rich Brian"
                    releaseDate="2025"
                    genres={["Hip-hop, Pop, Westcoast"]}
                />
                <SearchResultCard
                    title="VETERAN"
                    artist="JPEGMAFIA"
                    releaseDate="2018"
                    genres={["Experimental hip-hop, hip-hop, political hip-hop"]}
                />
                <SearchResultCard
                    title="Let God Sort 'Em Out"
                    artist="Clipse, Pusha T, Malice"
                    releaseDate="2025"
                    genres={["Hip-hop"]}
                />
                <SearchResultCard
                    title="OneShot (Original Game Soundtrack)"
                    artist="Nightmargin"
                    releaseDate="2015"
                    genres={["Thing", "thing2", "idk"]}
                />
                <SearchResultCard
                    title="MELTING MOMENT"
                    artist="POiSEN GiRLFRiEND"
                    releaseDate="1987"
                    genres={["Wow", "crazy"]}
                />
            </div>
        </div>
    );
}