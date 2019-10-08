var openhistoricalmap=function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/api/",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),o(1),o(2),o(3);var n=o(4);t.default=n},function(e,t){var o,n,i,a;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,o;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),i=n.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),o=0;o<i;){var a;o in n&&(a=n[o],e.call(t,a,o,n)),o++}}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.from||(Array.from=(o=Object.prototype.toString,n=function(e){return"function"==typeof e||"[object Function]"===o.call(e)},i=Math.pow(2,53)-1,a=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),i)},function(e){var t=this,o=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var i,s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){if(!n(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2])}for(var r,l=a(o.length),c=n(t)?Object(new t(l)):new Array(l),p=0;p<l;)r=o[p],c[p]=s?void 0===i?s(r,p):s.call(i,r,p):r,p+=1;return c.length=l,c}))},function(e,t,o){},function(e,t){},function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.r(t),o.d(t,"OpenHistoricaMapInspector",(function(){return i}));var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=Object.assign({apiBaseUrl:"https://openhistoricalmap.org/api/",apiVersion:"0.6",classicDivSelector:"#sidebar_content div.browse-section",classicFooterSelector:"#sidebar_content div.secondary-actions",featureTitleBar:"#sidebar_content > h2",slideshowPrevIcon:"./etc/Octicons-chevron-left.svg",slideshowNextIcon:"./etc/Octicons-chevron-right.svg",onFeatureLoaded:function(){},onFeatureFail:function(){},debug:!1},t),this.options.debug&&console.debug(["OpenHistoricaMapInspector loaded options",this.options]),this.oldpanel=document.querySelector(this.options.classicDivSelector),this.oldfooter=document.querySelector(this.options.classicFooterSelector),this.titlebar=document.querySelector(this.options.featureTitleBar),this.initTitlebar(),this.initFooter(),this.initPanel(),this.initSlideshowModal(),this.hideClassicPanel()}var t,o,i;return t=e,(o=[{key:"initPanel",value:function(){this.mainpanel=document.createElement("DIV"),this.mainpanel.classList.add("openhistoricalmap-inspector-panel"),this.oldpanel.parentNode.insertBefore(this.mainpanel,this.oldpanel.nextSibling)}},{key:"initTitlebar",value:function(){this.titlebar.innerHTML=""}},{key:"initFooter",value:function(){var e=this;this.footer=document.createElement("DIV"),this.footer.classList.add("openhistoricalmap-inspector-footer"),this.oldpanel.parentNode.insertBefore(this.footer,this.oldfooter.nextSibling),this.footer.innerHTML='\n            <a href="javascript:void(0);" data-link="openhistoricalmap-inspector-classicview">Switch to Classic Inspector</a>\n            <br/>\n            <a href="javascript:void(0);" data-link="openhistoricalmap-inspector-newinspector">Switch to OHM Inspector</a>\n            <br/>\n        ',this.footer_classicviewbutton=this.footer.querySelector('a[data-link="openhistoricalmap-inspector-classicview"]'),this.footer_inspectorviewbutton=this.footer.querySelector('a[data-link="openhistoricalmap-inspector-newinspector"]'),this.footer_classicviewbutton.addEventListener("click",(function(){e.showClassicPanel()})),this.footer_inspectorviewbutton.addEventListener("click",(function(){e.hideClassicPanel()}))}},{key:"initSlideshowModal",value:function(){var e=this;this.slideshowmodal=document.createElement("DIV"),this.slideshowmodal.classList.add("openhistoricalmap-inspector-slideshowmodal"),this.slideshowmodal.innerHTML='\n            <div class="openhistoricalmap-inspector-slideshowmodal-content">\n                <img class="openhistoricalmap-inspector-slideshowmodal-image" src="#" />\n                <div class="openhistoricalmap-inspector-slideshowmodal-closebutton">&times;</div>\n                <div class="openhistoricalmap-inspector-slideshowmodal-caption"></div>\n                <div class="openhistoricalmap-inspector-slideshowmodal-credits"></div>\n            </div>\n        ',this.slideshowmodal_image=this.slideshowmodal.querySelector("img"),this.slideshowmodal_captionbox=this.slideshowmodal.querySelector(".openhistoricalmap-inspector-slideshowmodal-caption"),this.slideshowmodal_creditsbox=this.slideshowmodal.querySelector(".openhistoricalmap-inspector-slideshowmodal-credits"),this.slideshowmodal_closebutton=this.slideshowmodal.querySelector("div.openhistoricalmap-inspector-slideshowmodal-closebutton"),this.slideshowmodal_closebutton.addEventListener("click",(function(){e.slideshowmodal.classList.remove("openhistoricalmap-inspector-slideshowmodal-open")})),document.body.appendChild(this.slideshowmodal)}},{key:"selectFeature",value:function(e,t){var o=this,n="".concat(this.options.apiBaseUrl,"/").concat(this.options.apiVersion,"/").concat(e,"/").concat(t);this.options.debug&&console.debug("OpenHistoricaMapInspector selectFeature(".concat(e,", ").concat(t,") => ").concat(n)),this.fetchXmlData(n,(function(n){o.renderFeatureDetails(e,t,n),o.options.onFeatureLoaded.call(o,e,t,n)}),(function(){o.renderNotFound(e,t),o.options.onFeatureFail.call(o,e,t)}),(function(){o.renderNetworkError(),o.options.onFeatureFail.call(o,e,t)}))}},{key:"renderNetworkError",value:function(){this.titlebar.innerHTML="Error",this.footer.style.display="none",this.mainpanel.innerHTML="<p>Unable to contact the OHM server at this time. Please try again later.</p>"}},{key:"renderNotFound",value:function(e,t){this.titlebar.innerHTML="Not Found",this.footer.style.display="none",this.mainpanel.innerHTML="<p>No such feature: ".concat(e," ").concat(t,"</p>")}},{key:"fetchXmlData",value:function(e,t,o,n){var i=new XMLHttpRequest;i.open("GET",e),i.onload=function(){if(404==i.status)return o();var e=(new DOMParser).parseFromString(i.response,"text/xml");t(e)},i.onerror=function(){n()},i.send()}},{key:"renderFeatureDetails",value:function(e,t,o){var n=this,i=this.getTagValue(o,"name");this.titlebar.textContent="".concat(i," (").concat(e," ").concat(t,")");for(var a=[],s=1;s<=99;s++){var r=this.getTagValue(o,"image:".concat(s)),l=this.getTagValue(o,"image:".concat(s,":caption"))||" ",c=this.getTagValue(o,"image:".concat(s,":src_text"))||" ";if(!r)break;a.push({imageurl:r,captiontext:l,attribtext:c})}if(this.options.debug&&console.debug(["renderFeatureDetails(type, id) images:",a]),a.length){var p=document.createElement("DIV");p.classList.add("openhistoricalmap-inspector-panel-slideshow"),p.innerHTML='\n                <a class="openhistoricalmap-inspector-panel-slideshow-prevnext openhistoricalmap-inspector-panel-slideshow-prev" href="javascript:void(0);"><img src="'.concat(this.options.slideshowPrevIcon,'" /></a>\n                <a class="openhistoricalmap-inspector-panel-slideshow-prevnext openhistoricalmap-inspector-panel-slideshow-next" href="javascript:void(0);"><img src="').concat(this.options.slideshowNextIcon,'" /></a>\n            '),a.forEach((function(e,t){var o=document.createElement("DIV");if(o.classList.add("openhistoricalmap-inspector-panel-slideshow-slide"),o.setAttribute("data-slide-number",t),o.innerHTML='<img src="'.concat(e.imageurl,'" title="').concat(e.captiontext,'" />'),e.captiontext){var i=document.createElement("SPAN");i.classList.add("openhistoricalmap-inspector-panel-slideshow-caption"),i.textContent=e.captiontext,o.appendChild(i)}if(e.attribtext){var a=document.createElement("SPAN");a.classList.add("openhistoricalmap-inspector-panel-slideshow-credits"),a.textContent=e.attribtext,o.appendChild(a)}p.appendChild(o),o.querySelector("img").addEventListener("click",(function(){n.showSlideshowLightbox(o)}))}));var d=p.querySelectorAll(".openhistoricalmap-inspector-panel-slideshow div.openhistoricalmap-inspector-panel-slideshow-slide"),h=function(e){d.forEach((function(t,o){o==e?t.classList.add("openhistoricalmap-inspector-panel-slideshow-selected"):t.classList.remove("openhistoricalmap-inspector-panel-slideshow-selected"),f=e})),0==e?u.classList.add("openhistoricalmap-inspector-panel-slideshow-hidden"):u.classList.remove("openhistoricalmap-inspector-panel-slideshow-hidden"),e+1>=d.length?m.classList.add("openhistoricalmap-inspector-panel-slideshow-hidden"):m.classList.remove("openhistoricalmap-inspector-panel-slideshow-hidden")},u=p.querySelector(".openhistoricalmap-inspector-panel-slideshow .openhistoricalmap-inspector-panel-slideshow-prev"),m=p.querySelector(".openhistoricalmap-inspector-panel-slideshow .openhistoricalmap-inspector-panel-slideshow-next");u.addEventListener("click",(function(){h(f-1)})),m.addEventListener("click",(function(){h(f+1)}));var f=0;h(f),this.mainpanel.appendChild(p)}var v=this.getTagValue(o,"start_date"),w=this.getTagValue(o,"end_date"),y=this.getTagValue(o,"wikipedia"),b=this.getTagValue(o,"followed_by");if(this.options.debug&&console.debug(["renderFeatureDetails(type, id) start/end date:",v,w]),v&&"-1000000-01-01"!=v){var g=document.createElement("DIV");g.classList.add("openhistoricalmap-inspector-panel-paragraph");var E=document.createElement("STRONG");E.textContent="Start Date: ",g.appendChild(E);var x=document.createElement("SPAN");x.textContent=v,g.appendChild(x),this.mainpanel.appendChild(g)}if(w&&"1000000-01-01"!=w){var S=document.createElement("DIV");S.classList.add("openhistoricalmap-inspector-panel-paragraph");var C=document.createElement("STRONG");C.textContent="End Date: ",S.appendChild(C);var L=document.createElement("SPAN");L.textContent=v,S.appendChild(L),this.mainpanel.appendChild(S)}if(y){var k=document.createElement("DIV");k.classList.add("openhistoricalmap-inspector-panel-paragraph");var T=document.createElement("STRONG");T.textContent="Wikipedia: ",k.appendChild(T);var _=document.createElement("A");if(_.textContent="(link)",_.target="_blank",_.rel="nofollow",y.match(/^http/i))_.href=y;else if(y.match(/^[a-z][a-z]:/)){var O=y.substr(0,2),M=y.substr(3);_.href="https://".concat(O,".wikipedia.org/wiki/").concat(M)}else _.href="https://en.wikipedia.org/w/index.php?search=".concat(encodeURIComponent(y));k.appendChild(_),this.mainpanel.appendChild(k)}if(b){var N=this.getTagValue(o,"followed_by:source");if(N&&N.match(/^http/i)){var F=document.createElement("DIV");F.classList.add("openhistoricalmap-inspector-panel-paragraph");var j=document.createElement("STRONG");j.textContent="Followed By: ",F.appendChild(j);var P=document.createElement("A");P.href=N,P.target="_blank",P.rel="nofollow",P.textContent=b,F.appendChild(P),this.mainpanel.appendChild(F)}else{var V=document.createElement("DIV");V.classList.add("openhistoricalmap-inspector-panel-paragraph");var D=document.createElement("STRONG");D.textContent="Followed By: ",V.appendChild(D);var A=document.createElement("SPAN");if(A.textContent=b,V.appendChild(A),this.mainpanel.appendChild(V),N){var I=document.createElement("SPAN");I.textContent=". Source: ".concat(N),V.appendChild(I)}}}}},{key:"getTagValue",value:function(e,t){for(var o=e.getElementsByTagName("tag"),n=0;n<o.length;n++){var i=o[n].getAttribute("k"),a=o[n].getAttribute("v");if(i==t)return a}}},{key:"showClassicPanel",value:function(){this.oldpanel.style.display="block",this.oldfooter.style.display="block",this.mainpanel.style.display="none",this.footer_classicviewbutton.style.display="none",this.footer_inspectorviewbutton.style.display="inline"}},{key:"hideClassicPanel",value:function(){this.oldpanel.style.display="none",this.oldfooter.style.display="none",this.mainpanel.style.display="block",this.footer_classicviewbutton.style.display="inline",this.footer_inspectorviewbutton.style.display="none"}},{key:"showSlideshowLightbox",value:function(e){var t=e.querySelector("img").src,o=e.querySelector(".openhistoricalmap-inspector-panel-slideshow-caption").textContent,n=e.querySelector(".openhistoricalmap-inspector-panel-slideshow-credits").textContent;console.debug([o,this.slideshowmodal_captionbox]),this.slideshowmodal_image.src=t,this.slideshowmodal_captionbox.textContent=o,this.slideshowmodal_creditsbox.textContent=n,this.slideshowmodal.classList.add("openhistoricalmap-inspector-slideshowmodal-open")}}])&&n(t.prototype,o),i&&n(t,i),e}()}]).default;
//# sourceMappingURL=api.js.map