document.getElementById("year").textContent = new Date().getFullYear();


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

// Ensure the navbar is fixed at the top by applying the correct position CSS.
navbar.style.position = "fixed";
navbar.style.top = "0";
navbar.style.width = "100%";  // Ensure it spans the entire width.

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide navbar when scrolling down, show when scrolling up
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-70px";  // Adjust height to the height of your navbar
    } else {
        // Scrolling up
        navbar.style.top = "0";  // Show the navbar again
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Change unavailable status color to red
        document.querySelectorAll('.status').forEach(status => {
            if (status.textContent.toLowerCase() === 'unavailable') {
                status.style.backgroundColor = '#f44336';
            }
        });




    // Get the current page's filename
    var currentPage = window.location.pathname.split("/").pop();

    // Add the 'active' class to the relevant nav link
    switch (currentPage) {
        case "products.html":
            document.getElementById("products-link").classList.add("active", "glitch");
            break;
        case "about.html":
            document.getElementById("about-link").classList.add("active", "glitch");
            break;
        case "payment.html":
            document.getElementById("payment-link").classList.add("active", "glitch");
            break;
        case "index.html":
            document.getElementById("index-link").classList.add("active", "glitch");
            break;
        default:
            break;
    }
