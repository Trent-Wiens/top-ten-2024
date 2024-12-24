document.getElementById("button").addEventListener("click", function () {
    document.getElementById("demo").style.color = "blue";
    document.getElementById("demo").textContent = "You clicked the button!";
});

// Select the button and the album container


// Handle all "Show Album" buttons
document.querySelectorAll('.overlay-button').forEach(button => {
    button.addEventListener('click', () => {
        // Find the related album container
        const albumContainer = button.nextElementSibling;

        // Fade out the button
        button.classList.add('hidden');

        // Fade in the album container
        albumContainer.classList.add('visible');

        // Optionally, hide the button entirely after fading out
        setTimeout(() => {
            button.style.display = 'none';
        }, 500); // Match the CSS transition duration
    });
});

// Handle all "Show Album" buttons
document.querySelectorAll('.h-overlay-button').forEach(button => {
    button.addEventListener('click', () => {
        // Find the related album container
        const albumContainer = button.nextElementSibling;

        // Fade out the button
        button.classList.add('hidden');

        // Fade in the album container
        albumContainer.classList.add('visible');

        // Optionally, hide the button entirely after fading out
        setTimeout(() => {
            button.style.display = 'none';
        }, 500); // Match the CSS transition duration
    });
});

// Handle all "Show Tracklist" buttons
document.querySelectorAll('.tracklist-dropdown').forEach(button => {
    button.addEventListener('click', () => {
        // Find the related tracklist
        const tracklist = button.nextElementSibling;

        // Toggle visibility
        if (tracklist.classList.contains('hidden')) {
            tracklist.classList.remove('hidden');
            tracklist.classList.add('visible');
            button.textContent = 'Hide Tracklist';
        } else {
            tracklist.classList.add('hidden');
            tracklist.classList.remove('visible');
            button.textContent = 'Show Tracklist';
        }
    });
});