(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},121:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},123:function(e,t,a){"use strict";var n=a(0),r=a(124);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},124:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(123),i=a(121),c=a(55),l=a.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(o.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,v=Object(n.useState)(c),f=v[0],h=v[1],g=n.Children.toArray(e.children);if(null!=p){var N=O[p];null!=N&&N!==f&&d.some((function(e){return e.value===N}))&&h(N)}var y=function(e){h(e),null!=p&&j(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},126:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},176:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/save-data-http-example-1-f07270e2a34f87968eb76520bdc51834.png"},177:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/get-data-http-example-1-0d9bf4fd92786cac365ab93993bb42f0.png"},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"Highlight",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(120)),i=(a(125),a(126),{id:"http",hide_title:!1,title:"HTTP"}),c={unversionedId:"iot/http",id:"version-es-1.0.0/iot/http",isDocsHomePage:!1,title:"HTTP",description:"backgroundColor: color,",source:"@site/versioned_docs/version-es-1.0.0/iot/http.mdx",slug:"/iot/http",permalink:"/docs/iot/http",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-es-1.0.0/iot/http.mdx",version:"es-1.0.0",sidebar:"version-es-1.0.0/docs",previous:{title:"Token de acceso",permalink:"/docs/iot/tokens"},next:{title:"MQTT",permalink:"/docs/iot/mqtt"}},l=function(e){var t=e.children,a=e.color;return Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s=[{value:"Guardar Datos",id:"guardar-datos",children:[]},{value:"Consultar datos",id:"consultar-datos",children:[]},{value:"Recursos",id:"recursos",children:[{value:"Arduino",id:"arduino",children:[]},{value:"Python",id:"python",children:[]},{value:"Angular",id:"angular",children:[]}]}],b={Highlight:l,toc:s};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Los \xfanicos metodos habilitados para trabajar en la plataforma son ",Object(o.b)("inlineCode",{parentName:"p"},"GET")," y  ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," para consultar y guardar datos respectivamente de cada uno de los nodos,  tener en cuenta la siguiente informaci\xf3n al momento de implementar HTTP en el dise\xf1o de los nodos IoT"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{URL}"),": ",Object(o.b)("inlineCode",{parentName:"li"},"https://api.wiridlab.site/api/iot/devices/<nodeApiName>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{HEADERS}")," : En la petici\xf3n HTTP debe incluirse la cabecera ",Object(o.b)("inlineCode",{parentName:"li"},"WIRID-LAB-AUTH-TOKEN")," el string generado para consutar o guardar datos"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{BODY}")," : Para almacenar datos el cuerpo del mensaje debe ser un vector de objetos ",Object(o.b)("inlineCode",{parentName:"li"},"[{data1},{data2},{data_n}]"))),Object(o.b)("p",null,"A continuaci\xf3n se mostrar\xe1n dos ejemplos utilizando la herramienta POSTMAN"),Object(o.b)("h2",{id:"guardar-datos"},"Guardar Datos"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ingrese la URL con met\xf3do POST"),Object(o.b)("li",{parentName:"ol"},"Incluya el token en la cabecera ",Object(o.b)("strong",{parentName:"li"},"WIRID-LAB-AUTH-TOKEN")," "),Object(o.b)("li",{parentName:"ol"},"Incluya la cabecera ",Object(o.b)("strong",{parentName:"li"},"Content-Type"),"  con valor ",Object(o.b)("strong",{parentName:"li"},"application/json")),Object(o.b)("li",{parentName:"ol"},"En la pesta\xf1a ",Object(o.b)("strong",{parentName:"li"},"body")," seleccionar tipo dato ",Object(o.b)("strong",{parentName:"li"},"raw")," e ingrese datos de ejemplo con formato vector de objetos "),Object(o.b)("li",{parentName:"ol"},"Oprima el bot\xf3n enviar"),Object(o.b)("li",{parentName:"ol"},"La respuesta de la plataforma ser\xe1 ",Object(o.b)("inlineCode",{parentName:"li"},'{"message": "Data Saved"}')),Object(o.b)("li",{parentName:"ol"},"Si existe algun error para almacenar los datos , la plataforma reponder\xe1 con error 401")),Object(o.b)("div",{align:"center",style:{margin:"20px"}},Object(o.b)("img",{src:a(176).default,align:"center"})),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Si {BODY} o {data_n} no es un array de objetos JSON no se almacenar\xe1 ninguna informaci\xf3n."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Los datos enviados en el array de objetos ser\xe1n almacenados de forma independiente."))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"si en {data_n} no existe el dato ",Object(o.b)("strong",{parentName:"p"},"created")," se almacenar\xe1 por defecto la fecha y hora de la petici\xf3n."))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'Si la informaci\xf3n de su nodo contiene ubicaciones por GPS , recuerde que el formato debe ser {"position": { "lat": FLOAT, "lng": FLOAT }}'))),Object(o.b)("h2",{id:"consultar-datos"},"Consultar datos"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Ingrese la URL con met\xf3do GET"),Object(o.b)("li",{parentName:"ol"},"Incluya el token en la cabecera ",Object(o.b)("strong",{parentName:"li"},"WIRID-LAB-AUTH-TOKEN")," "),Object(o.b)("li",{parentName:"ol"},"Incluya la cabecera ",Object(o.b)("strong",{parentName:"li"},"Content-Type"),"  con valor ",Object(o.b)("strong",{parentName:"li"},"application/json")),Object(o.b)("li",{parentName:"ol"},"Oprima el bot\xf3n enviar"),Object(o.b)("li",{parentName:"ol"},"La respuesta de la plataforma ser\xe1 un vector de objetos con los datos almacenados del nodo IoT correspondiente"),Object(o.b)("li",{parentName:"ol"},"Si existe algun error para consultar los datos , la plataforma reponder\xe1 con error 401 ")),Object(o.b)("div",{align:"center",style:{margin:"20px"}},Object(o.b)("img",{src:a(177).default,align:"center"})),Object(o.b)("h2",{id:"recursos"},"Recursos"),Object(o.b)("p",null,"A continuaci\xf3n encontrar\xe1 algunos recursos para usar el WIRID-LAB IoT."),Object(o.b)("h3",{id:"arduino"},"Arduino"),Object(o.b)("h3",{id:"python"},"Python"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wirid-lab/iot-http-api-python"}),"Consultar / Publicar datos"))),Object(o.b)("h3",{id:"angular"},"Angular"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wirid-lab/iot-data-report-angular-template"}),"Plantilla para consultar datos de nodos IoT"))))}d.isMDXComponent=!0}}]);