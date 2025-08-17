import SavedAlbumCard from "./SavedAlbumCard";

export default function SavedAlbums() {
    return (
        <div className="bg-mq-darkgray h-full max-h-full rounded-3xl p-8">
            <SavedAlbumCard 
                title="WHERE IS MY HEAD?"
                artist="Rich Brian"
                releaseDate="2025"
                dateAdded="08-15-2025"
            />
        </div>
    );
}