'use client'

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import SavedAlbums from "./SavedAlbums";

import { useState } from "react";

export default function MainContent() {
    

    const [searchedAlbums, setSearchedAlbums] = useState([]);
    const [savedAlbums, setSavedAlbums] = useState<SavedAlbum[]>([]);


    function addSavedAlbum(item: Album) {
        setSavedAlbums((albums: SavedAlbum[]) => {
            return [
                ...albums, {
                    id: item.id,
                    name: item.name,
                    artists: item.artists,
                    release_date: item.release_date,
                    images: item.images,
                    date_added: "aasdf"
                }
            ];
        });
    }

    function removeSavedAlbum(id: string) {
        setSavedAlbums((albums: SavedAlbum[]) => {
            return albums.filter(album => album.id !== id);
        });
    }


    // function toggleAlbum(id: string, selected: boolean) {
    //     setSelectedAlbums((currentSelectedAlbums) => {
    //         return currentSelectedAlbums.map(album => {
    //             if (album.id === id) return { ...album, selected }
    //             return album
    //         })
    //     })
    // }

    return (
        <>
            <div className="flex flex-col items-center w-2/3">
                <SearchBar
                    setResults={setSearchedAlbums}
                    savedAlbums={savedAlbums}
                />
                <h1 className="text-3xl font-extrabold text-center mb-2 mt-4">
                Search <span className="text-mq-lightblue">Results</span>
                </h1>
                <SearchResults 
                    results={searchedAlbums}
                    savedAlbums={savedAlbums}
                    addSavedAlbum={addSavedAlbum}
                    removeSavedAlbum={removeSavedAlbum}
                />
            </div>
            <div className="w-1/3">
                <SavedAlbums savedAlbums={savedAlbums}/>
            </div>

            
        </>
    );
}