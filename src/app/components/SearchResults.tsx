"use client";

import SearchResultCard from "./SearchResultCard";
import { useState } from "react";



// export default function SearchResults({
//     searchParams} : {
//         searchParams?: {
//             query?: string;
//         };
//     }, results : any) {
        
//     const query = searchParams?.query || '';
//     console.log(query);


interface SearchResultsProps {
    results: Album[];
    savedAlbums: SavedAlbum[];
    addSavedAlbum: any;
    removeSavedAlbum: any;
}

//export default function SearchResults({ results } : { results: Album[] }, savedAlbums : { savedAlbums: SavedAlbum[] }) {
export default function SearchResults({ results, savedAlbums, addSavedAlbum, removeSavedAlbum } : SearchResultsProps) {

    function checkSelected(id: string) {

        return savedAlbums.some(savedAlbum => id === savedAlbum.id);
    }
        
    return (
        <div className="bg-mq-darkgray rounded-3xl flex flex-row flex-wrap justify-center content-start p-4 gap-4 w-full h-full overflow-y-scroll after:w-84">
            {results.length === 0 ? (
                <div className="h-full w-full flex justify-center items-center text-xl italic text-[#B7B7B7]">
                    No Results
                </div>
            ) : (
                results.map( (result: Album) => {

                    //console.log(results);
                    return (
                        <SearchResultCard 
                            key={result.id}
                            id={result.id}
                            title={result.name}
                            artist={result.artists}
                            releaseDate={result.release_date}
                            cover={result.images[0].url ?? "/images/EmptySymbol.png"}
                            isSelected={checkSelected(result.id)}
                            addSavedAlbum={addSavedAlbum}
                            removeSavedAlbum={removeSavedAlbum}
                        />
                    );
                })
            )}
        </div>
    );
}