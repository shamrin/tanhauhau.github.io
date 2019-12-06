(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return o});var n=a(0),r=a.n(n),i=a(200),l=a(201),c=a(197);t.default=function(e){var t=e.data,a=e.location,n=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:a,title:t.site.siteMetadata.title,hideScrollIndicator:!0},r.a.createElement(l.a,{title:"Li Hau's Projects",keywords:["blog","gatsby","javascript","react","projects"]}),r.a.createElement("h1",null,"Li Hau's Projects"),n.map(function(e){var t=e.node,a=t.frontmatter,n=a.title,i=a.description,l=t.fields.website;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{key:l,style:{marginBottom:Object(c.a)(.75),marginTop:Object(c.a)(.75)}},r.a.createElement("a",{style:{boxShadow:"none"},href:l},n)),r.a.createElement("p",null,i))}),r.a.createElement("div",{style:{marginTop:Object(c.a)(2)}}))};var o="2869472368"},196:function(e,t,a){var n;e.exports=(n=a(199))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s});var n=a(204),r=a.n(n),i=a(205),l=a.n(i);a(183);l.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"},li:{marginBottom:0},"li > p":{marginBottom:0},"li > ul":{marginTop:0}}};var c=new r.a(l.a);var o=c.rhythm,s=c.scale},198:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=a(59),o=a.n(c);a.d(t,"a",function(){return o.a});a(196);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},199:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=a(85),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(203),a(198)),l=a(181),c=a.n(l),o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassive",null,s),window.removeEventListener("testPassive",null,s)}catch(E){}function m(){var e=Object(n.useRef)();return Object(n.useEffect)(function(){var t=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);e.current.style.transform="scaleX("+t+")"};return window.addEventListener("scroll",t,!!o&&{passive:!0}),function(){window.removeEventListener("scroll",t,!!o&&{passive:!0})}}),r.a.createElement("div",{className:c.a.container},r.a.createElement("div",{className:c.a.indicator,ref:e}))}var u=a(182);var d=function(e){var t=e.siteTitle,a=e.hide,n=e.hideScrollIndicator;return a?r.a.createElement("header",null):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:u.header},r.a.createElement("nav",{className:u.nav},r.a.createElement("ul",{className:u.list},r.a.createElement("li",null,r.a.createElement(i.a,{to:"/",className:u.link,activeClassName:u.active},t)),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/blogs/",className:u.link,activeClassName:u.active},"Writings")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/talks/",className:u.link,activeClassName:u.active},"Talks")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/projects/",className:u.link,activeClassName:u.active},"Projects")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/notes/",className:u.link,activeClassName:u.active},"Notes")),r.a.createElement("li",{className:u.spacer}),r.a.createElement("li",null,r.a.createElement("a",{className:u.link,href:"https://twitter.com/lihautan"},r.a.createElement("svg",{viewBox:"0 0 24 24",className:u.icon},r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{className:u.link,href:"https://github.com/tanhauhau"},r.a.createElement("svg",{viewBox:"0 0 24 24",className:u.icon},r.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))))),!n&&r.a.createElement(m,null)))},p=a(197);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.location,a=e.title,n=e.children,i=e.hideScrollIndicator;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{siteTitle:a,hide:"/"===t.pathname,hideScrollIndicator:i}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},r.a.createElement("main",null,n),r.a.createElement("footer",{style:{marginTop:Object(p.a)(2)}},"Built with ",r.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",r.a.createElement("span",{role:"img",className:"emoji"},"❤️"))))},n}(r.a.Component);t.a=v},201:function(e,t,a){"use strict";var n=a(202),r=a(0),i=a.n(r),l=a(11),c=a.n(l),o=a(206),s=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,m=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-407b9f1a05041973f974.js.map