(this["webpackJsonpreact-listen-port-folio"]=this["webpackJsonpreact-listen-port-folio"]||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),c=a(22),n=a.n(c),r=(a(21),a(24)),l=a(3),o=a(4),d=a(25),j=a(1),h=function(){return Object(i.useEffect)((function(){d.a.from(".content01",{duration:2,rotationY:360,opacity:0,ease:"power2.out",stagger:.5})}),[]),Object(j.jsxs)("div",{className:"home-container",children:[Object(j.jsx)("p",{className:"content01 is-medium",children:"Hi! I am Gerard!"}),Object(j.jsx)("img",{className:"my-own-picture",src:"/React-Listen-Port-Folio/img/ForLinkedInProfile05.jpg",alt:"ForLinkedInProfile05.jpg"}),Object(j.jsx)("p",{className:"content01 is-medium",children:"A Full Stack Web developer"}),Object(j.jsx)("p",{className:"content02",children:"This is my Portfolio!"})]})},m=a(23),b=function(){var e=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=new m.a(e.current,{strings:["Full Stack Web Developer with a unique background in intensive care, applying that same intensity to innovate and elevate web applications and software platforms. Certified in Full Stack Web Development from the University of Central Florida .","Dedicated, solution-driven, and deeply enthusiastic about web application development.","My strengths lie in problem-solving, communication, adaptability, and fostering strong teamwork. I am continuously seeking opportunities to enhance my skills in web development languages and associated technologies."],typeSpeed:50,backSpeed:25,backDelay:1e3,startDelay:500,showCursor:!0,loop:!0});return function(){t.destroy()}}),[]),Object(j.jsx)("div",{className:"app-container",children:Object(j.jsx)("div",{className:"main-content",children:Object(j.jsx)("span",{className:"content is-medium about-content",ref:e})})})};var u={1:{link:"https://github.com/Gdel-J",label:"GitHub",iconClass:"fab fa-github",fontSize:"1.4em"},2:{link:"https://www.linkedin.com/in/gerard-del-vecchio-39a231285/",label:"LinkedIn",iconClass:"fab fa-linkedin",fontSize:"1.4em"},3:{link:"mailto:jessygdelvecchio@gmail.com",label:"jessygdelvecchio@gmail.com",iconClass:"fas fa-envelope",fontSize:"0.4em"},4:{link:"https://github.com/Gdel-J",label:"GitHub",iconClass:"fab fa-github",fontSize:"1.4em"},5:{link:"https://www.linkedin.com/in/gerard-del-vecchio-39a231285/",label:"LinkedIn",iconClass:"fab fa-linkedin",fontSize:"1.4em"},6:{link:"mailto:jessygdelvecchio@gmail.com",label:"jessygdelvecchio@gmail.com",iconClass:"fas fa-envelope",fontSize:"0.4em"}};function p(e){var t=e.face;return Object(j.jsxs)("a",{href:u[t].link,target:"_blank",rel:"noreferrer",style:{fontSize:u[t].fontSize},children:[Object(j.jsx)("i",{className:u[t].iconClass})," ",u[t].label]})}var g=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsx)("div",{className:"contact-cube-container",children:Object(j.jsx)("div",{className:"contact-cube",onClick:function(){s((function(e){return e+90}))},style:{transform:"rotateY(".concat(a,"deg)")},children:[1,2,3,4,5,6].map((function(e){return Object(j.jsx)("div",{className:"contact-face face-".concat(e),children:Object(j.jsx)(p,{face:e})},e)}))})})};var f=function(){return Object(j.jsxs)("section",{id:"reach-out",className:"contact",children:[Object(j.jsx)("div",{className:"flex-row",children:Object(j.jsx)("h2",{className:"section-title secondary-border",children:"CONTACT"})}),Object(j.jsxs)("div",{className:"contact-info",children:[Object(j.jsx)(g,{}),Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"Please click on the cube's icons or footer's icons to contact Me"})})]})]})};var O=function(e){var t=Object(i.useRef)([]);return Object(i.useEffect)((function(){var e=t.current,a=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("visible")}))}),{root:null,rootMargin:"0px",threshold:.1});return e.forEach((function(e){e instanceof Element&&a.observe(e)})),function(){e.forEach((function(e){e instanceof Element&&a.unobserve(e)}))}}),[]),Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row",children:e.projects.map((function(e,a){return Object(j.jsx)("div",{className:"column is-half lazy-load fade-in",ref:function(e){return t.current[a]=e},style:{animationDelay:"".concat(.2*a,"s")},children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("a",{href:e.live,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:"/React-Listen-Port-Folio"+e.image,alt:"Project Screenshot"})})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left"}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-4",children:e.title})})]}),Object(j.jsxs)("div",{className:"content has-text-left",children:[e.description,Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"content is-family-code",children:["Languages: ",e.languages,Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("footer",{className:"card-footer",children:[Object(j.jsx)("a",{href:e.repo,className:"card-footer-item",target:"_blank",rel:"noreferrer",children:"Look at the Repository"}),Object(j.jsx)("a",{href:e.live,className:"card-footer-item",target:"_blank",rel:"noreferrer",children:"Enjoy it on the live site!"})]})})]})]})]})},e.id)}))})})},x=[{id:0,title:"Code-Quizz-Challenge",languages:"HTML, CSS, JavaScript",image:"/img/Code-quizz-challenge.png",description:"This is a quiz application",repo:"https://github.com/Gdel-J/Code-quiz-challenge.git",live:"https://gdel-j.github.io/Code-quiz-challenge"},{id:1,title:"Work-day-Scheduler",languages:"HTML,CSS,JavaScript",image:"/img/Work-Day-Scheduler.png",description:"This is a day planner app ",repo:"https://github.com/Gdel-J/Work-day-Scheduler.git",live:"https://gdel-j.github.io/Work-day-Scheduler/"},{id:2,title:"Weather-Dashboard",languages:"HTML,CSS,JavaScript,Server Side API",image:"/img/Weather-Dashboard2.png",description:"This is an application that allows users to search for a city to get the current weather and 5 day forecast. ",repo:"https://github.com/Gdel-J/Weather-Dashboard.git",live:"https://gdel-j.github.io/Weather-Dashboard"},{id:3,title:"Find-and-Stream",languages:"HTML,CSS,JavaScript,Server side API",image:"/img/Find-and-Stream.png",description:"This application was built in order to allow users to search and find a streaming platform for a movie. ",repo:"https://github.com/gmgabrie/find-and-stream.git",live:"https://gmgabrie.github.io/find-and-stream/"},{id:4,title:"MVC-Tech-Blog",languages:"HTML,CSS,JavaScript,MVC",image:"/img/MVC.png",description:"This is a full-stack CMS-style blog site where users can publish posts",repo:"https://github.com/Gdel-J/MVC-Tech-Blog.git",live:"https://mymvctechblog777-91a7da73e3ed.herokuapp.com/"},{id:5,title:"Sport-Spot",languages:"CSS,JavaScript,MySql,Sequelize,Express.js",image:"/img/Sport-Spot.png",description:"This is a full-stack CMS-style site where users can access to the last NBA game results and add comments about it",repo:"https://github.com/restas13/sport-spot.git",live:"https://sport-spot-group7.herokuapp.com/"},{id:6,title:"PWA-textEditor-Challenge",languages:"HTML,CSS,JavaScript,PWA",image:"/img/Just-Another-text-Editor.png",description:" This  application: J.A.T.E is a Progressive Web Application (PWA),  text editor, that runs in the browser,online or offline the user can create notes the user can retrieve them for later use.",repo:"https://github.com/Gdel-J/PWA-textEditor-Challenge.git",live:"https://pwa-texteditor-challenge777-17576331dd21.herokuapp.com/"},{id:7,title:"HypraHealthy",languages:"JavaScript,node,express,React, MongoDb,Apollo,Graphql",image:"/img/Hyprahealthy.png",description:" This is a complete MERN application using Apollo server in the frontend and Graphql in the backend to help to choose healthy recipes",repo:"https://github.com/Gdel-J/Hyprahealth.git",live:"https://hyprahealthy-a6122d6a4506.herokuapp.com/"}];var v=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"content is-medium",children:"Portfolio"}),Object(j.jsx)("hr",{}),Object(j.jsx)(O,{projects:x})]})};var N=function(){return Object(j.jsxs)("div",{className:"columns fade-in",children:[Object(j.jsxs)("div",{className:"column slide-in-left",children:[Object(j.jsx)("p",{className:"content is-medium",children:"RESUME"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("a",{className:"button is-primary",href:"/React-Listen-Port-Folio/GERARD DEL VECCHIO last updated resume september 2023.pdf",target:"_blank",rel:"noreferrer",children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-download"})}),Object(j.jsx)("span",{children:"Download My Resume"})]}),Object(j.jsxs)("a",{className:"button is-link google-drive-link",href:"https://docs.google.com/document/d/1Z-et4KT5OuYqrD1QDwevCp8-R4Zdlpwm8gllhGTQ1AA/edit?usp=sharing",target:"_blank",rel:"noreferrer",style:{marginLeft:"10px"},children:[Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-external-link-alt"})}),Object(j.jsx)("span",{children:"View on Google Drive"})]})]}),Object(j.jsxs)("div",{className:"column slide-in-right",children:[Object(j.jsx)("p",{className:"content is-medium",children:"SKILLS"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"skill-item",children:"HTML, CSS, Javascript"}),Object(j.jsx)("li",{className:"skill-item",children:"OpenAPI, JSON"}),Object(j.jsx)("li",{className:"skill-item",children:"SQL,Sequelize"}),Object(j.jsx)("li",{className:"skill-item",children:"React, Node.js"}),Object(j.jsx)("li",{className:"skill-item",children:"MongoDb, Mongoose"}),Object(j.jsx)("li",{className:"skill-item",children:"MERN"}),Object(j.jsx)("li",{className:"skill-item",children:"Github"})]})]})]})};var k=function(){var e=Object(i.useState)("Home"),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"navbar-brand",children:Object(j.jsx)("a",{className:"navbar-item",rel:"noreferrer",target:"_blank",href:"https://github.com/Gdel-J?tab=repositories",children:Object(j.jsx)("span",{className:"content is-large",children:Object(j.jsx)("div",{className:"header-name-container",children:Object(j.jsx)("span",{className:"header-name",children:"GERARD DEL VECCHIO"})})})})}),Object(j.jsx)("ul",{className:"navigation",children:["Home","About","Portfolio","Contact","Resume"].map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"nav-button ".concat(a===e?"active":""," ").concat(0!==t?"slide-in":""," ").concat("Home"===e?"home-button":""),onClick:function(t){return function(e,t){e.stopPropagation(),s(t)}(t,e)},children:e})},e)}))})]}),Object(j.jsx)("main",{children:Object(j.jsx)("div",{children:function(){switch(a){case"Home":return Object(j.jsx)(h,{});case"About":default:return Object(j.jsx)(b,{});case"Portfolio":return Object(j.jsx)(v,{});case"Contact":return Object(j.jsx)(f,{});case"Resume":return Object(j.jsx)(N,{})}}()})})]})};var S=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"content has-text-centered",children:Object(j.jsxs)("div",{className:"social-icons",children:[Object(j.jsxs)("a",{href:"https://github.com/Gdel-J",target:"_blank",rel:"noreferrer",className:"icon-link",children:[Object(j.jsx)("i",{className:"fab fa-github"})," GitHub"]}),Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/gerard-del-vecchio-39a231285/",target:"_blank",rel:"noreferrer",className:"icon-link",children:[Object(j.jsx)("i",{className:"fab fa-linkedin"})," LinkedIn"]})]})})})};var y=function(){return Object(j.jsx)("div",{className:"app-container",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(k,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/about",element:Object(j.jsx)(b,{})}),Object(j.jsx)(l.a,{path:"/contact",element:Object(j.jsx)(f,{})}),Object(j.jsx)(l.a,{path:"/portfolio",element:Object(j.jsx)(v,{})}),Object(j.jsx)(l.a,{path:"/resume",element:Object(j.jsx)(N,{})})]}),Object(j.jsx)(S,{})]})})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f8597e73.chunk.js.map