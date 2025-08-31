import SavedAlbumCard from "./SavedAlbumCard";
import { DragDropContext } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";

interface SavedAlbumsProps {
    savedAlbums: SavedAlbum[];
    removeSavedAlbum: any;
}

interface Results {
    draggableId: string;
    sourceId: string;
}

export default function SavedAlbums({savedAlbums, removeSavedAlbum}: SavedAlbumsProps) {

    function onDragEnd(sourceIndex: string, draggableId: string, destinationIndex?: string, ) {

        if (!destinationIndex) return;

        if (sourceIndex === destinationIndex) { // See if location of draggable changes
            return; // Means we don't need to do anything
        }

        // const savedAlbumsColumn = state.columns["SavedAlbumsDroppable"];
        // const newSavedAlbumIds = Array.from(savedAlbumsColumn)
        
        return "thing";

    };
    

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >

            <Droppable
                droppableId={"SavedAlbumsDroppable"}
            >
                {provided => (
                    <div
                        className="bg-mq-darkgray h-full max-h-full rounded-3xl p-8 flex flex-col gap-y-4 overflow-y-scroll"
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
                    
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}