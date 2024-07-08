// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all thumbnail images
    const thumbnails = document.querySelectorAll("#thumbnails img");
    // Select the featured image displayed in the figure element
    const featuredImage = document.querySelector("#gallery figure img");
    // Select the caption element inside the figure
    const caption = document.querySelector("#gallery figure figcaption");

    // Array of objects containing image details (large, small, alt text, and title)
    const images = [
        {
            large: "images/flowers-pink-large.jpg",
            small: "images/flowers-pink-small.jpg",
            alt: "Sunflowers in the hamlet Dernekamp",
            title: "Sunflowers in the hamlet Dernekamp"
        },
        {
            large: "images/flowers-purple-large.jpg",
            small: "images/flowers-purple-small.jpg",
            alt: "Poppies in cornfield",
            title: "Poppies in cornfield"
        },
        {
            large: "images/flowers-red-large.jpg",
            small: "images/flowers-red-small.jpg",
            alt: "Daffodils in Sentmaring park",
            title: "Daffodils in Sentmaring park"
        },
        {
            large: "images/flowers-white-large.jpg",
            small: "images/flowers-white-small.jpg",
            alt: "Sentmaring Park",
            title: "Sentmaring Park"
        },
        {
            large: "images/flowers-yellow-large.jpg",
            small: "images/flowers-yellow-small.jpg",
            alt: "Market in Münster",
            title: "Market in Münster"
        }
    ];

    // Add click event listeners to each thumbnail image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            // Update the featured image with the clicked thumbnail's large version
            featuredImage.src = images[index].large;
            featuredImage.alt = images[index].alt; // Update alt attribute for accessibility
            caption.textContent = images[index].title; // Update caption text

            // Remove the 'active' class from all thumbnails
            thumbnails.forEach(img => img.classList.remove("active"));
            // Add the 'active' class to the clicked thumbnail
            thumbnail.classList.add("active");
        });
    });

    // Set the first thumbnail as active by default
    thumbnails[0].classList.add("active");
});

