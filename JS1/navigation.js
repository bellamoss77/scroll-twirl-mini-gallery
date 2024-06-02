document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.getElementById('navBtn');
    const navContainer = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-li');
    const logo = document.querySelector('.logo');

    navBtn.addEventListener('click', function() {
        if(!this.tl) {
            const navContainerWidth = navContainer.offsetWidth;

            this.tl = new TimelineMax({
                paused: true,
                onReverseComplete: function() {
                    navContainer.classList.remove('open')
                }
            })
            
            this.tl.to(navContainer, 0.5, { x: 0 })
                .to(logo, 0.5, { x: navContainerWidth }, 0)
                .staggerFrom(navItems, 0.4, { x: '-30px', opacity: 0 }, 0.3)
        }

        if (!navContainer.classList.contains('open')) {
            navContainer.classList.add('open');
            this.tl.play()
        } else {
            this.tl.reverse()
        }
    })
})