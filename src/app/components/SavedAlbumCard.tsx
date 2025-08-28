import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useState } from "react";

interface SavedAlbumProps {
    id: string;
    title: string;
    artists: [
        {
            name: string
        }
    ]
    cover: string;
    releaseDate?: string;
    dateAdded: string;
    removeSavedAlbum: any;
}

export default function SavedAlbumCard({id, title, artists, cover, releaseDate, dateAdded, removeSavedAlbum} : SavedAlbumProps) {
    const totalArtists = artists.length;
    let artistString = "";
    artists.map((artists, index) => {
        artistString += artists.name;
        if (index !== totalArtists - 1) artistString += ", ";
    });

    const [isSelected, setIsSelected] = useState(true);

    function handleOnChange() {
        setIsSelected(false);
        removeSavedAlbum(id);
    }

    return (
        <div className="w-full h-28 bg-mq-lightgray rounded-3xl flex flex-row items-center justify-between  overflow-hidden shrink-0">
            <div className="w-1/7 h-full flex justify-center items-center transition-all hover:border-2 hover:bg-[#454545] active:transition-none active:border-3 active:border-mq-lightblue cursor-grab rounded-l-3xl saved_albums_hamburger_icon">
                <GiHamburgerMenu />
            </div>
            <div className="w-5/7 h-3/4 px-1 flex flex-row gap-x-2 grow justify-start items-center">
                <div className="h-full aspect-square rounded-2xl overflow-hidden shrink-0 select-none">
                    <Image
                        src={cover}
                        alt="No Album Cover Provided"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="flex flex-col h-full justify-start">
                    <h1 className="font-bold text-sm text-ellipsis line-clamp-1">{title}</h1>
                    <h2 className="font-semibold text-sm text-ellipsis line-clamp-1 text-mq-lightblue">{artistString}</h2>
                    <h2 className="font-medium text-sm">{releaseDate}</h2>
                    <h2 className="font-normal text-xs line-clamp-1 text-[#B7B7B7] italic">
                        Added by: {dateAdded}
                    </h2>
                </div>
            </div>
            <label className="w-1/7 h-full flex justify-center items-center transition-all hover:border-2 hover:bg-[#454545] hover:has-checked:border-3 hover:has-checked:border-mq-lightblue cursor-pointer rounded-r-3xl">
                <input
                    type="checkbox"
                    className="cursor-pointer w-6 h-6 appearance-none border-2 border-white rounded bg-transparent checked:hover:bg-mq-lightblue checked:bg-mq-lightblue checked:border-mq-lightblue transition-colors"
                    checked={isSelected}
                    onChange={() => handleOnChange()}
                >
                </input>
            </label>

        </div>
    );

}