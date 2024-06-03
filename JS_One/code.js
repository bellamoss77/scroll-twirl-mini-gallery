document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({
        duration: 2,
        ease: 'power1.inOut'
    });

    gsap
        .timeline({
            scrollTrigger: {
                scrub: 1,
            }
        })
        .to('.gallery-container', {
            scale: 1,
            rotate: 270
        })
        .to('img', {
            rotate: -270
        }, 0)
})

