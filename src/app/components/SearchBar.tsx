'use client'

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {

    // Overflow stuff
    // const [isOverflow, setIsOverflow] = useState(false);
    // function checkOverflower(el: HTMLInputElement) {
    //     const cursorPos = el.selectionStart ?? 0;
    //     setIsOverflow((el.scrollWidth > el.clientWidth) && cursorPos > 0);
    //     console.log("selection start" + el.selectionStart);

    // }

    return (
        <div className="bg-mq-darkgray w-full rounded-full flex flex-row p-3 content-center gap-4">
            <FaSearch className="my-auto ml-2" />
            <input
                type="text"
                placeholder="Search for albums & songs here"
                className="grow focus:outline-none pr-6"
                // IN "className" ${isOverflow ? 'mask-l-from-80% mask-l-to-100% bg-transparent' : ''}
                // onInput={e => {checkOverflower(e.currentTarget)}}
                // onKeyUp={e => {checkOverflower(e.currentTarget)}}
                // onSelect={e => {checkOverflower(e.currentTarget)}}
            />
        </div>
    )
}