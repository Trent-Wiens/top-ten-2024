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
// Select the button and the album container
// const showAlbumButton = document.getElementById("show-album");
// const albumContainer = document.getElementById("album");
// const toggleTracklistButton = document.getElementById("toggle-tracklist");
// const tracklist = document.getElementById("tracklist");

// // Show the album and hide the button simultaneously
// showAlbumButton.addEventListener("click", () => {
//     // Start fading out the button
//     showAlbumButton.classList.add("hidden");

//     // Start fading in the album at the same time
//     albumContainer.classList.add("visible");

//     // Optional: After the fade-out completes, hide the button entirely
//     setTimeout(() => {
//         showAlbumButton.style.display = "none";
//     }, 500); // Match the CSS transition duration
// });

// // Toggle the tracklist visibility
// toggleTracklistButton.addEventListener("click", () => {
//     if (tracklist.classList.contains("hidden")) {
//         tracklist.classList.remove("hidden");
//         tracklist.classList.add("visible");
//         toggleTracklistButton.textContent = "Hide Tracklist";
//     } else {
//         tracklist.classList.add("hidden");
//         tracklist.classList.remove("visible");
//         toggleTracklistButton.textContent = "Show Tracklist";
//     }
// });