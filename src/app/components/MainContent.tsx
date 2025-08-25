'use client'

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SavedAlbums from "./SavedAlbums";

import { useState } from "react";

export default function MainContent() {
    

    const [searchedAlbums, setSearchedAlbums] = useState([]);

    return (
        <>
            <div className="flex flex-col items-center w-2/3">
                <SearchBar setResults={setSearchedAlbums}/>
                <h1 className="text-3xl font-extrabold text-center mb-2 mt-4">
                Search <span className="text-mq-lightblue">Results</span>
                </h1>
                <SearchResults results={searchedAlbums} />
            </div>
            <div className="w-1/3">
                <SavedAlbums />
            </div>
        </>
    );
}