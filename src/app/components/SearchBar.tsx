'use client';

import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";


interface SearchBarProps {
    setResults: any;
    savedAlbums: SavedAlbum[];
}

export default function SearchBar( { setResults, savedAlbums } : SearchBarProps) {

    //const [searchParams, setSearchParams] = useState("");
    //const [searchResults, setSearchResults] = useState("");

    

    const searchParams = useSearchParams();
    const pathname = usePathname(); // gets current path from url
    const { replace } = useRouter();

    // Called everytime someone passes in input
    const handleSearch = (searchTerm: string) => {
        const params = new URLSearchParams(searchParams);
        if (searchTerm) { // if someone typed in input
            params.set("q", searchTerm);
        } else { // if nothing is typed
            params.delete("q");
        }
        replace(`${pathname}?${params.toString()}`); // replace current url without rerendering
    }

    // const handleSearch = (searchTerm: string) => {
    //     setSearchParams(searchTerm);
    // }

    async function fetchAlbums() {
        const q = searchParams.get('q');
        const response = await axios(`/api/searchAlbums?q=${q}`);

        setResults(response.data.albums.items);
        console.log(response.data);
        console.log(q);
    }

    // Overflow stuff
    // const [isOverflow, setIsOverflow] = useState(false);
    // function checkOverflower(el: HTMLInputElement) {
    //     const cursorPos = el.selectionStart ?? 0;
    //     setIsOverflow((el.scrollWidth > el.clientWidth) && cursorPos > 0);
    //     console.log("selection start" + el.selectionStart);

    // }

    return (
        <div className="bg-mq-darkgray w-3/4 rounded-full flex flex-row p-3 content-center gap-4">
            <FaSearch className="my-auto ml-2" />
            <input
                type="text"
                placeholder="Search for albums & songs here"
                className="grow focus:outline-none pr-6"
                // IN "className" ${isOverflow ? 'mask-l-from-80% mask-l-to-100% bg-transparent' : ''}
                // onInput={e => {checkOverflower(e.currentTarget)}}
                // onKeyUp={e => {checkOverflower(e.currentTarget)}}
                // onSelect={e => {checkOverflower(e.currentTarget)}}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        fetchAlbums();
                    }
                }}
            />
        </div>
    )
}