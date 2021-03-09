(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/client-id-mqtt-faea85c421c5c9a42ae86a88dbd8184f.gif"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(120)),i={id:"mqtt",hide_title:!1,title:"MQTT"},c={unversionedId:"iot/mqtt",id:"version-es-1.0.0/iot/mqtt",isDocsHomePage:!1,title:"MQTT",description:"El laboratorio WIRID-LAB cuenta con un broker MQTT para la comunicaci\xf3n M2M con los nodos IoT del laboratorio y/o nodos externos.",source:"@site/versioned_docs/version-es-1.0.0/iot/mqtt.mdx",slug:"/iot/mqtt",permalink:"/docs/iot/mqtt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-es-1.0.0/iot/mqtt.mdx",version:"es-1.0.0",sidebar:"version-es-1.0.0/docs",previous:{title:"HTTP",permalink:"/docs/iot/http"},next:{title:"Matlab",permalink:"/docs/tutorials/matlab"}},l=[{value:"Topicos para Pub/Sub",id:"topicos-para-pubsub",children:[{value:"Ejemplo",id:"ejemplo",children:[]}]},{value:"Almacenar datos",id:"almacenar-datos",children:[]},{value:"Recursos",id:"recursos",children:[{value:"Python",id:"python",children:[]}]}],b={toc:l};function s(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"El laboratorio WIRID-LAB cuenta con un broker MQTT para la comunicaci\xf3n M2M con los nodos IoT del laboratorio y/o nodos externos. "),Object(o.b)("p",null,"Para realizar la conexi\xf3n con el broker MQTT tenga en cuenta los siguientes datos de conex\xf3n:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{BROKER_URL}")," : ",Object(o.b)("inlineCode",{parentName:"li"},"mqtt.wiridlab.site")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{PORTS}"),":  1883 , 8883 (TSL) , 9001 (WebSocket)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{USERNAME}"),": Token generado en la plataforma del laboratorio "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{PASSWORD}"),": Campo vacio, la plataforma identifica al usuario por medio del token "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"{CLIENT_ID}"),": ID \xfanico generado al momento de crear el nodo IoT")),Object(o.b)("div",{align:"center",style:{margin:"20px"}},Object(o.b)("img",{src:a(200).default,align:"center"})),Object(o.b)("p",null,"Si desea utilizar el puerto seguro, debe descargar el certificado TSL ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/wirid-lab/iot-mqtt-python/main/root.pem"}),"aqui")),Object(o.b)("h2",{id:"topicos-para-pubsub"},"Topicos para Pub/Sub"),Object(o.b)("p",null,"Para enviar y recibir datos de los nodos IoT la estructura del topico debe ser  ",Object(o.b)("inlineCode",{parentName:"p"},"iot/<EMAIL>/"),",  donde ",Object(o.b)("strong",{parentName:"p"},"EMAIL"),"  corresponde al correo electronico registrado en la plataforma ."),Object(o.b)("h3",{id:"ejemplo"},"Ejemplo"),Object(o.b)("p",null,"Se desea publicar la temperatura de diferentes nodos mediante el topic ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"temperature"))," , realice la configuraci\xf3n de los nodos con el topic  ",Object(o.b)("inlineCode",{parentName:"p"},"iot/<EMAIL>/temperature"),", de la misma manera ocurre con los nodos que deseeb recibir informaci\xf3n de  ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"temperature")),"."),Object(o.b)("h2",{id:"almacenar-datos"},"Almacenar datos"),Object(o.b)("p",null,"Por defecto todos los datos que se envian al  topico ",Object(o.b)("inlineCode",{parentName:"p"},"iot/<EMAIL>/")," y que matengan la estructura  un array de objetos JSON  ",Object(o.b)("inlineCode",{parentName:"p"},"[{data1},{data2},{data_n}]")," son almacenados en el ID del nodo IoT."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Recuerde habilitar el token de accesso para trabajar con el broker MQTT."))),Object(o.b)("h2",{id:"recursos"},"Recursos"),Object(o.b)("h3",{id:"python"},"Python"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wirid-lab/iot-mqtt-python"}),"Pub/Sub")," ")))}s.isMDXComponent=!0}}]);