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
        navbar.style.top = "-100px";  // Adjust height to the height of your navbar
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



    const translations = {
        "en": {
            "title": "Welcome to Khetra Bilasha Products",
            "description": "Your trusted partner for high-quality products.",
            "explore": "Explore Factory in 3D",
            "popular":"Popular Products",
            "popularP1": "Stylish Laminated PLY Door",
            "popularP2": "WPC Window Panel",
            "popularP3": "PVC Bathroom Door Panel",
            "popularP4": "Door Fitting Accessories",
            "popularP5": "Premium Plywood",
            "explore2": "Explore Our Products",
            "feature": "Our Featured Products",
            "feature01": "Cement Door Frame",
            "feature1": "Durable and stylish cement Door Frame perfect for Your Home.",
            "feature02": "Cement Planter",
            "feature2": "Modern and minimalistic planters to enhance your garden decor.",
            "feature03": "Cement Chuli",
            "feature3": "Efficient and durable traditional stove for long-lasting cooking.",
            "feature04": "Cement Chair",
            "feature4": "Strong, weather-resistant seating ideal for outdoor spaces.",

            "product" : "Our Products",
            "product1" : "Laminated Doors",
            "product1-dec":"",
            "product2": "PVC Bathroom-Doors",
            "product2-dec":"",
            "product3":"Cement Ring",
            "product3-dec":"",




        },
        "or": {
            "title": "କ୍ଷେତ୍ର ବିଳାଷ ପ୍ରଡକ୍ଟ କୁ ସ୍ଵାଗତ!",
            "description": "ଉନ୍ନତ ମାନର ଜିନିଷ ପାଇଁ ଆପଣଙ୍କ ବିଶ୍ବସ୍ତ ସହଯୋଗୀ।",
            "explore": "3D ରେ ଫ୍ୟାକ୍ଟ୍ରି ଦେଖନ୍ତୁ",
            "popular":"ଲୋକପ୍ରିୟ ପ୍ରଡକ୍ଟ",
            "popularP1": "ଆକର୍ଷଣୀୟ ଲାମିନେଟେଡ୍ ପ୍ଲାଇ କବାଟ",
            "popularP2": "WPC ଝରକା ପ୍ୟାନେଲ୍",
            "popularP3": "PVC ବାଥରୁମ ଡୋର୍",
            "popularP4": "କବାଟ ଫିଟିଙ୍ଗ୍ ଜିନିଷ",
            "popularP5": "ଉନ୍ନତ ମାନର ପ୍ଲାଇଉଡ୍",
            "explore2": "ଆମର ଅନ୍ୟ ଜିନିଷ ଦେଖନ୍ତୁ",
            "feature": "ବିଶେଷ ନିର୍ମିତ ସିମେନ୍ଟ ପ୍ରଡକ୍ଟ",
            "feature01": "ସିମେଣ୍ଟ ଦୁଆର ବନ୍ଧ",
            "feature1": "ଏକ ଦୃଢ଼ ଏବଂ ଆଧୁନିକ ଦୁଆର ବନ୍ଧ, ଆପଣଙ୍କ ଘର ପାଇଁ ଉତ୍ତମ।",
            "feature02": "ସିମେଣ୍ଟ ଫୁଲକୁଣ୍ଡ",
            "feature2": "ଏକ ଦୃଢ଼ ଏବଂ ସୁନ୍ଦର ଡିଜାଇନର ଫୁଲକୁଣ୍ଡ, ଯାହା ବଗିଚା, ଘର ଶୋଭା ବଢ଼ାଇବା ପାଇଁ ବିଶେଷ ଭାବରେ ନିର୍ମିତ।",
            "feature03": "ସିମେଣ୍ଟ ଚୁଲି",
            "feature3": "ଏକ ଦୃଢ଼ ଏବଂ ସୁବିଧାଜନକ ଚୁଳି,  ଘର  ବାହାରେ ନିର୍ବିଘ୍ନରେ ସ୍ଵାଦିଷ୍ଟ ଖାଦ୍ୟ କରନ୍ତୁ।",
            "feature04": "ସିମେଣ୍ଟ ଚେୟାର",
            "feature4": "ଘର ଓ ବାହାର ପାଇଁ ଦୃଢ଼ ଏବଂ ଆକର୍ଷଣୀୟ ଚେୟାର।",

            "product" : "ଆମର ଜିନିଷ ",
            "product1": "ଲାମିନେଟେଡ୍ ପ୍ଲାଇ କବାଟ",
            "product1-dec": "୧୦୦ ପ୍ରତିଶତ  ହାର୍ଡ ଉଡ୍ ରୁ ପ୍ରସ୍ତୁତ |   ତତ୍କାଳୀନ ଏବଂ ଦୀର୍ଘଦିନ ପାଇଁ  ଉପଯୋଗୀ |   ଉଇ  ଏବଂ ପାଣି ପ୍ରତିରୋଧକ",
            "product2": "PVC ବାଥରୁମ କବାଟ",
            "product2-dec": "ଉନ୍ନତ ମାନର ପ୍ଲାଷ୍ଟିକ୍ ଦ୍ୱାରା ତିଆରି କବାଟ  | ଏକାଧିକ ଡିଜାଇନ: ଆପଣଙ୍କର ଘରକୁ ଚାହିଁ ଅନକେ ରଙ୍ଗ ଏବଂ ଡିଜାଇନ ର  କବାଟ ଅଛି    |  ଏହି  କବାଟ ପାଣି ରେ  ନଷ୍ଟ ହେବନାହିଁ  | ",
            "product3": "ସିମେନ୍ଟ  ନନ୍ଦ",
            "product3-dec": "ଏହା  କୂଅ, ଲ୍ୟାଟିନ୍, ସେପ୍ଟିକ ଟ୍ୟାଙ୍କ୍  ଏବଂ  ଡ୍ରେନେଜ ପାଇଁ ଉପଯୋଗୀ | କଳା ତାର ରେ  ତିଆରି ସଶକ୍ତ ନନ୍ଦ, ଭାରି ଭାର ବହନ କରିପାରେ |  ବର୍ଷା, ଖରା,  ବତାସ  ରେ ଭାଙ୍ଗିବ ନାହିଁ | ୩-ଫୁଟ ରୁ ୫-ଫୁଟ ନନ୍ଦ ଅଛି"

        }
    };

    function changeLanguage(lang) {
        document.getElementById('title').innerText = translations[lang]["title"];
        document.getElementById('description').innerText = translations[lang]["description"];
        document.getElementById('popular').innerText = translations[lang]["popular"];
        document.getElementById('popularP1').innerText = translations[lang]["popularP1"];
        document.getElementById('popularP2').innerText = translations[lang]["popularP2"];
        document.getElementById('popularP3').innerText = translations[lang]["popularP3"];
        document.getElementById('popularP4').innerText = translations[lang]["popularP4"];
        document.getElementById('popularP5').innerText = translations[lang]["popularP5"];
        document.getElementById('feature').innerText = translations[lang]["feature"];
        document.getElementById('feature01').innerText = translations[lang]["feature01"];
        document.getElementById('feature1').innerText = translations[lang]["feature1"];
        document.getElementById('feature02').innerText = translations[lang]["feature02"];
        document.getElementById('feature2').innerText = translations[lang]["feature2"];
        document.getElementById('feature03').innerText = translations[lang]["feature03"];
        document.getElementById('feature3').innerText = translations[lang]["feature3"];
        document.getElementById('feature04').innerText = translations[lang]["feature04"];
        document.getElementById('feature4').innerText = translations[lang]["feature4"];

        document.getElementById('product').innerText = translations[lang]["product"];
        document.getElementById('product1').innerText = translations[lang]["product1"];
        document.getElementById('product1-dec').innerText = translations[lang]["product1-dec"];
        document.getElementById('product2').innerText = translations[lang]["product2"];
        document.getElementById('product2-dec').innerText = translations[lang]["product2-dec"];
        document.getElementById('product3').innerText = translations[lang]["product3"];
        document.getElementById('product3-dec').innerText = translations[lang]["product3-dec"];
        

        
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.innerText = translations[lang][key];
            }
        });
    
        // Save preference in localStorage
        localStorage.setItem("selectedLanguage", lang);
    }
    
    // Load saved language preference OR default to Odia (or)
    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("selectedLanguage") || "or"; // Set Odia as default
        changeLanguage(savedLang);
        document.getElementById("language").value = savedLang;
    });
    
