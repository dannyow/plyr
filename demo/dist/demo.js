"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var i,s=arguments.length;for(i=0;i<s;i++)e=arguments[i],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:i.call(this,e)}}e=null}():!function(e){"use strict";if("Element"in e){var t="classList",i="prototype",s=e.Element[i],n=Object,o=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array[i].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1},a=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},c=function(e,t){if(""===t)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return r.call(e,t)},l=function(e){for(var t=o.call(e.getAttribute("class")||""),i=t?t.split(/\s+/):[],s=0,n=i.length;s<n;s++)this.push(i[s]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},u=l[i]=[],d=function(){return new l(this)};if(a[i]=Error[i],u.item=function(e){return this[e]||null},u.contains=function(e){return e+="",c(this,e)!==-1},u.add=function(){var e,t=arguments,i=0,s=t.length,n=!1;do e=t[i]+"",c(this,e)===-1&&(this.push(e),n=!0);while(++i<s);n&&this._updateClassName()},u.remove=function(){var e,t,i=arguments,s=0,n=i.length,o=!1;do for(e=i[s]+"",t=c(this,e);t!==-1;)this.splice(t,1),o=!0,t=c(this,e);while(++s<n);o&&this._updateClassName()},u.toggle=function(e,t){e+="";var i=this.contains(e),s=i?t!==!0&&"remove":t!==!1&&"add";return s&&this[s](e),t===!0||t===!1?t:!i},u.toString=function(){return this.join(" ")},n.defineProperty){var p={get:d,enumerable:!0,configurable:!0};try{n.defineProperty(s,t,p)}catch(e){e.number===-2146823252&&(p.enumerable=!1,n.defineProperty(s,t,p))}}else n[i].__defineGetter__&&s.__defineGetter__(t,d)}}(self)),function(){function e(e,t,i){if(e)if(e.classList)e.classList[i?"add":"remove"](t);else{var s=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=s+(i?" "+t:"")}}function t(t,i){if(t in o&&(i||t!==r)&&(r.length||t!==o.video)){switch(t){case o.video:s.source({type:"video",title:"View From A Blue Moon",sources:[{src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.mp4",type:"video/mp4"}],poster:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0}]});break;case o.audio:s.source({type:"audio",title:"Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",sources:[{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",type:"audio/mp3"},{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",type:"audio/ogg"}]});break;case o.youtube:s.source({type:"video",title:"View From A Blue Moon",sources:[{src:"bTqVqk7FSmY",type:"youtube"}]});break;case o.vimeo:s.source({type:"video",title:"View From A Blue Moon",sources:[{src:"143418951",type:"vimeo"}]})}r=t;for(var a=n.length-1;a>=0;a--)e(n[a].parentElement,"active",!1);e(document.querySelector('[data-source="'+t+'"]').parentElement,"active",!0)}}var i=plyr.setup({debug:!0,title:"Video demo",iconUrl:"../dist/plyr.svg",tooltips:{controls:!0},captions:{defaultActive:!0},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen","pip","airplay"]});plyr.loadSprite("dist/demo.svg");for(var s=i[0],n=document.querySelectorAll("[data-source]"),o={video:"video",audio:"audio",youtube:"youtube",vimeo:"vimeo"},r=window.location.hash.replace("#",""),a=window.history&&window.history.pushState,c=n.length-1;c>=0;c--)n[c].addEventListener("click",function(){var e=this.getAttribute("data-source");t(e),a&&history.pushState({type:e},"","#"+e)});if(window.addEventListener("popstate",function(e){e.state&&"type"in e.state&&t(e.state.type)}),a){var l=!r.length;l&&(r=o.video),r in o&&history.replaceState({type:r},"",l?"":"#"+r),r!==o.video&&t(r,!0)}}(),document.domain.indexOf("plyr.io")>-1&&(!function(e,t,i,s,n,o,r){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,o=t.createElement(i),r=t.getElementsByTagName(i)[0],o.async=1,o.src=s,r.parentNode.insertBefore(o,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-40881672-11","auto"),ga("send","pageview"));