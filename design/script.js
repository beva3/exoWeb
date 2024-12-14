const data = [
    {
        "img": "https://startbootstrap.com/assets/img/fb-share.jpg",
        "item": "Start Bootstrap",
        "description": "Free and open-source Bootstrap-based templates for creating responsive websites.",
        "url": "https://startbootstrap.com/"
    },
    {
        "img": "https://html5up.net/uploads/images/thumbs/default.jpg",
        "item": "HTML5 UP",
        "description": "Beautifully designed, responsive HTML5 templates for free.",
        "url": "https://html5up.net/"
    },
    {
        "img": "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        "item": "Bootstrap",
        "description": "Popular front-end framework offering templates and starter kits for responsive web design.",
        "url": "https://getbootstrap.com/"
    },
    {
        "img": "https://codepen.io/favicon.ico",
        "item": "CodePen",
        "description": "A free cloud-based platform for building, testing, and sharing web applications.",
        "url": "https://codepen.io/"
    },
    {
        "img": "https://tailwindcss.com/favicon-32x32.png",
        "item": "Tailwind UI",
        "description": "Premium components and templates built for Tailwind CSS.",
        "url": "https://tailwindui.com/"
    },
    {
        "img": "https://get.foundation/assets/img/brand.png",
        "item": "Foundation by Zurb",
        "description": "Responsive front-end framework with templates and tools for modern web design.",
        "url": "https://get.foundation/"
    },
    {
        "img": "https://material.io/static/assets/favicon.ico",
        "item": "Material Design by Google",
        "description": "Templates and UI components following Google’s Material Design principles.",
        "url": "https://material.io/"
    },
    {
        "img": "https://themeforest.net/favicon.ico",
        "item": "ThemeForest",
        "description": "A marketplace with thousands of premium front-end templates for various purposes.",
        "url": "https://themeforest.net/"
    },
    {
        "img": "https://colorlib.com/favicon.ico",
        "item": "Colorlib",
        "description": "Free templates with clean and modern designs for blogs, portfolios, and startups.",
        "url": "https://colorlib.com/wp/templates/"
    },
    {
        "img": "https://firedrop.ai/favicon.ico",
        "item": "Firedrop",
        "description": "AI-powered tool for conversational website creation and design.",
        "url": "https://www.firedrop.ai/"
    }
]


const container =  document.querySelector('.container');
data.forEach(element => {
    container.innerHTML += `
    <div class="card mb-5" style="width: 18rem;">
        <img src="${element['img']}" class="card-img-top" alt="Item Image">
            <div class="card-body">
            <h5 class="card-title">${element['item']}</h5>
            <p class="card-text">${element['description']}</p>
            <a href="${element['url']}" class="btn btn-primary">View More</a>
        </div>
    </div>
`
});

// container.innerHTML = `
//     <div class="card mb-5" style="width: 18rem;">
//         <img src="https://via.placeholder.com/150" class="card-img-top" alt="Item Image">
//             <div class="card-body">
//             <h5 class="card-title">Item Name</h5>
//             <p class="card-text">This is a brief description of the item, highlighting its features and qualities.</p>
//             <a href="#" class="btn btn-primary">View More</a>
//         </div>
//     </div>
// `
// container.innerHTML += `
//     <div class="card mb-5" style="width: 18rem;">
//         <img src="https://via.placeholder.com/150" class="card-img-top" alt="Item Image">
//             <div class="card-body">
//             <h5 class="card-title">Item Name</h5>
//             <p class="card-text">This is a brief description of the item, highlighting its features and qualities.</p>
//             <a href="#" class="btn btn-primary">View More</a>
//         </div>
//     </div>
// `
console.log(container);
