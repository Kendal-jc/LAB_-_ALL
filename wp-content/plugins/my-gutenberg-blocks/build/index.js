(()=>{"use strict";var e,t={239:()=>{const e=window.wp.blocks,t=window.wp.components,r=window.wp.blockEditor;(0,e.registerBlockType)("my-blocks/sketchfab",{title:"Sketchfab",description:"",category:"embed",icon:"sniley",atributes:{url:{type:"string",default:""}},edit:({attributes:e,setAttributes:l})=>{const a=(0,r.useBlockProps)();return React.createElement(React.Fragment,null,React.createElement("div",a,React.createElement(t.TextControl,{label:"Sketchfab Url",value:e.url,onChange:e=>l({url:e})}),e.url&&React.createElement("iframe",{title:"Sketchfab",width:"600",height:"450",src:e.url+"/embed",allow:"autoplay; fullscreen; vr"})))},save:({attributes:e})=>{const t=r.useBlockProps.save();return React.createElement(React.Fragment,null,React.createElement("div",t,e.url&&React.createElement("iframe",{title:"Sketchfab",width:"600",height:"450",src:e.url+"/embed",allow:"autoplay; fullscreen; vr"})))}})}},r={};function l(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],c=!0,i=0;i<r.length;i++)(!1&o||n>=o)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(c=!1,o<n&&(n=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,c,i]=r,s=0;if(n.some((t=>0!==e[t]))){for(a in c)l.o(c,a)&&(l.m[a]=c[a]);if(i)var u=i(l)}for(t&&t(r);s<n.length;s++)o=n[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(u)},r=globalThis.webpackChunkmy_gutenberg_blocks=globalThis.webpackChunkmy_gutenberg_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=l.O(void 0,[350],(()=>l(239)));a=l.O(a)})();