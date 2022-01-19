(this["webpackJsonpreact-moviesapp"]=this["webpackJsonpreact-moviesapp"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(14),r=a.n(s),i=(a(94),a(61)),o=a(8),l=(a(95),a(96),a(3));var j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"Header",children:"Movies App"})})},d=a(10),u=a(156),b=a(159),f=a(161),p=a(81),O=a.n(p),v=a(82),h=a.n(v),x=a(59),g=a.n(x),m=a(83),y=a.n(m),_=Object(u.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function w(){var e=_(),t=c.a.useState(0),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(o.f)();return Object(n.useEffect)((function(){0===s?i("/trending"):1===s?i("/movies"):2===s?i("/series"):3===s&&i("/search")}),[s]),Object(l.jsxs)(b.a,{value:s,onChange:function(e,t){r(t)},showLabels:!0,className:e.root,children:[Object(l.jsx)(f.a,{style:{color:"white"},label:"Trending",icon:Object(l.jsx)(O.a,{})}),Object(l.jsx)(f.a,{style:{color:"white"},label:"Movies",icon:Object(l.jsx)(h.a,{})}),Object(l.jsx)(f.a,{style:{color:"white"},label:"Tv-Series",icon:Object(l.jsx)(y.a,{})}),Object(l.jsx)(f.a,{style:{color:"white"},label:"Search",icon:Object(l.jsx)(g.a,{})})]})}var S=a(18),k=a.n(S),N=a(24),C=a(25),P=a.n(C),T=a(62),G=a(170);var E=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,s=e.setGenres,r=e.type,i=e.setPage,o=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list?api_key=").concat("ea8d9720540318dd2af53daffcfff138","&language=en-US"));case 2:t=e.sent,a=t.data,s(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){s({})}}),[]),Object(l.jsxs)("div",{style:{padding:"6px 0"},children:[t&&t.map((function(e){return Object(l.jsx)(G.a,{label:e.name,style:{margin:2},size:"small",color:"secondary",clickable:!0,onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(T.a)(c),[e])),i(1)}(e)}},e.id)})),c&&c.map((function(e){return Object(l.jsx)(G.a,{label:e.name,style:{margin:2},size:"small",color:"primary",clickable:!0,onClick:function(){return function(e){a([].concat(Object(T.a)(t),[e])),s(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},M=(a(121),a(162)),B=function(e){e.id;var t=e.poster,a=e.title,n=e.date,c=e.media_type,s=e.vote_average;return Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)(M.a,{badgeContent:s,color:s>6?"primary":"secondary"}),Object(l.jsx)("img",{className:"poster",src:t?"".concat("https://image.tmdb.org/t/p/w300","/").concat(t):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:a}),Object(l.jsx)("b",{className:"title",children:a}),Object(l.jsxs)("span",{className:"subTitle",children:["tv"===c?"TV Series":"Movie",Object(l.jsx)("span",{className:"subTitle",children:n})]})]})},F=B,z=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},D=a(169),L=a(84),U=a(163),I=Object(L.a)({palette:{type:"dark"}});function J(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(l.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(l.jsx)(U.a,{theme:I,children:Object(l.jsx)(D.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:n,color:"primary",hideNextButton:!0,hidePrevButton:!0})})})}var V=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(1),u=Object(d.a)(j,2),b=u[0],f=u[1],p=Object(n.useState)([]),O=Object(d.a)(p,2),v=O[0],h=O[1],x=Object(n.useState)(),g=Object(d.a)(x,2),m=g[0],y=g[1],_=z(i),w=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("ea8d9720540318dd2af53daffcfff138","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,h(a.results),y(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[_,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(l.jsx)(E,{type:"movie",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:f}),Object(l.jsx)("div",{className:"trending",children:v&&v.map((function(e){return Object(l.jsx)(F,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),m>1&&Object(l.jsx)(J,{setPage:f,numOfPages:m})]})},q=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(1),u=Object(d.a)(j,2),b=u[0],f=u[1],p=Object(n.useState)([]),O=Object(d.a)(p,2),v=O[0],h=O[1],x=Object(n.useState)(),g=Object(d.a)(x,2),m=g[0],y=g[1],_=z(i),w=function(){var e=Object(N.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("ea8d9720540318dd2af53daffcfff138","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,h(a.results),y(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[_,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(l.jsx)(E,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:f}),Object(l.jsx)("div",{className:"trending",children:v&&v.map((function(e){return Object(l.jsx)(F,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),m>1&&Object(l.jsx)(J,{setPage:f,numOfPages:m})]})},A=a(167),H=a(164),K=a(168),Q=a(165),R=(a(122),function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(d.a)(s,2),i=r[0],o=r[1],j=Object(n.useState)(1),u=Object(d.a)(j,2),b=u[0],f=u[1],p=Object(n.useState)([]),O=Object(d.a)(p,2),v=O[0],h=O[1],x=Object(n.useState)(),m=Object(d.a)(x,2),y=m[0],_=m[1],w=Object(L.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("ea8d9720540318dd2af53daffcfff138","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,h(n.results),_(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[a,b]),Object(l.jsxs)("div",{children:[Object(l.jsxs)(U.a,{theme:w,children:[Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(A.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(l.jsx)(H.a,{onClick:S,variant:"contained",style:{marginLeft:10},children:Object(l.jsx)(g.a,{fontSize:"large"})})]}),Object(l.jsxs)(K.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),f(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(l.jsx)(Q.a,{style:{width:"50%"},label:"Search Movies"}),Object(l.jsx)(Q.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(l.jsxs)("div",{className:"trending",children:[v&&v.map((function(e){return Object(l.jsx)(F,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!v&&(a?Object(l.jsx)("h2",{children:"No Series Found"}):Object(l.jsx)("h2",{children:"No Movies Found"}))]}),y>1&&Object(l.jsx)(J,{setPage:f,numOfPages:y})]})}),W=(a(123),function(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),i=r[0],o=r[1],j=function(){var e=Object(N.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("ea8d9720540318dd2af53daffcfff138","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[a]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Trending"}),Object(l.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(l.jsx)(B,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(l.jsx)(J,{setPage:c})]})}),X=a(166);var Y=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(X.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/trending",element:Object(l.jsx)(W,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/movies",element:Object(l.jsx)(V,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/series",element:Object(l.jsx)(q,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/search",element:Object(l.jsx)(R,{})})]})})}),Object(l.jsx)(w,{})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,171)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(Y,{})}),document.getElementById("root")),Z()},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[124,1,2]]]);
//# sourceMappingURL=main.c5274b08.chunk.js.map