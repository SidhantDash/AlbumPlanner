'use client'

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SavedAlbums from "./SavedAlbums";

import { useState } from "react";

export default function MainContent() {
    

    const [searchedAlbums, setSearchedAlbums] = useState([]);

    return (
        <>
            <div className="flex flex-col items-center gap-4 w-2/3">
                <SearchBar setResults={setSearchedAlbums}/>
                <SearchResults results={searchedAlbums} />
            </div>
            <div className="w-1/3">
                <SavedAlbums />
            </div>
        </>
    );
}