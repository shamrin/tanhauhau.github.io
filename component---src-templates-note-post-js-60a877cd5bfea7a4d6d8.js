(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{183:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(20);var n=a(0),r=a.n(n),o=a(197),i=a(199),l=a(200),s=a(196);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=e.html,a=e.excerpt,n=e.fields,c=n.noteDate,u=n.noteTitle;console.log(t);var p=this.props.pageContext,m=p.previous,d=p.next;return r.a.createElement(i.a,{location:this.props.location,title:"Li Hau's Notes"},r.a.createElement(l.a,{title:u,description:a}),r.a.createElement("h1",null,r.a.createElement("span",{style:Object.assign({},Object(s.b)(.5))},"[",c,"]")," ",u),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("hr",{style:{marginBottom:Object(s.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,m&&r.a.createElement(o.a,{to:m.fields.slug,rel:"prev"},"← [",m.fields.noteDate,"] ",m.fields.noteTitle)),r.a.createElement("li",null,d&&r.a.createElement(o.a,{to:d.fields.slug,rel:"next"},"[",d.fields.noteDate,"] ",d.fields.noteTitle," →"))))},n}(r.a.Component);t.default=c;var u="2679335673"},195:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},196:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return c});var n=a(202),r=a.n(n),o=a(203),i=a.n(o);a(181);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"#612e77",textDecoration:"underline",fontWeight:600,textShadow:"initial",backgroundImage:"initial"},pre:{overflow:"scroll"},blockquote:{borderLeftColor:"#612e77"},li:{marginBottom:0},"li > p":{marginBottom:0},"li > ul":{marginTop:0}}};var l=new r.a(i.a);var s=l.rhythm,c=l.scale},197:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(59),s=a.n(l);a.d(t,"a",function(){return s.a});a(195);var c=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||o,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},198:function(e,t,a){"use strict";a.r(t);a(20);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(85),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(197),i=a(196);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,l=t.children;return e="/"===a.pathname?null:r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("header",null,e),r.a.createElement("main",null,l),r.a.createElement("footer",{style:{marginTop:Object(i.a)(2)}},"Built with ",r.a.createElement("span",{role:"img",className:"emoji"},"💻")," and ",r.a.createElement("span",{role:"img",className:"emoji"},"❤️")," • ",r.a.createElement(o.a,{to:"/notes"},"notes")," • ",r.a.createElement("a",{href:"https://twitter.com/lihautan"},"twitter")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau"},"github")," • ",r.a.createElement("a",{href:"https://github.com/tanhauhau/tanhauhau.github.io/issues/new?assignees=&labels=grammar%2C+typo&template=fix-typos-and-grammars.md&title=%5BTYPO%5D"},"discuss")))},n}(r.a.Component);t.a=l},200:function(e,t,a){"use strict";var n=a(201),r=a(0),o=a.n(r),i=a(11),l=a.n(i),s=a(204),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,s=n.data.site,u=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Tan Li Hau",description:"Tan Li Hau is a frontend engineer who is currently working in Shopee",author:"Tan Li Hau"}}}}}}]);
//# sourceMappingURL=component---src-templates-note-post-js-60a877cd5bfea7a4d6d8.js.map