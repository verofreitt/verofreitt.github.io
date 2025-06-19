document.addEventListener("DOMContentLoaded", function() {
    // Initialize particles.js
    particlesJS.load('particles-js', 'js/particles-config.js', function() {
        console.log('particles.js loaded');
    });

    // Initialize stats.js
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    // Update stats
    var count_particles = document.querySelector('.js-count-particles');
    
    function update() {
        stats.begin();
        stats.end();
        
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    }
    
    requestAnimationFrame(update);
});
