type Album = {
    id: string;
    name: string;
    artists: [
        {
            name: string;
        }
    ];
    release_date: string;
    images: [
        {
            url: string;
        }
    ];
}

type SavedAlbum = {
    id: string;
    name: string;
    artists: [
        {
            name: string;
        }
    ];
    release_date: string;
    images: [
        {
            url: string;
        }
    ];
    date_added: string;
}