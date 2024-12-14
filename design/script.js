const data = [
    {
        "img": "https://via.placeholder.com/150?text=Start+Bootstrap",
        "item": "Start Bootstrap",
        "description": "Free and open-source Bootstrap-based templates for creating responsive websites.",
        "url": "https://startbootstrap.com/",
        "tutorial_url": "https://www.youtube.com/results?search_query=start+bootstrap+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=HTML5+UP",
        "item": "HTML5 UP",
        "description": "Beautifully designed, responsive HTML5 templates for free.",
        "url": "https://html5up.net/",
        "tutorial_url": "https://www.youtube.com/results?search_query=html5+up+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Bootstrap",
        "item": "Bootstrap",
        "description": "Popular front-end framework offering templates and starter kits for responsive web design.",
        "url": "https://getbootstrap.com/",
        "tutorial_url": "https://www.youtube.com/results?search_query=bootstrap+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=CodePen",
        "item": "CodePen",
        "description": "A free cloud-based platform for building, testing, and sharing web applications.",
        "url": "https://codepen.io/",
        "tutorial_url": "https://www.youtube.com/results?search_query=codepen+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Tailwind+UI",
        "item": "Tailwind UI",
        "description": "Premium components and templates built for Tailwind CSS.",
        "url": "https://tailwindui.com/",
        "tutorial_url": "https://www.youtube.com/results?search_query=tailwind+ui+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Foundation",
        "item": "Foundation by Zurb",
        "description": "Responsive front-end framework with templates and tools for modern web design.",
        "url": "https://get.foundation/",
        "tutorial_url": "https://www.youtube.com/results?search_query=foundation+by+zurb+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Material+Design",
        "item": "Material Design by Google",
        "description": "Templates and UI components following Google’s Material Design principles.",
        "url": "https://material.io/",
        "tutorial_url": "https://www.youtube.com/results?search_query=material+design+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=ThemeForest",
        "item": "ThemeForest",
        "description": "A marketplace with thousands of premium front-end templates for various purposes.",
        "url": "https://themeforest.net/",
        "tutorial_url": "https://www.youtube.com/results?search_query=themeforest+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Colorlib",
        "item": "Colorlib",
        "description": "Free templates with clean and modern designs for blogs, portfolios, and startups.",
        "url": "https://colorlib.com/wp/templates/",
        "tutorial_url": "https://www.youtube.com/results?search_query=colorlib+tutorial"
    },
    {
        "img": "https://via.placeholder.com/150?text=Firedrop",
        "item": "Firedrop",
        "description": "AI-powered tool for conversational website creation and design.",
        "url": "https://www.firedrop.ai/",
        "tutorial_url": "https://www.youtube.com/results?search_query=firedrop+tutorial"
    }
]


const row =  document.querySelector('.row');
data.forEach(element => {
    row.innerHTML += `
    <div class="col-md-4 mb-4">
    <div class="card mb-5" >
        <img src="${element['img']}" class="card-img-top" alt="Item Image">
            <div class="card-body">
            <h5 class="card-title">${element['item']}</h5>
            <p class="card-text">${element['description']}</p>
            <a href="${element['url']}" class="btn btn-primary">View More</a>
            <a href="${element['tutorial_url']}" target="_blank" class="btn btn-success">Video</a>
        </div>
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
