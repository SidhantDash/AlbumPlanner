import SavedAlbumCard from "./SavedAlbumCard";
import { DragDropContext } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";
import { OnDragEndResponder } from "@hello-pangea/dnd";
import { DropResult } from "@hello-pangea/dnd";

interface SavedAlbumsProps {
    savedAlbums: SavedAlbum[];
    setSavedAlbums: any;
    removeSavedAlbum: any;
}

interface Results {
    draggableId: string;
    sourceId: string;
}

export default function SavedAlbums({savedAlbums, setSavedAlbums, removeSavedAlbum}: SavedAlbumsProps) {

    const onDragEnd: OnDragEndResponder = (result: DropResult) => {
        const {draggableId, source, destination} = result;

        // If there is no destination, then nothing need to do
        if (!destination) return;

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) { // See if location of draggable changes
            return; // Means we don't need to do anything
        }
        
        const newSavedAlbums: SavedAlbum[] = [...savedAlbums];

        // Now need to move task id from old index to new index
        const changingAlbum: SavedAlbum = newSavedAlbums.splice(source.index, 1)[0]; // "From this index, want to remove '1' (second param) item"
        newSavedAlbums.splice(destination.index, 0, changingAlbum); // "Starm from desination index, remove nothing, and insert"

        setSavedAlbums(newSavedAlbums);

    };
    

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >

            <Droppable
                droppableId={"SavedAlbumsDroppable"}
            >
                {(provided) => (
                    <div
                        className="bg-mq-darkgray h-full max-h-full rounded-3xl p-8 flex flex-col overflow-y-scroll pb-4"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {savedAlbums.length === 0 ? (
                            <div className="h-full w-full flex justify-center items-center text-xl italic text-[#B7B7B7]">
                                No Saved Albums
                            </div>
                        ) : (savedAlbums.map( (album: SavedAlbum, index: number) => {
                            return (
                    
                                    <SavedAlbumCard
                                        key={album.id}
                                        id={album.id}
                                        index={index}
                                        title={album.name}
                                        artists={album.artists}
                                        releaseDate={album.release_date}
                                        cover={album.images[0].url ?? "/images/EmptySymbol.png"}
                                        dateAdded={album.date_added}
                                        removeSavedAlbum={removeSavedAlbum}
                                    />
                            );
                        }))}
                    
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}