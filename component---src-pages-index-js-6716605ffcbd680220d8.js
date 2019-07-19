(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(204),s=a(205),r=(a(39),a(141),a(142),a(15),a(222),a(38),a(238)),l=a(239),c=(a(236),a(237)),p=a.n(c);function d(e){setTimeout(function(){console.log("Save to local storage");for(var t,a,n,i=e.selectAll(".node")._groups[0],o=[],s=0;s<i.length;s++){var r={},l=i[s];r.x=l.__data__.x,r.y=l.__data__.y,r.r=l.__data__.r,r.radius=l.__data__.radius,r.id=l.__data__.id,r.cat=l.__data__.cat,r.name=l.__data__.name,r.link=l.__data__.link,r.value=l.__data__.value,r.icon=l.__data__.icon,r.desc=l.__data__.desc,o.push(r)}t="nodes",a=o,window.localStorage&&window.localStorage.setItem("web-dev-2018-2019",JSON.stringify(((n={})[t]=a,n)))},3e3)}var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.drawChart=function(e){var t,a=r.p("svg"),n=document.body.clientWidth,i=+a.attr("height"),o=.5*n,s=.5*i;"matchMedia"in window&&window.matchMedia("(max-device-width: 767px)").matches&&(window.document.getElementById("svg-element").setAttribute("height",700),i=+a.attr("height"),o=.5*n,s=.5*i);var c=r.j(",d"),p=r.n(r.o),m=r.m().size([n,i]).padding(1.5),u=r.e(function(e){return e.r+1}),w=r.g().force("charge",r.f()).force("collide",u).force("x",r.h(o).strength(.05)).force("y",r.i(s).strength(.05));"matchMedia"in window&&window.matchMedia("(max-device-width: 767px)").matches&&(e=e.filter(function(e){return e.value>=20}));var g=m(r.k({children:e}).sum(function(e){return e.value})).leaves().map(function(e){var t=e.data;return{x:o+3*(e.x-o),y:s+3*(e.y-s),r:0,radius:e.r,id:t.cat+"."+t.name.replace(/\s/g,"-"),cat:t.cat,name:t.name,link:t.link||"",value:t.value,icon:t.icon,desc:t.desc}}),v=function(e){var t={};if(window.localStorage)try{t=JSON.parse(window.localStorage.getItem("web-dev-2018-2019"))||{}}catch(a){}return t[e]}("nodes");v&&g.length===v.length&&(g=v),w.nodes(g).on("tick",function(){h.attr("transform",function(e){return"translate("+e.x+","+e.y+")"}).select("circle").attr("r",function(e){return e.r})}),a.style("background-color","#eee");var h=a.selectAll(".node").data(g).enter().append("g").attr("class","node").call(r.a().on("start",function(e){r.d.active||w.alphaTarget(.2).restart(),e.fx=e.x,e.fy=e.y}).on("drag",function(e){e.fx=r.d.x,e.fy=r.d.y}).on("end",function(e){console.log("DRAG DONE"),d(a),r.d.active||w.alphaTarget(0),e.fx=null,e.fy=null}));h.append("circle").attr("id",function(e){return e.id}).attr("r",0).style("fill",function(e){return p(e.cat)}).transition().duration(1e3).ease(r.b).tween("circleIn",function(e){var t=r.l(0,e.radius);return function(a){e.r=t(a),w.force("collide",u)}}),h.append("clipPath").attr("id",function(e){return"clip-"+e.id}).append("use").attr("xlink:href",function(e){return"#"+e.id}),h.filter(function(e){return!String(e.icon).includes("img/")}).append("text").classed("node-icon",!0).attr("clip-path",function(e){return"url(#clip-"+e.id+")"}).selectAll("tspan").data(function(e){return e.icon.split(";")}).enter().append("tspan").attr("x",0).attr("y",function(e,t,a){return 13+10*(t-a.length/2-.5)}).text(function(e){return e}),h.filter(function(e){return String(e.icon).includes("img/")}).append("image").classed("node-icon",!0).attr("clip-path",function(e){return"url(#clip-"+e.id+")"}).attr("xlink:href",function(e){return e.icon}).attr("x",function(e){return.7*-e.radius}).attr("y",function(e){return.7*-e.radius}).attr("height",function(e){return 2*e.radius*.7}).attr("width",function(e){return 2*e.radius*.7}),h.append("title").text(function(e){return e.cat+"::"+e.name+"\n"+c(e.value)});var f=l.a().scale(p).shape("circle");a.append("g").classed("legend-color",!0).attr("text-anchor","start").attr("transform","translate(20,30)").style("font-size","12px").call(f);var b=r.n().domain(["less use","more use"]).range([5,10]),y=l.b().scale(b).shape("circle").shapePadding(10).labelAlign("end");a.append("g").classed("legend-size",!0).attr("text-anchor","start").attr("transform","translate(150, 25)").style("font-size","12px").call(y);var k=h.append("foreignObject").classed("circle-overlay hidden",!0).attr("x",-140).attr("y",-140).attr("height",280).attr("width",280).append("xhtml:div").classed("circle-overlay__inner",!0);k.append("h2").classed("circle-overlay__title",!0).text(function(e){return e.name}),k.append("p").classed("circle-overlay__body",!0).html(function(e){var t="";return e.link&&(t='<a  href="'+e.link+'" target="_blank" rel="noopener noreferrer" aria-label="express">link</a>'),e.desc+" "+t}),h.on("click",function(e){r.d.stopPropagation(),console.log("currentNode",e);var a=r.d.currentTarget;if(e!==t){var n=t;t=e,w.alphaTarget(.2).restart(),r.q(".circle-overlay").classed("hidden",!0),r.q(".node-icon").classed("node-icon--faded",!1),n&&(n.fx=null,n.fy=null,h.filter(function(e,t){return t===n.index}).transition().duration(1e3).ease(r.c).tween("circleOut",function(){var e=r.l(n.r,n.radius);return function(t){n.r=e(t)}}).on("interrupt",function(){n.r=n.radius})),r.r().duration(1e3).ease(r.c).tween("moveIn",function(){console.log("tweenMoveIn",e);var t=r.l(e.x,o),a=r.l(e.y,s),n=r.l(e.r,.5*s);return function(i){e.fx=t(i),e.fy=a(i),e.r=n(i),w.force("collide",u)}}).on("end",function(){w.alphaTarget(0);var e=r.p(a);e.select(".circle-overlay").classed("hidden",!1),e.select(".node-icon").classed("node-icon--faded",!0)}).on("interrupt",function(){console.log("move interrupt",e),e.fx=null,e.fy=null,w.alphaTarget(0)})}}),r.p(document).on("click",function(){!r.d.target.closest("#circle-overlay")&&t&&(t.fx=null,t.fy=null,w.alphaTarget(.2).restart(),r.r().duration(2e3).ease(r.c).tween("moveOut",function(){console.log("tweenMoveOut",t);var e=r.l(t.r,t.radius);return function(a){t.r=e(a),w.force("collide",u)}}).on("end",function(){t=null,w.alphaTarget(0)}).on("interrupt",function(){w.alphaTarget(0)}),r.q(".circle-overlay").classed("hidden",!0),r.q(".node-icon").classed("node-icon--faded",!1))})},o.componentDidMount=function(){this.drawChart(p.a)},o.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"canvas"},i.a.createElement("h1",{className:"h1"},"State of Web Development 2018/2019"),i.a.createElement("p",{className:"subtitle"},"based on ",i.a.createElement("a",{href:"https://2018.stateofjs.com",target:"_blank",rel:"noopener noreferrer","aria-label":"express"},"State of Javascript 2018")," and",i.a.createElement("a",{href:"https://2019.stateofcss.com",target:"_blank",rel:"noopener noreferrer","aria-label":"express"}," State of CSS 2019")),i.a.createElement("p",{className:"subtitle"},"ORIGINAL ",i.a.createElement("a",{href:"https://alpiepho.github.io/state-web-development-2018-2019-withD3-static",target:"_blank",rel:"noopener noreferrer","aria-label":"express"},"site")),i.a.createElement("svg",{id:"svg-element",width:"100%",height:"1000",fontFamily:"sans-serif",fontSize:"10",textAnchor:"middle"}),i.a.createElement("p",{className:"footer"},"Disclaimer: The technologies shown above are a partial set of technologies that are discussed on the State of JavaScript and State of CSS sites. Also, the weighted values are my own estimates from that data."),i.a.createElement("p",{className:"footer"},"The source for this site can be found on",i.a.createElement("a",{href:"https://github.com/alpiepho/state-web-development-2018-2019-withD3-static",target:"_blank",rel:"noopener noreferrer","aria-label":"express"},"Github"),".")))},n}(i.a.Component);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(s.a,{title:"State of Javascript 2018 and State of CSS 2019"}),i.a.createElement(m,null))}},204:function(e,t,a){"use strict";var n=a(0),i=a.n(n);a(209);t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement("a",{href:"https://alpiepho.github.io/project-portfolio/",target:"_blank",rel:"noopener noreferrer","aria-label":"Al Piepho"},"Al Piepho"))))}},205:function(e,t,a){"use strict";var n=a(206),i=a(0),o=a.n(i),s=a(210),r=a.n(s),l=a(207),c=a.n(l);function p(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=n.data.site,p=t||l.siteMetadata.description;return o.a.createElement(r.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/x-icon",href:""+c.a.siteFaviocon}],meta:[{name:"description",content:p},{property:"og:title",content:s},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:p}].concat(i)})}p.defaultProps={lang:"en",meta:[],description:""},t.a=p},206:function(e){e.exports={data:{site:{siteMetadata:{title:"State of Javascript 2018 and State of CSS 2019",description:"D3 forced directed diagram based on State of Javascript 2018 and State of CSS 2019 - Ported to React/Gatsby/PWA.",author:"Al Piepho"}}}}},207:function(e,t){e.exports={siteTitle:"State of Javascript 2018 and State of CSS 2019",siteDescription:"D3 forced directed diagram based on State of Javascript 2018 and State of CSS 2019 - Ported to React/Gatsby/PWA.",siteFaviocon:"./images/favicon.ico",googleAnalyticsId:"UA-142308652-4",authorName:"Al Piepho",pathPrefix:"/state-web-development-2018-2019-withD3-pwa"}},237:function(e,t){e.exports=[{cat:"js flavor",name:"ES6",link:"https://www.w3schools.com/Js/js_es6.asp",value:86,icon:"/state-web-development-2018-2019-withD3-pwa/img/es6.svg",desc:"\n      ES6 and its descendants are the newer versions of JavaScript, usually run through Babel.\n      "},{cat:"js flavor",name:"Typescript",link:"https://www.typescriptlang.org/",value:46,icon:"/state-web-development-2018-2019-withD3-pwa/img/typescript.png",desc:"\n      TypeScript is a superset of JavaScript that compiles to clean JavaScript output.\n      "},{cat:"js flavor",name:"Flow (Facebook)",link:"https://flow.org/",value:10,icon:"/state-web-development-2018-2019-withD3-pwa/img/flow.svg",desc:"\n      Adds static typing to JavaScript to improve developer productivity and code quality.\n      "},{cat:"js flavor",name:"Reason",link:"https://reasonml.github.io/",value:5,icon:"/state-web-development-2018-2019-withD3-pwa/img/reasonml.svg",desc:"\n      Simple, fast & type safe code that leverages the JavaScript & OCaml ecosystems.\n      "},{cat:"js flavor",name:"Elm",link:"https://elm-lang.org/",value:4,icon:"/state-web-development-2018-2019-withD3-pwa/img/elm.svg",desc:"\n      Compiler for Elm, a functional language for reliable webapps.\n      "},{cat:"js flavor",name:"ClojureScript",link:"https://clojurescript.org/",value:2,icon:"/state-web-development-2018-2019-withD3-pwa/img/clojure.svg",desc:"\n      Clojure to JS compiler.\n      "},{cat:"front-end",name:"React",link:"https://reactjs.org",value:54,icon:"/state-web-development-2018-2019-withD3-pwa/img/react.png",desc:"\n      A declarative, efficient, and flexible JavaScript library for building user interfaces.\n      "},{cat:"front-end",name:"Vue",link:"https://vuejs.org/",value:29,icon:"/state-web-development-2018-2019-withD3-pwa/img/vue.svg",desc:"\n      A progressive, incrementally-adoptable JavaScript framework for building UI on the web.\n      "},{cat:"front-end",name:"Angular",link:"https://angularjs.org/",value:23,icon:"/state-web-development-2018-2019-withD3-pwa/img/angular2.svg",desc:'\n      Angular is a TypeScript-based open-source front-end web application platform. Note that from this year on we are not be making a distinction between Angular and Angular.js anymore, while datapoints for 2016 and 2017 correspond to Angular (a.k.a. "Angular 2").\n      '},{cat:"front-end",name:"Preact",link:"https://preactjs.com",value:6,icon:"/state-web-development-2018-2019-withD3-pwa/img/preact.svg",desc:"\n      Fast 3kB React alternative with the same modern API. Components & Virtual DOM.\n      "},{cat:"front-end",name:"Ember",link:"https://emberjs.com/",value:5,icon:"/state-web-development-2018-2019-withD3-pwa/img/ember.png",desc:"\n      Ember.js - A JavaScript framework for creating ambitious web applications.\n      "},{cat:"front-end",name:"Polymer",link:"https://www.polymer-project.org/",value:3,icon:"/state-web-development-2018-2019-withD3-pwa/img/polymer.svg",desc:"\n      Our original Web Component library.\n      "},{cat:"data layer",name:"Redux",link:"https://redux.js.org/",value:47,icon:"/state-web-development-2018-2019-withD3-pwa/img/redux.svg",desc:"\n      Predictable state container for JavaScript apps.\n      "},{cat:"data layer",name:"GraphQL",link:"https://graphql.org/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/graphql.svg",desc:"\n      GraphQL is a query language and execution engine tied to any backend service.\n      "},{cat:"data layer",name:"Apollo",link:"https://www.apollographql.com/",value:11,icon:"/state-web-development-2018-2019-withD3-pwa/img/apollostack.svg",desc:"\n      A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.\n      "},{cat:"data layer",name:"Mobx",link:"https://mobx.js.org/",value:6,icon:"/state-web-development-2018-2019-withD3-pwa/img/mobx.svg",desc:"\n      Simple, scalable state management.\n      "},{cat:"data layer",name:"Relay",link:"https://facebook.github.io/relay/",value:1,icon:"/state-web-development-2018-2019-withD3-pwa/img/relay.svg",desc:"\n      Relay is a JavaScript framework for building data-driven React applications.\n      "},{cat:"back-end",name:"Express",link:"https://expressjs.com/",value:54,icon:"/state-web-development-2018-2019-withD3-pwa/img/expressjs.png",desc:"\n      Fast, unopinionated, minimalist web framework for node.\n      "},{cat:"back-end",name:"Next.js",link:"https://nextjs.org/",value:9,icon:"/state-web-development-2018-2019-withD3-pwa/img/nextjs.svg",desc:"\n      The React Framework\n      "},{cat:"back-end",name:"Koa",link:"https://koajs.com",value:8,icon:"/state-web-development-2018-2019-withD3-pwa/img/koajs.png",desc:"\n      Expressive middleware for node.js using ES2017 async functions\n      "},{cat:"back-end",name:"Meteor",link:"https://guide.meteor.com/",value:5,icon:"/state-web-development-2018-2019-withD3-pwa/img/meteor.svg",desc:"\n      Meteor, the JavaScript App Platform\n      "},{cat:"back-end",name:"Sails",link:"https://sailsjs.com/",value:1,icon:"/state-web-development-2018-2019-withD3-pwa/img/sails.svg",desc:"\n      Realtime MVC Framework for Node.js\n      "},{cat:"back-end",name:"FeathersJS",link:"https://feathersjs.com",value:1,icon:"/state-web-development-2018-2019-withD3-pwa/img/feathersjs.svg",desc:"\n      A REST and realtime API layer for modern applications.\n      "},{cat:"testing",name:"Jest",link:"https://jestjs.io",value:40,icon:"/state-web-development-2018-2019-withD3-pwa/img/jest.svg",desc:"\n      Delightful JavaScript Testing.\n      "},{cat:"testing",name:"Mocha",link:"https://mochajs.org",value:40,icon:"/state-web-development-2018-2019-withD3-pwa/img/mocha.svg",desc:"\n      simple, flexible, fun javascript test framework for node.js & the browser\n      "},{cat:"testing",name:"Jasmine",link:"jasmine.github.io",value:29,icon:"/state-web-development-2018-2019-withD3-pwa/img/jasmine.svg",desc:"\n      Simple JavaScript testing framework for browsers and node.js\n      "},{cat:"testing",name:"Enzyme (Airbnb)",link:"https://airbnb.io/enzyme/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/airbnb.svg",desc:"\n      JavaScript Testing utilities for React\n      "},{cat:"testing",name:"Karma",link:"https://www.npmjs.com/package/karma",value:18,icon:"/state-web-development-2018-2019-withD3-pwa/img/karma.svg",desc:"\n      Spectacular Test Runner for JavaScript\n      "},{cat:"testing",name:"Storybook",link:"https://storybook.js.org",value:12,icon:"/state-web-development-2018-2019-withD3-pwa/img/storybook-icon.svg",desc:"\n      Interactive UI component dev & test: React, React Native, Vue, Angular, Ember\n      "},{cat:"testing",name:"Ava",link:"https://github.com/avajs/ava",value:5,icon:"/state-web-development-2018-2019-withD3-pwa/img/ava.svg",desc:"\n      Futuristic JavaScript test runner\n      "},{cat:"mobile-desktop",name:"Electron",link:"https://electronjs.org",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/electron.svg",desc:"\n      Build cross-platform desktop apps with JavaScript, HTML, and CSS\n      "},{cat:"mobile-desktop",name:"React Native",link:"https://www.reactnative.com",value:18,icon:"/state-web-development-2018-2019-withD3-pwa/img/reactnative.png",desc:"\n      A framework for building native apps with React.\n      "},{cat:"mobile-desktop",name:"Native Apps",link:"",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/swift.svg",desc:"\n      The majority of mobile and desktop apps are still built with native languages like Java, Kotlin, Objective-C, or Swift.\n      "},{cat:"mobile-desktop",name:"Cordova",link:"https://cordova.apache.org/",value:10,icon:"/state-web-development-2018-2019-withD3-pwa/img/cordova.svg",desc:"\n      Apache Cordova is a mobile application development framework.\n      "},{cat:"mobile-desktop",name:"Ionic",link:"https://ionicframework.com/",value:8,icon:"/state-web-development-2018-2019-withD3-pwa/img/ionic.svg",desc:"\n      Build amazing native and progressive web apps with open web technologies. One app running on everything\n      "},{cat:"mobile-desktop",name:"NativeScript",link:"https://www.nativescript.org/",value:3,icon:"/state-web-development-2018-2019-withD3-pwa/img/nativescript.svg",desc:"\n      NativeScript is an open source framework for building truly native mobile apps with JavaScript. Use web skills, like Angular and Vue.js, FlexBox and CSS, and get native UI and performance on iOS and Android.\n      "},{cat:"select tools",name:"Service Workers",link:"https://www.w3.org/TR/service-workers-1/",value:50,icon:"/state-web-development-2018-2019-withD3-pwa/img/serviceworker.png",desc:"\n      A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync.\n      "},{cat:"select tools",name:"PWA (Progressive Web Apps)",link:"https://developers.google.com/web/progressive-web-apps/",value:50,icon:"/state-web-development-2018-2019-withD3-pwa/img/pwa.png",desc:"\n      Progressive web applications are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. \n      "},{cat:"select tools",name:"Web Components",link:"https://www.webcomponents.org/",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/webcomponents.jpeg",desc:"\n      Web Components are a set of features that provide a standard component model for the Web allowing for encapsulation and interoperability of individual HTML elements.\n      "},{cat:"select tools",name:"WebGL",link:"https://get.webgl.org/",value:25,icon:"/state-web-development-2018-2019-withD3-pwa/img/webgl.png",desc:"\n      WebGL is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. \n      "},{cat:"select tools",name:"WebAssembly",link:"https://webassembly.org/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/webassembly.svg",desc:"\n      WebAssembly is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.\n      "},{cat:"select tools",name:"Webpack",link:"https://webpack.js.org/",value:60,icon:"/state-web-development-2018-2019-withD3-pwa/img/webpack.svg",desc:"\n      Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript.\n      "},{cat:"select tools",name:"Gulp",link:"https://gulpjs.com/",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/gulp.png",desc:"\n      Gulp is a cross-platform, streaming task runner that lets developers automate many development tasks.\n      "},{cat:"select tools",name:"Grunt",link:"https://gruntjs.com/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/grunt.svg",desc:"\n      Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. \n      "},{cat:"select tools",name:"lodash",link:"https://lodash.com/docs",value:60,icon:"/state-web-development-2018-2019-withD3-pwa/img/lodash.svg",desc:"\n      A JavaScript utility library delivering consistency, modularity, performance, & extras.\n      "},{cat:"select tools",name:"jQuery",link:"https://jquery.com/",value:40,icon:"/state-web-development-2018-2019-withD3-pwa/img/jquery.png",desc:'\n      jQuery is a lightweight, "write less, do more", JavaScript library. \n      '},{cat:"select tools",name:"VS Code",link:"https://code.visualstudio.com/",value:70,icon:"/state-web-development-2018-2019-withD3-pwa/img/vscode.png",desc:"\n      Visual Studio Code is a code editor redefined and optimized for building and debugging modern web.\n      "},{cat:"select tools",name:"Sublime",link:"https://www.sublimetext.com/",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/sublimetext.png",desc:"\n      Sublime Text is a sophisticated text editor for code, markup and prose.\n      "},{cat:"select tools",name:"Vim",link:"https://www.vim.org",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/vim.svg",desc:"\n      Vim is just a text editor.\n      "},{cat:"select tools",name:"Atom",link:"https://atom.io/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/atom.png",desc:"\n      Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. \n      "},{cat:"select tools",name:"emacs",link:"https://www.gnu.org/software/emacs/",value:10,icon:"/state-web-development-2018-2019-withD3-pwa/img/emacs.svg",desc:"\n      Emacs is a family of text editors that are characterized by their extensibility. \n      "},{cat:"css-processing",name:"Sass",link:"https://sass-lang.com/",value:50,icon:"/state-web-development-2018-2019-withD3-pwa/img/sass.png",desc:"\n      CSS with superpowers.\n      "},{cat:"css-processing",name:"Less",link:"http://lesscss.org/",value:45,icon:"/state-web-development-2018-2019-withD3-pwa/img/less.svg",desc:"\n      Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. \n      "},{cat:"css-processing",name:"PostCSS",link:"https://postcss.org/",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/postcss.svg",desc:"\n      PostCSS is a tool for transforming styles with JS plugins.\n      "},{cat:"css-processing",name:"Stylus",link:"http://stylus-lang.com/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/stylus.svg",desc:"\n      Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS). \n      "},{cat:"css-frameworks",name:"Bootstrap",link:"https://getbootstrap.com/",value:50,icon:"/state-web-development-2018-2019-withD3-pwa/img/bootstrap.svg",desc:"\n      Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.\n      "},{cat:"css-frameworks",name:"Foundation",link:"https://foundation.zurb.com/sites/docs/v/5.5.3/css.html",value:35,icon:"/state-web-development-2018-2019-withD3-pwa/img/foundation.svg",desc:"\n      Foundation is a responsive front-end framework.\n      "},{cat:"css-frameworks",name:"Materialize CSS",link:"https://materializecss.com/",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/materializecss.svg",desc:"\n      Materialize CSS (Google) is a UI component library which is created with CSS, JavaScript and HTML.\n      "},{cat:"css-frameworks",name:"Semantic UI",link:"https://semantic-ui.com/",value:20,icon:"/state-web-development-2018-2019-withD3-pwa/img/semantic-ui.svg",desc:"\n      Semantic UI is a modern front-end development framework, powered by LESS and jQuery.\n      "},{cat:"css-in-js",name:"Styled Components",link:"https://www.styled-components.com/",value:40,icon:"/state-web-development-2018-2019-withD3-pwa/img/styledcomponents.png",desc:"\n      Styled Components (React) allow you to write plain CSS in your components without worrying about class name collisions.\n      "},{cat:"css-in-js",name:"CSS Modules",link:"https://github.com/css-modules/css-modules",value:30,icon:"/state-web-development-2018-2019-withD3-pwa/img/cssmodules.png",desc:"\n      A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.\n      "},{cat:"css-in-js",name:"Styled JSX",link:"https://github.com/zeit/styled-jsx",value:24,icon:"/state-web-development-2018-2019-withD3-pwa/img/jsx.jpeg",desc:"\n      JSX is a preprocessor step that adds XML syntax to JavaScript.\n      "},{cat:"css-in-js",name:"JSS",link:"https://cssinjs.org/",value:15,icon:"/state-web-development-2018-2019-withD3-pwa/img/jss.png",desc:"\n      JavaScript Style Sheets was a stylesheet language technology proposed by Netscape Communications Corporation in 1996 to provide facilities for defining the presentation of webpages. \n      "},{cat:"css-in-js",name:"Emotion",link:"https://emotion.sh/docs/introduction",value:15,icon:"/state-web-development-2018-2019-withD3-pwa/img/emotion.png",desc:"\n      Emotion is a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to a great developer experience with features such as source maps, labels, and testing utilities. Both string and object styles are supported.\n      "}]}}]);
//# sourceMappingURL=component---src-pages-index-js-6716605ffcbd680220d8.js.map