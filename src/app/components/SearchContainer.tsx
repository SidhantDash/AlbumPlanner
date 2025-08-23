import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default function SearchContainer() {


    return (
        <div className="flex flex-col items-center gap-4 w-2/3">
            <SearchBar />
            {/* <SearchResults /> */}
        </div>
    );
}