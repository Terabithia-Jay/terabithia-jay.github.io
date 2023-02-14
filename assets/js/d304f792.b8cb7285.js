"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,d=c["".concat(o,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(d,p(p({ref:t},m),{},{components:n})):a.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2393:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},p=void 0,i={type:"mdx",permalink:"/Webpack",source:"@site/src/pages/Webpack.md",description:"\u5b89\u88c5",frontMatter:{}},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Loaders\uff08\u63d2\u4ef6\uff09",id:"loaders\u63d2\u4ef6",level:2},{value:"plugin\uff08\u63d2\u4ef6\uff09",id:"plugin\u63d2\u4ef6",level:2}],s={toc:o},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u9879\u76ee\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"yarn init -y"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add -D webpack webpack-cli"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u9879\u76ee\u4e2d\u521b\u5efa src \u76ee\u5f55\u6587\u4ef6\u5939\uff0c\u521b\u5efa\u5e76\u7f16\u5199\u4ee3\u7801\uff08index.js\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npx webpack")," \u6765\u5bf9\u4ee3\u7801\u8fdb\u884c\u6253\u5305\uff08\u6253\u5305\u540e\u4f1a\u5728\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2adist\u6587\u4ef6\u5939\uff09"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u914d\u7f6e\u5feb\u6377\u952epackage.json\n"scripts": {\n    "build": "webpack",     // \u6253\u5305\uff1ayarn build\n    "dev": "webpack server --open"      // \u901a\u8fc7\u5185\u7f6e\u670d\u52a1\u5668\u6253\u5f00index.html\uff1ayarn dev\n},\n')),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("em",{parentName:"p"},"\u6253\u5305\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u53bb\u627esrc\u91cc\u7684index.js\uff08\u5165\u53e3\u6587\u4ef6\uff0c\u5176\u4ed6\u7684js\u6587\u4ef6\u90fd\u5f15\u5165\u8fd9\u91cc\uff09\uff0c\u7136\u540e\u6253\u5305"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\uff08\u521b\u5efa webpack.config.js \u6587\u4ef6\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const path = require("path")\nmodule.exports = {\n    mode: "production",     // \u8bbe\u7f6e\u6253\u5305\u7684\u6a21\u5f0f\uff0cproduction\u751f\u4ea7\u6a21\u5f0f\uff0cdevelopment\u5f00\u53d1\u6a21\u5f0f\n    entry: "./src/index.js",    // \u914d\u7f6e\u6253\u5305\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u53ef\u4ee5\u6539\u81ea\u5df1\u5b9a\u4e49\u7684\u6bd4\u5982hello.js\uff0c\u9ed8\u8ba4\u7684\uff0c\u4e0d\u7528\u914d\u7f6e\n    output: {   \n        path: path.resolve(__dirname, "hello"),     // \u6307\u5b9a\u6253\u5305\u7684\u76ee\u5f55\u6587\u4ef6\u5939\u540d dist\uff0c\u4e0d\u7528\u914d\u7f6e\n        filename: "main.js",    // \u914d\u7f6e\u4ee3\u7801\u6253\u5305\u540e\u7684\u6587\u4ef6\u540d\uff0c\u4e0d\u7528\u914d\u7f6e\n        clean: true,        // \u6bcf\u6b21\u6253\u5305\u662f\u5426\u6e05\u7a7adist\u76ee\u5f55\n    }, \n}\n')),(0,r.kt)("p",{parentName:"li"},"\u63a8\u8fdf\u6267\u884c\u811a\u672cdefer\uff1a\u9875\u9762\u89e3\u6790\u5b8c\u624d\u4f1a\u6267\u884c\u811a\u672c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="./main.js"><\/script>\n')))),(0,r.kt)("h2",{id:"loaders\u63d2\u4ef6"},"Loaders\uff08\u63d2\u4ef6\uff09"),(0,r.kt)("p",null,"\u200b\t\t",(0,r.kt)("em",{parentName:"p"},"webpack\u9ed8\u8ba4\u53ea\u80fd\u5904\u7406js\u6587\u4ef6\uff0ccss\u6587\u4ef6\u53c8\u4e0d\u80fd\u653e\u5728dist\u91cc\uff08Loaders\u4e5f\u53ef\u4ee5\u5904\u7406\u5176\u4ed6\u7684\u6587\u4ef6\u683c\u5f0f\uff09")),(0,r.kt)("p",null,"\u200b\t\t",(0,r.kt)("em",{parentName:"p"},"css\u6587\u4ef6\u7528 style \u6587\u4ef6\u5939\u547d\u540d\uff0c\u56fe\u7247\u6587\u4ef6\u5939\u7528 assets \u6587\u4ef6\u5939\u547d\u540d")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add -D style-loader"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add css-loader -D"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 index.js \u6587\u4ef6\u4e2d\u5f15\u5165css\u548cimg"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import "./style/index.css"\nimport dog from "./assets/dog.jpg"\n    document.body.insertAdjacentHTML("beforeend", `<img src="${dog}"/>`)\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\uff1a\uff08 \u5728\u76ee\u5f55\u4e0b\u521b\u5efawebpack.config.js\u6587\u4ef6 \uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.css$/i,    // \u5339\u914d\u4ee5.css\u7ed3\u5c3e\u7684\u6587\u4ef6\n                use: ['style-loader', 'css-loader']     // \u4ece\u540e\u5f80\u524d\u4f9d\u6b21\u6267\u884c\n                    // \u5fc5\u987bstyle-loader\u5199\u5728css-loader\u524d\u9762\uff0ccss-loader\u5148\u6267\u884c\uff0c\u518d\u6267\u884cstyle-loader\n                    // style-loader \u8d1f\u8d23\u8ba9\u6837\u5f0f\u751f\u6548\uff0ccss-loader\u8d1f\u8d23\u8ba9css\u4ee3\u7801\u8f6c\u4e3ajs\u4ee3\u7801\u4ece\u800c\u5f15\u5165index.js\u4e2d\n            },\n            {\n                // \u56fe\u7247\u81ea\u5e26\u5c31\u6709\uff0c\u4e0d\u7528\u4e0b\u8f7dloaders\uff0c\u76f4\u63a5\u914d\u7f6etype\u5c31\u884c\n                test: /\\.(jpg|png|gif)$/i,\n                type: \"asset/resource\"\n            }\n        ],\n    },\n};\n")))),(0,r.kt)("h2",{id:"plugin\u63d2\u4ef6"},"plugin\uff08\u63d2\u4ef6\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u6765\u4e3awebpack\u6269\u5c55\u529f\u80fd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"html-webpack-plugin")," \u8fd9\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u5728\u6253\u5305\u4ee3\u7801\u540e\uff0c\u81ea\u52a8\u5728\u6253\u5305\u76ee\u5f55dist\u751f\u6210html\u9875\u9762"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add html-webpack-plugin"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f15\u5165\uff0c\u5728webpack.config.js\u6587\u4ef6\u5f15\u5165"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const HTMLPlugin = require("html-webpack-plugin")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u63d2\u4ef6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    plugins: [\n        new HTMLPlugin({\n            // title: "Hello Webpack",\n            template: "./src/index.html"    // \u4ee5\u8fd9\u4e2ahtml\u6587\u4ef6\u4e3a\u6a21\u677f\u521b\u5efa\u4e00\u6837\u7684\n        })\n    ]\n}\n')))))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u4e34\u65f6\u670d\u52a1\u5668\u4e0a\u7f16\u8bd1\u4ee3\u7801\uff08webpack-dev-server\uff09"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn add -D webpack-dev-server")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\uff1a"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn webpack serve --open")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6e90\u7801\u7684\u6620\u5c04"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    devtool:"inline-source-map"\n}\n')))))}c.isMDXComponent=!0}}]);