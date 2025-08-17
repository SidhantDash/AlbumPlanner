import Image from "next/image";


interface SearchResultProps {
    title: string;
    artist: string;
    cover?: string;
    releaseDate?: string;
    genres: string[];
}

// function dateToString(genres) {

// }

export default function SearchResultCard({title, artist, cover, releaseDate, genres}: SearchResultProps) {

    const totalGenres = genres.length;
    let genreString = "";
    genres.map((genre, index) => {
        if (index === 0) genreString += genre.charAt(0).toUpperCase() + genre.slice(1);
        else genreString += genre;
        if (index !== totalGenres - 1) genreString += ", ";
    });
    
    return (
        <label className="bg-mq-lightgray rounded-3xl flex flex-row justify-between content-center p-4 w-84 h-36 gap-x-3 transition hover:bg-[#454545] hover:ring-2 has-checked:ring-3 has-checked:ring-mq-lightblue cursor-pointer">
            <div className="h-full aspect-square rounded-2xl overflow-hidden shrink-0 select-none">
                <Image 
                    src="/images/EmptySymbol.png"
                    alt="No Album Cover Provided"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>
            
            <div className="flex flex-col justify-start gap-y-1">
                <h1 className="font-bold text-xl/5 line-clamp-2 break-all">{title}</h1>
                <h2 className="font-semibold text-base/4 line-clamp-2 break-all text-mq-lightblue">{artist}</h2>
                <h2 className="font-medium text-base/4">{releaseDate}</h2>
                <h2 className="font-normal text-xs line-clamp-1 break-all text-[#B7B7B7]">
                    {/* {genres.map((genre, index) => {
                        console.log(totalGenres)
                        console.log(genres.length);
                        return <p>{genre}{totalGenres - 1 === index ? "" : ", "}</p>
                    })} */}
                    {genreString}
                </h2>
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