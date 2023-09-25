var E=Object.defineProperty;var v=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var g=(s,e,t)=>(v(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();class a{constructor(e){this.element=null,this.createElement(e)}createElement(e){this.element=document.createElement(e.tag),this.setClasses(e.classNames),this.setTextContent(e.textContent),this.setCallback(e.callback),this.setAttribute(e.attribute)}getElement(){return this.element}setClasses(e){e.forEach(t=>this.element.classList.add(t))}setTextContent(e){this.element.textContent=e}setCallback(e){typeof e=="function"&&this.element.addEventListener("click",t=>e(t))}setAttribute(e){e&&e.forEach(t=>this.element.setAttribute(t.id,t.value))}}class o{constructor(e){this.elementCreator=this.createView(e)}getHtmlElement(){return this.elementCreator.getElement()}createView(e){const t={tag:e.tag,classNames:e.classNames,textContent:e.textContent,callback:e.callback,attribute:e.attribute};return new a(t)}}const C=""+new URL("rs_school-f5e70645.svg",import.meta.url).href;class y extends o{constructor(){const e={tag:"div",classNames:["footer__school"]};super(e),this.configureView()}configureView(){const e={tag:"a",classNames:["footer__link"],attribute:[{id:"href",value:"https://rs.school/"},{id:"target",value:"_blank"}]},t={tag:"img",classNames:["footer__img"],attribute:[{id:"src",value:`${C}`},{id:"fill",value:"red"}]},n=new a(e).getElement();n.append(new a(t).getElement()),this.elementCreator.getElement().append(n)}}const x=""+new URL("github-2d49405e.svg",import.meta.url).href;class L extends o{constructor(){const e={tag:"div",classNames:["footer__profile"]};super(e),this.configureView()}configureView(){const e={tag:"a",classNames:["footer__profile-link"],attribute:[{id:"href",value:"https://github.com/webjsmaster"},{id:"target",value:"_blank"}]},t={tag:"img",classNames:["footer__img"],attribute:[{id:"src",value:`${x}`},{id:"fill",value:"red"}]},n=new a(e).getElement();n.append(new a(t).getElement()),this.elementCreator.getElement().append(n)}}class _ extends o{constructor(){const e={tag:"div",classNames:["footer__container"]};super(e),this.configureView()}configureView(){this.elementCreator.getElement().append(new y().getHtmlElement(),new L().getHtmlElement())}}class N extends o{constructor(){const e={tag:"footer",classNames:["footer"]};super(e),this.configureView()}configureView(){this.elementCreator.getElement().append(new _().getHtmlElement())}}const V=""+new URL("play2-31baef82.png",import.meta.url).href,k=""+new URL("pause2-c0d9faa1.png",import.meta.url).href,T=""+new URL("arrowR1-1e16bfea.png",import.meta.url).href,R=""+new URL("arrowL1-82d62cae.png",import.meta.url).href,H=""+new URL("Vandelux-Tulum-471e5c30.mp3",import.meta.url).href,A=""+new URL("Meute-Holy-harbour-50c56cfa.mp3",import.meta.url).href,S=""+new URL("Neon Project Feat. Ana - The Gate Of Passion-3d9bb5b6.mp3",import.meta.url).href,I=""+new URL("vandelux-fb469696.jpeg",import.meta.url).href,P=""+new URL("meute-bb7d06a7.jpg",import.meta.url).href,B=""+new URL("neon-audio2-0bf91e1b.jpg",import.meta.url).href,l={play:"play",pause:"pause",arrowLeft:"arrowLeft",arrowRight:"arrowRight"},h={play:V,pause:k,arrowLeft:R,arrowRight:T},w=[{id:1,poster:I,name:"Vandelux - Tulum",audio:H},{id:2,poster:P,name:"Meute - Holy harbour",audio:A},{id:3,poster:B,name:"Neon Project Feat. Ana - The Gate Of Passion",audio:S}];class p extends o{constructor(e){const t={tag:"button",classNames:["button"],textContent:"",attribute:[{id:"id",value:e}],callback:()=>this.handlerButton()};super(t),this.player=new c,this.configureView(e)}configureView(e){this.img=this.insertImg(e).getElement(),this.elementCreator.getElement().append(this.img)}insertImg(e){const n={tag:"img",attribute:[{id:"src",value:h[e]}],callback:null,classNames:[],textContent:""};return new a(n)}handlerButton(){const e=this.getHtmlElement().getAttribute("id");e===l.play||e===l.pause?(this.player.toggleStatus(),this.toggleImgButton()):(e===l.arrowRight||e===l.arrowLeft)&&this.player.changeTrack(e)}toggleImgButton(){this.player.getStatus()?this.img.setAttribute("src",h.pause):this.img.setAttribute("src",h.play)}}class U extends o{constructor(e){const t={tag:"div",textContent:"",classNames:["range"],callback:null};super(t),this.player=new c,this.range=null,this.rangeRight=null,this.configureView(e),this.updatePos()}configureView(e){console.log("⭐: ",e);const t={tag:"input",textContent:"",classNames:[],callback:null,attribute:[{id:"id",value:"range"},{id:"type",value:"range"},{id:"min",value:"0"},{id:"max",value:500},{id:"value",value:"0"},{id:"step",value:"1"}]},n={tag:"div",textContent:"",classNames:["range-line"],callback:null},r={tag:"div",textContent:"",classNames:["range-line-right"],callback:null},i={tag:"div",textContent:"",classNames:["range-line-left"],callback:null},m=this.elementCreator.getElement(),f=new a(n).getElement();this.rangeRight=new a(r).getElement();const b=new a(i).getElement();f.append(b,this.rangeRight),this.range=new a(t).getElement(),this.range.addEventListener("input",()=>{this.player.audio.currentTime=this.range.value,this.updatePos()}),m.append(this.range,f)}setValueRange(e){this.range.value=e}setMaxAttr(e){this.range.setAttribute("max",e)}getRangePercent(){const{max:e}=this.range,{min:t}=this.range,n=this.range.value-t,r=e-t;return n/r}updatePos(){const t=this.getRangePercent()*100;this.rangeRight.style.width=`calc(100% - ${t}%)`}}function d(s){let e=parseInt(s,10),t=parseInt(e/60,10);e-=t*60;const n=parseInt(t/60,10);return t-=n*60,n===0?`${t}:${String(e%60).padStart(2,0)}`:`${String(n).padStart(2,0)}:${t}:${String(e%60).padStart(2,0)}`}class $ extends o{constructor(){const e={tag:"div",classNames:["preloader"]};super(e),this.configureView()}configureView(){const e={tag:"div",classNames:["preloader__bar"]},t=this.elementCreator.getElement();return Array.from(Array(5)).forEach(()=>t.append(new a(e).getElement())),this.elementCreator.getElement()}}class c extends o{constructor(){super({tag:"div",classNames:["player"],textContent:"",callback:null});g(this,"_currentTrack",0);g(this,"_isPlay",!1);g(this,"_isLoading",!1);if(this.observers=[],c.exists)return c.instance;c.instance=this,c.exists=!0,this.content=w,this.createAllHtmlElements(),this.configureAudio(),this.configureView()}createAllHtmlElements(){this.playButton=new p(l.play).getHtmlElement(),this.leftButton=new p(l.arrowLeft).getHtmlElement(),this.rightButton=new p(l.arrowRight).getHtmlElement(),this.loader=new $().getHtmlElement(),this.range=new U,this.infoContainer=new a({tag:"div",classNames:["player__container"]}).getElement(),this.info=new a({tag:"div",classNames:["time"]}).getElement(),this.currentTime=new a({tag:"div",classNames:["time__current"]}).getElement(),this.name=new a({tag:"div",classNames:["time__name"]}).getElement(),this.lengthTime=new a({tag:"div",classNames:["time__length"]}).getElement(),this.info.append(this.currentTime,this.name,this.lengthTime)}getStatus(){return this._isPlay}configureAudio(){this.audio=new Audio,this.audio.src=this.content[this._currentTrack].audio,this.setStatusLoading(!0),this.rerenderView(),this.audio.addEventListener("loadeddata",()=>{this.setStatusLoading(!1),this.rerenderView(),this.range.setMaxAttr(this.audio.duration),setInterval(()=>{this.range.setValueRange(this.audio.currentTime),this.range.updatePos(),this.currentTime.textContent=d(this.audio.currentTime)},500)},!1),this.audio.addEventListener("ended",()=>{this.changeTrack(l.arrowRight)})}configureView(){this.elementCreator.getElement().append(this.playButton,this.infoContainer,this.range.getHtmlElement(),this.leftButton,this.rightButton)}rerenderView(){this.infoContainer.replaceChildren(),this.getStatusLoading()?this.infoContainer.append(this.loader):(this.currentTime.textContent=d(this.audio.currentTime),this.lengthTime.textContent=d(this.audio.duration),this.name.textContent=this.content[this._currentTrack].name,this.infoContainer.append(this.info))}changeTrack(t){this.audio.pause(),this.audio=null,t===l.arrowLeft?this._currentTrack=this._currentTrack===0?this.content.length-1:this._currentTrack-1:t===l.arrowRight&&(this._currentTrack=this._currentTrack===this.content.length-1?0:this._currentTrack+1),this.notifyObserver(),this.configureAudio(),this._isPlay?this.audio.play():this.audio.pause()}toggleStatus(){this._isPlay=!this._isPlay,this._isPlay?this.audio.play():this.audio.pause()}getCurrentTrack(){return this._currentTrack}setStatusLoading(t){this._isLoading=t}getStatusLoading(){return this._isLoading}subscribe(t){this.observers.push(t)}notifyObserver(){this.observers.forEach(t=>t.update())}}class u extends o{constructor(){const e={tag:"div",classNames:["poster"],textContent:"",callback:null};if(super(e),u.exists)return u.instance;u.instance=this,u.exists=!0,this.player=new c,this.content=w,this.configureView()}configureView(){const e=this.elementCreator.getElement(),t=this.content[this.player.getCurrentTrack()].poster;e.replaceChildren();const n={tag:"img",classNames:["poster__image"],attribute:[{id:"src",value:t}],callback:null,textContent:""};e.append(new a(n).getElement())}update(){this.configureView()}}class O extends o{constructor(){const e={tag:"div",classNames:["content"],textContent:"",callback:null};super(e),this.configureView()}configureView(){const e=this.elementCreator.getElement(),t=new c().getHtmlElement(),n=new u().getHtmlElement();e.append(n,t)}}class j extends o{constructor(){const e={tag:"main",classNames:["main"]};super(e),this.configureView()}configureView(){this.elementCreator.getElement().append(new O().getHtmlElement())}}class M extends o{constructor(){const e={tag:"div",classNames:["wrapper"],textContent:"",callback:null};super(e),this.configureView()}configureView(){this.elementCreator.getElement().append(new j().getHtmlElement(),new N().getHtmlElement())}}class F{constructor(){this.body=document.querySelector("#app"),this.createHtmlElement()}createHtmlElement(){const e=new M;this.body.append(e.getHtmlElement())}}const q=new u,G=new c;G.subscribe(q);new F;
