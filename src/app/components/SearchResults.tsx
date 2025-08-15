import SearchResultCard from "./SearchResultCard";

export default function SearchResults() {
    return (
        <div className="bg-mq-darkgray rounded-3xl flex flex-row flex-wrap justify-center content-center p-4 gap-4 w-full">
            <SearchResultCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                genres={["Hip-hop, Pop, Westcoast"]}
            />
            <SearchResultCard 
                title="VETERAN"
                artist="JPEGMAFIA"
                releaseDate="2018"
                genres={["Experimental hip-hop, hip-hop, political hip-hop"]}
            />
            <SearchResultCard 
                title="Let God Sort 'Em Out"
                artist="Clipse, Pusha T, Malice"
                releaseDate="2025"
                genres={["Hip-hop"]}
            />
            <SearchResultCard 
                title="OneShot (Original Game Soundtrack)"
                artist="Nightmargin"
                releaseDate="2015"
                genres={["Thing", "thing2", "idk"]}
            />
            <SearchResultCard 
                title="MELTING MOMENT"
                artist="POiSEN GiRLFRiEND"
                releaseDate="1987"
                genres={["Wow", "crazy"]}
            />
        </div>
    );
}