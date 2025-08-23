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