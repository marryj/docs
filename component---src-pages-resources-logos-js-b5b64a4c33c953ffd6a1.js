(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Uhd":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n("q1tI"),r=n.n(a),l=n("TSYQ"),o=n.n(l),c=function(e){var t=e.left,n=e.children,a=e.className;return r.a.createElement("div",{className:o()(a,"grid__container",{left:t})},n)};c.defaultProps={left:!1,className:""};var s=function(e){var t,n=e.className,a=e.padding,l=e.limitWidth,c=e.full,s=e.children,i=e.autosize;return r.a.createElement("div",{className:o()(n,"grid__item",(t={},t["p-"+a]=a,t["no-min"]=!l,t.auto=i,t.full=c,t))},s)};s.defaultProps={full:!1,limitWidth:!0,padding:null,className:"",autosize:!1}},C8Qj:function(e,t,n){"use strict";n("t+fG")("small",(function(e){return function(){return e(this,"small","","")}}))},Nr1y:function(e,t,n){"use strict";n("y7hu");var a=n("q1tI"),r=n.n(a),l=n("TSYQ"),o=n.n(l),c=n("Wbzz"),s=function(e){var t=e.icon,n=e.text;return r.a.createElement("div",{className:"button__content"},t&&r.a.createElement("span",{className:"icon-"+t}),n&&r.a.createElement("span",null,n))},i=function(e){var t=e.className,n=e.empty,a=e.icon,l=e.link,i=e.onClick,m=e.text;return e.download?r.a.createElement("a",{href:l,download:!0,className:o()("btn",t,{empty:n})},r.a.createElement(s,{icon:a,text:m})):l?"/"===l.substring(0,1)?r.a.createElement(c.Link,{to:l,className:o()("btn",t,{empty:n})},r.a.createElement(s,{icon:a,text:m})):r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:o()("btn",t,{empty:n})},r.a.createElement(s,{icon:a,text:m})):r.a.createElement("button",{type:"button",className:o()("btn",t,{empty:n}),onClick:i},r.a.createElement(s,{icon:a,text:m}))};s.defaultProps={icon:null,text:null},i.defaultProps={className:"btn",empty:!1,icon:null,link:null,onClick:null,text:null,download:!1},t.a=i},"t+fG":function(e,t,n){var a=n("P8UN"),r=n("96qb"),l=n("ap2Z"),o=/"/g,c=function(e,t,n,a){var r=String(l(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},xZD7:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));n("C8Qj"),n("v9g0"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("pJf4");var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("TJpk"),c=n.n(o),s=n("7oih"),i=n("/Uhd"),m=n("TSYQ"),u=n.n(m),f=n("Nr1y"),d=function(e){var t=e.logo,n=Object(a.useState)(t.types.length&&t.types[0]),l=n[0],o=n[1],c=Object(a.useState)(l.formats[0]),s=c[0],i=c[1],m=Object(a.useMemo)((function(){return s.src}),[s]);return r.a.createElement("div",{className:"logo__card card nopadding clickable"},r.a.createElement("div",{className:"logo__checkerboard"},r.a.createElement("img",{src:t.thumbnail,alt:t.name})),r.a.createElement("div",{className:"card__bottom"},r.a.createElement("div",{className:u()("logo__options",{withFormat:1<l.formats.length})},r.a.createElement("div",{className:"logo__types"},t.types.map((function(e){return r.a.createElement("button",{onClick:function(){return function(e){o(e),i(e.formats[0])}(e)},className:u()("logo__type",{active:l&&l.type===e.type}),type:"button"},e.type)}))),r.a.createElement("div",{className:"logo__formats"},1<l.formats.length&&l.formats.map((function(e){return r.a.createElement("button",{onClick:function(){return function(e){return i(e)}(e)},className:u()("logo__format",{active:s&&s.name===e.name}),type:"button"},e.name)})))),r.a.createElement(f.a,{icon:"download",className:"logo__button small",link:m,download:!0})))},p="1280660733";t.default=function(e){var t=e.location,n=e.data,a=n.svg.nodes.map((function(e){return{name:e.name,thumbnail:e.publicURL,types:[{type:"svg",formats:[{name:"default",src:e.publicURL}]}]}})),o=function(e){return{type:"png",src:e.formats.medium.src,formats:Object.keys(e.formats).filter((function(t){return e.formats[t].src})).map((function(t){return{name:t,src:e.formats[t].src}}))}};return n.png.nodes.map((function(e){var t=a.find((function(t){return t.name===e.name}));return t?t.types.push(o(e)):a.push({name:e.name,thumbnail:e.formats.small.src,types:[o(e)]})})),r.a.createElement(s.a,{location:t},r.a.createElement("div",{className:"logos"},r.a.createElement(c.a,{title:"Logos"}),r.a.createElement("header",{className:"page__header-overlaid bg-blue"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"page__title color-white"},"Identity and ",r.a.createElement("strong",null,"logos")),r.a.createElement("p",{className:"h4-like color-white"},"Before using the API Platform logos, read our"," ",r.a.createElement(l.Link,{className:"color-white",to:"/trademark-policy"},"Trademark and Logo Policy"),"."))),r.a.createElement("section",{className:"container"},r.a.createElement(i.a,{className:"logo__grid"},a.map((function(e){return r.a.createElement(i.b,{padding:10},r.a.createElement(d,{logo:e}))}))))))}},y7hu:function(e,t,n){"use strict";n("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-resources-logos-js-b5b64a4c33c953ffd6a1.js.map