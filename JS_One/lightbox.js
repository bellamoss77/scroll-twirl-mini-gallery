document.addEventListener('DOMContentLoaded', () => {
    const images = [...document.querySelectorAll('img')];

    if (images.length > 0) {
        console.log(`There are ${images.length} images in the array.`);
    } else {
        console.error('The images array is empty!')
    }

    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    const showLightbox = (index) => {
        console.info(`Showing lightbox for image index: ${index}`);
        lightbox.classList.add('visible');
        updateLightboxImage(index);
    };

    const hideLightbox = () => {
        lightbox.classList.remove('visible');
    }

    const updateLightboxImage = (index) => {
        console.info(`Updating lightbox image to index: ${index}`);

        if (images[index]) {
            const lightboxContent = document.querySelector('.lightbox-content');
            const currentLightboxImg = document.querySelector('.lightbox-img');
            const newImg = new Image();
                newImg.src = images[index].src;
                newImg.alt = images[index].alt;
                newImg.className = 'lightbox-img';
                newImg.style.zIndex = '5';
                newImg.style.opacity = 0;
                
                newImg.onload = () => {
                    console.log('New Image Loaded: ', newImg.src);
                    console.log('Image Natural Width ', newImg.naturalWidth);
                    console.log('Image Natural Height: ', newImg.naturalHeight);
                    console.log('Image Width: ', newImg.width);
                    console.log('Image Height: ', newImg.height);

                    lightboxContent.appendChild(newImg);
                }

                gsap.to(currentLightboxImg, {
                        opacity: 0, 
                        duration: 1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            currentLightboxImg.remove();
                        }
                    })
                gsap.to(newImg, { opacity: 1, duration: 1, ease: 'power2.inOut' });

                    currentIndex = index;
                    console.info(`Image Updated: src=${images[index].src}, alt=${images[index].alt}`);
        } else {
            console.error(`Image at index ${index} does not exist.`);
        }
    };

    const showPrevImg = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage(newIndex);
    }

    const showNextImg = () => {
        const newIndex = (currentIndex + 1) % images.length;
        updateLightboxImage(newIndex);
    };

    images.forEach((img, index) => {
        img.addEventListener('click', () => showLightbox(index));
    });

    closeBtn.addEventListener('click', hideLightbox);
    prevBtn.addEventListener('click', showPrevImg);
    nextBtn.addEventListener('click', showNextImg);
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('visible')) {
            if (e.key === 'Escape') hideLightbox();
            if (e.key === 'ArrowLeft') showPrevImg();
            if (e.key === 'ArrowRight') showNextImg();
        }
    });
})