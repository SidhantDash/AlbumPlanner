import SavedAlbumCard from "./SavedAlbumCard";
import { DragDropContext } from "@hello-pangea/dnd";

export default function SavedAlbums() {
    return (
        <div className="bg-mq-darkgray h-full max-h-full rounded-3xl p-8 flex flex-col gap-y-4 overflow-y-scroll">
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
            
        </div>
    );
}