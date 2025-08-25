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

export default function SearchResults({ results } : { results: Album[] }) {
        
    return (
        <div className="flex flex-col h-full w-full">
            <h1 className="text-3xl font-extrabold text-center mb-2">
                Search <span className="text-mq-lightblue">Results</span>
            </h1>
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
                                title={result.name}
                                artist={result.artists}
                                releaseDate={result.release_date}
                                cover={result.images[0].url ?? "/images/EmptySymbol.png"}
                                key={result.id}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}