import Image from "next/image";


interface SearchResultProps {
    id: string;
    title: string;
    artist: [
        {
            name: string
        }
    ]
    cover: string;
    releaseDate: string;
    isSelected: boolean;
    addSavedAlbum: any;
    removeSavedAlbum: any;
}

// function dateToString(genres) {

// }

export default function SearchResultCard({id, title, artist, cover, releaseDate, isSelected, addSavedAlbum, removeSavedAlbum }: SearchResultProps) {

    const totalArtists = artist.length;
    let artistString = "";
    artist.map((artist, index) => {
        artistString += artist.name;
        if (index !== totalArtists - 1) artistString += ", ";
    });

    const dateFormat = () => {
        const year = releaseDate.substring(0, 4);
        if (releaseDate.length <= 3) return year;

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[parseInt(releaseDate.substring(5, 7)) - 1];
        if (releaseDate.length <= 7) return `${month} ${year}`;

        const date = () => {
            let d = parseInt(releaseDate.substring(8, 10));
            let d2 = d % 10;

            if (d2 === 1 && d !== 11) return d + "st";
            else if (d2 === 2 && d !== 12) return d + "nd";
            else if (d2 === 3 && d !== 13) return d + "rd";
            else return d + "th";            
        };

        return `${month} ${date()}, ${year}`;

    }
    
    function handleOnChange(id: string, selected: boolean) {
        if (!selected) {
            removeSavedAlbum(id);
        } else {
            addSavedAlbum({
                id,
                name: title,
                artists: artist,
                release_date: dateFormat(),
                images: [
                    {
                        url: cover
                    }
                ]
            })
        }
    }


    

    
    
    return (
        <label className="bg-mq-lightgray rounded-3xl flex flex-row justify-between content-center p-4 w-84 h-36 gap-x-3 transition hover:bg-[#454545] hover:ring-2 has-checked:ring-3 has-checked:ring-mq-lightblue cursor-pointer">
            <div className="h-full aspect-square rounded-2xl overflow-hidden shrink-0 select-none">
                <Image 
                    src={cover}
                    alt="No Album Cover Provided"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            
            <div className="flex flex-col w-full justify-start gap-y-1">
                <h1 className="font-bold text-xl/5 line-clamp-2 break-all">{title}</h1>
                <h2 className="font-semibold text-base/4 line-clamp-2 break-all text-mq-lightblue">{artistString}</h2>
                <h2 className="font-medium text-base/4">{dateFormat()}</h2>
            </div>

            <div className="flex content-center items-center">
                <input
                    type="checkbox"
                    className="w-6 h-6 appearance-none border-2 border-white rounded bg-transparent hover:cursor-pointer checked:hover:bg-mq-lightblue checked:bg-mq-lightblue checked:border-mq-lightblue transition-colors"
                    checked={isSelected}
                    onChange={e => handleOnChange(id, e.target.checked)}
                >
                </input>
            </div>
        </label>
    );
}