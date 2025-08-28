import SavedAlbumCard from "./SavedAlbumCard";
import { DragDropContext } from "@hello-pangea/dnd";

interface SavedAlbumsProps {
    savedAlbums: SavedAlbum[];
    removeSavedAlbum: any;
}

export default function SavedAlbums({savedAlbums, removeSavedAlbum}: SavedAlbumsProps) {
    return (
        <div className="bg-mq-darkgray h-full max-h-full rounded-3xl p-8 flex flex-col gap-y-4 overflow-y-scroll">
            {savedAlbums.length === 0 ? (
                <div className="h-full w-full flex justify-center items-center text-xl italic text-[#B7B7B7]">
                    No Saved Albums
                </div>
            ) : (savedAlbums.map( (album: SavedAlbum) => {
                
                console.log(album.images);
                return (
                    <SavedAlbumCard 
                        key={album.id}
                        id={album.id}
                        title={album.name}
                        artists={album.artists}
                        releaseDate={album.release_date}
                        cover={album.images[0].url ?? "/images/EmptySymbol.png"}
                        dateAdded={album.date_added}
                        removeSavedAlbum={removeSavedAlbum}
                    />
                );
            }))}
            
        </div>
    );
}