export const flickr = {
    key: 'e4c60406e344f1a784b9701521e3ec26',
    url: 'https://www.flickr.com',
    getRequestUrl(flickrTags) {
        return `${this.url}/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${flickrTags}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
    },
};

export const flickrKey = 'e4c60406e344f1a784b9701521e3ec26';
export const flickrTags = 'weather,forest,sky,sea,beach';


fetch(flickr.getRequestUrl(flickrTags))
    .then(response => {
        if (response.ok) {
        return response.json();
    } else {
        return {
            photos: {
                photo: [
                    {url_h: 'https://live.staticflickr.com/65535/51754780466_ac33e1f3d6_h.jpg'},
                    {url_h: ''},
                    {url_h: ''}
                ],
            }
        };
    };
    })
    .then(data => {
        const { photo: images } = data.photos;

        let id = 0;
        setInterval(() => {
            const img = new Image();

            img.src = images[id].url_h;

            document.body.style.backgroundImage = `url('${images[id].url_h}')`;

            id++;
        }, 10000);
    });