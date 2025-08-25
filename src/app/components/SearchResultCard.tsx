import Image from "next/image";


interface SearchResultProps {
    title: string;
    artist: [
        {
            name: string
        }
    ]
    cover: string;
    releaseDate?: string;
}

// function dateToString(genres) {

// }

export default function SearchResultCard({title, artist, cover, releaseDate}: SearchResultProps) {

    const totalArtists = artist.length;
    let artistString = "";
    artist.map((artist, index) => {
        artistString += artist.name;
        if (index !== totalArtists - 1) artistString += ", ";
    });
    
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
                <h2 className="font-medium text-base/4">{releaseDate}</h2>
            </div>

            <div className="flex content-center items-center">
                <input
                    type="checkbox"
                    className="w-6 h-6 appearance-none border-2 border-white rounded bg-transparent checked:hover:bg-mq-lightblue checked:bg-mq-lightblue checked:border-mq-lightblue transition-colors"
                >
                </input>
            </div>
        </label>
    )
}