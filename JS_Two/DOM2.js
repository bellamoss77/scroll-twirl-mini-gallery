document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const images = [
        {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_1.png?raw=true',
            alt: 'dog',
            caption: 'Forest Wanderings',
            id: 'one'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_2.png?raw=true',
            alt: 'mountain laurel',
            caption: 'Laurel Laments',
            id: 'two'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_3.png?raw=true',
            alt: 'forest moss',
            caption: 'Mossy Moments',
            id: 'three'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_4.png?raw=true',
            alt: 'dog running across field',
            caption: 'Playtime',
            id: 'four'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_5.png?raw=true',
            alt: 'stormy skies',
            caption: 'Still Before the Storm',
            id: 'five'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_6.png?raw=true',
            alt: 'path through field with cloudy sky',
            caption: 'Path to Oblivion',
            id: 'six'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_7.png?raw=true',
            alt: 'purple plant',
            caption: 'Purple Prickles',
            id: 'seven'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_8.png?raw=true',
            alt: 'wild orchard stand',
            caption: 'Nostalgia',
            id: 'eight'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_9.png?raw=true',
            alt: 'sunset over lake',
            caption: 'Still Serenity',
            id: 'nine'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_10.png?raw=true',
            alt: 'interesting rock formation by sunset reflected on lake',
            caption: 'Peaceful Ponderings',
            id: 'ten'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_11.png?raw=true',
            alt: 'sunset reflected on water framed by foliage silhouette',
            caption: 'Color Contrasts',
            id: 'eleven'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_12.png?raw=true',
            alt: 'cloudy skies over lake',
            caption: 'Cloudy Contemplation',
            id: 'twelve'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_13.png?raw=true',
            alt: 'geese',
            caption: 'Fine Formation',
            id: 'thirteen'
        }, {
            src: 'https://github.com/bellamoss77/scroll-twirl-mini-gallery/blob/main/images_2/Hikes-Late-May24_14.png?raw=true',
            alt: 'sunset over lake',
            caption: 'Euphoric Endings',
            id: 'fourteen'
        }
    ];

    const generateDOM = () => {
        images.forEach(image => {
            const section = document.createElement('div');
            section.className = 'section';
            section.classList.add(`${image.id}`);

            const sectionImage = document.createElement('div');
            sectionImage.className = 'bg'
            sectionImage.style.backgroundImage = `url(${image.src})`;

            const caption = document.createElement('h3');
            caption.innerText = `${image.caption}`

            app.appendChild(section);
            section.appendChild(sectionImage);
            section.appendChild(caption);
        })
    }
    generateDOM();
})