function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


let MY_PORTPOLIO = (function(){
    let _app;
    let _linkedInURI = 'https://www.linkedin.com/in/arivignesh-m-b96781201/';
    let _mailId = 'marivignesh2001@gmail.com'

    let init = () => {
        _app = document.getElementById('app');
        populateHtml();
    }

    let populateHtml = () => {
        populateProfileHtml();
        populateAboutHtml();
        populateExperienceHtml();
        populateProjectsHtml();
        populateContactHtml();
        populateFooterHtml();
    }

    let appendSectionInBody = (id, html, isNeedFlexClass = true) => {
        let contactSection = document.createElement('section');
        contactSection.setAttribute('id', id);
        if(isNeedFlexClass) {
            contactSection.classList.add('flexM', 'fdirection');
        }
        contactSection.innerHTML = html;

        _app.appendChild(contactSection);
    }

    let populateProfileHtml = () => {
        let html = `<div class="section__pic-container">
                        <img src="./assets/profile-pic.jpg" alt="Arivignesh profile picture" />
                    </div>
                    <div class="section__text">
                        <p class="section__text__p1">Hello, I'm</p>
                        <h1 class="title">Arivignesh M</h1>
                        <p class="section__text__p2">Frontend Developer</p>
                        <div class="btn-container">
                            <button class="btn btn-color-2" onclick="window.open('./assets/resume-example.pdf')"> Download CV </button>
                            <button class="btn btn-color-1" onclick="location.href='./#contact'"> Contact Info </button>
                        </div>
                        <div id="socials-container">
                            <img
                                src="./assets/linkedin.png"
                                alt="My LinkedIn profile"
                                class="icon"
                                onclick="window.open('${_linkedInURI}')"
                            />
                            <img
                                src="./assets/github.png"
                                alt="My Github profile"
                                class="icon"
                                onclick="window.open('https://github.com/ArivigneshM')"
                            />
                        </div>
                     </div>`;

        appendSectionInBody('profile', html, false)
    }

    let populateAboutHtml = () => {
        let arr = [{
            src : './assets/experience.png',
            alt : 'Experience icon',
            title : 'Experience',
            desc : '2+ years <br/>Frontend Development'
        }, {
            src : './assets/education.png',
            alt : 'Education icon',
            title : 'Education',
            desc : 'B.E <br/> Computer Science Engineering'
        }]
        let html = `<p class="section__text__p1">Get To Know More</p>
                    <h1 class="title">About Me</h1>
                    <div class="section-container">
                        ${false ? `<div class="section__pic-container">
                                <img
                                    src="./assets/about-pic.png"
                                    alt="Profile picture"
                                    class="about-pic"
                                />
                            </div>` : ''}
                        <div class="about-details-container">
                            <div class="about-containers">`;

        html = arr.reduce((prev, next) => {
            return prev += `<div class="details-container">
                                <img
                                    src="${next.src}"
                                    alt="${next.alt}"
                                    class="icon"
                                />
                                <h3>${next.title}</h3>
                                <p>${next.desc}</p>
                            </div>`;
        }, html);

        html += `</div><div class="text-container">
                    <p>
                        Dynamic Frontend Engineer with over 2 years of experience designing and developing scalable web applications using modern technologies like HTML5, CSS, JavaScript, and Vue.js. Skilled in creating reusable components, optimizing state management with Vuex, and enhancing navigation flows for scalability. Proven expertise in implementing real-time features such as in-chat calling and WebSocket integration for seamless user experiences. Adept at improving application performance through client-side caching using IndexedDB and reducing server overhead. Experienced in collaborating with backend teams to align API integrations and frontend logic. Passionate about UI/UX improvements to deliver intuitive, user-friendly interfaces. A fast learner and problem solver, consistently embracing new challenges and technologies with enthusiasm.
                    </p>
                </div> </div> </div> <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#experience'" />`;

        appendSectionInBody('about', html);
    }

    let populateExperienceHtml = () => {
        let experience = [{
            src : './assets/html.webp',
            title : 'HTML5',
            experience : 'Experienced'
        },{
            src : './assets/css.png',
            title : 'CSS3',
            experience : 'Experienced'
        },{
            src : './assets/less.jpeg',
            title : 'LESS',
            experience : 'Experienced'
        },{
            src : './assets/js.png',
            title : 'JavaScript',
            experience : 'Experienced'
        },{
            src : './assets/vue.png',
            title : 'Vue Js',
            experience : 'Experienced'
        },{
            src : './assets/vue.png',
            title : 'Vuex',
            experience : 'Experienced'
        },{
            src : './assets/react.png',
            title : 'React',
            experience : 'Intermediate'
        },{
            src : './assets/git.png',
            title : 'Git',
            experience : 'Experienced'
        },{
            src : './assets/webpack.png',
            title : 'Webpack',
            experience : 'Intermediate'
        },{
            src : './assets/jquery.png',
            title : 'jQuery',
            experience : 'Experienced'
        }];

        let html = ` <p class="section__text__p1">Explore My</p>
                    <h1 class="title">Experience</h1>
                    <div class="experience-details-container">
                        <div class="about-containers">
                            <div class="details-container">
                                <h2 class="experience-sub-title">Frontend Development</h2>
                                    <div class="article-container">`;

        html = experience.reduce((prev, next) => {
            return prev += `<article>
                                <img
                                    src="${next.src}"
                                    alt="${next.title} icon"
                                    class="icon"
                                />
                                <div>
                                    <h3>${next.title}</h3>
                                    <p>${next.experience}</p>
                                </div>
                            </article>`
        }, html);

        html += `</div> </div> </div> </div> <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#projects'" /> </section>`;

        appendSectionInBody('experience', html);
    }

    let populateProjectsHtml = () => {

        let recentProjects = [{
            src : "./assets/bookstore.png",
            alt : "Book store",
            title : "Book store",
            gitHubLink : 'https://github.com/arivigneshm/bookstore',
            demoLink : 'https://arivignesh-bookstore.netlify.app/'
        }, {
            src : './assets/project-2.png',
            alt : 'Project 2',
            title : 'Project 2',
            gitHubLink : 'https://github.com/',
            demoLink : 'https://github.com/'
        }, {
            src : './assets/project-3.png',
            alt : 'Project 3',
            title : 'Project 3',
            gitHubLink : 'https://github.com/',
            demoLink : 'https://github.com/'
        }]


        let html = `<p class="section__text__p1">Browse My Recent</p>
                    <h1 class="title">Projects</h1>
                    <div class="experience-details-container">
                        <div class="about-containers">`;

        html = recentProjects.reduce((prev, next) => {
            return prev += `<div class="details-container color-container">
                                <div class="article-container">
                                    <img
                                        src="${next.src}"
                                        alt="${next.alt}"
                                        class="project-img"
                                    />
                                </div>
                                <h2 class="experience-sub-title project-title">${next.title}</h2>
                                <div class="btn-container">
                                    <button class="btn btn-color-2 project-btn" onclick="window.open('${next.gitHubLink}')"> Github </button>
                                    <button class="btn btn-color-2 project-btn" onclick="window.open('${next.demoLink}')"> Live Demo </button>
                                </div>
                            </div>`
        }, html);

        html += `</div> </div> <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#contact'" />`;

        appendSectionInBody('projects', html);
    }

    let populateContactHtml = () => {
        let contactItems = [{
            src : "./assets/email.png",
            alt : 'Email icon',
            class : 'email-icon',
            url : `mailto:${_mailId}`,
            title : `${_mailId}`
        },{
            src : "./assets/linkedin.png",
            alt : 'LinkedIn icon',
            class : '',
            url : `${_linkedInURI}`,
            title : 'LinkedIn'
        }]
        let html = `<p class="section__text__p1"> Get in Touch </p> <h1 class="title"> Contact Me </h1> <div class="contact-info-upper-container">`;

        html = contactItems.reduce((prev, next) => {
            return prev += `<div class="contact-info-container curP">
                                <img 
                                    src="${next.src}"
                                    alt="${next.alt}"
                                    class="icon contact-icon ${next.class}"
                                />
                                <p onclick="window.open('${next.url}')">${next.title}</p>
                            </div>`
        }, html);

        html += `</div>`;

        appendSectionInBody('contact', html);
    }

    let populateFooterHtml = () => {
        let html = `<nav> <div class="nav-links-container"> <ul class="nav-links">`;

        let footerElems = [{
            id : 'about',
            title : 'About'
        },{
            id : 'experience',
            title : 'Experience'
        },{
            id : 'projects',
            title : 'Projects'
        },{
            id : 'contact',
            title : 'Contact'
        }];

        html = footerElems.reduce((prev, next) => {
            return prev += `<li><a href="#${next.id}">${next.title}</a></li>`
        }, html);

        html += `</ul> </div> </nav> <p>Copyright &#169; 2024 Arivignesh. All Rights Reserved.</p>`;

        let footer = document.createElement('footer');
        footer.innerHTML = html;
        _app.appendChild(footer);
    }

    return {
        init
    }
})();


