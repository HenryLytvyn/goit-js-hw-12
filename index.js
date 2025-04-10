/* empty css                      */import{a as M,S as C,i as f}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const $="49626853-35a7cc777388834eb6e89d08d";async function g(o,t){const r=new URLSearchParams({key:$,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return await M(`https://pixabay.com/api/?${r}`)}const p=document.querySelector(".gallery"),y=document.querySelector(".loader-js"),h=document.querySelector(".btn.visually-hidden");function L(o){const t=o.map(({webformatURL:n,largeImageURL:e,tags:s,likes:l,views:S,comments:x,downloads:q})=>`<li class="gallery-item">
  <a class="item-link" href="${e}">
    <img class="img" src="${n}" alt="${s}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${l}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${S}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${x}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${q}</p>
      </li>
    </ul></a
  >
</li>`).join("");p.insertAdjacentHTML("beforeend",t),new C(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){p.innerHTML=""}function b(){y.classList.add("loader")}function i(){y.classList.remove("loader")}function w(){h.classList.replace("visually-hidden","load-more-btn")}function B(){h.classList.replace("load-more-btn","visually-hidden")}const d=document.querySelector(".form");document.querySelector(".gallery");const P=document.querySelector(".btn.visually-hidden");let a=1,c,m;P.addEventListener("click",R);const u={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:"./img/error.svg",iconColor:"#ffffff",backgroundColor:"#B51B1B"},O={title:"ERROR",titleColor:"#ffffff",message:"Error connecting to server",messageColor:"#ffffff",iconUrl:"./img/error.svg",iconColor:"#ffffff",backgroundColor:"#B51B1B"};d.addEventListener("submit",E);function E(o){if(o.preventDefault(),B(),v(),a=1,c=o.target.elements.text.value.trim(),!c||c===" "){f.show(u),d.reset();return}b(),g(c,a).then(t=>{const r=t.data.hits;if(m=Math.ceil(t.data.totalHits/r.length),console.log(t.data),!r.length){D();return}i(),L(r),a<=m&&w()}).catch(t=>{console.log(t.message),i(),f.show(O)}),d.reset()}function D(){f.show(u),v(),i()}async function R(){B(),b(),a++,console.log(a);try{const o=await g(c,a);if(L(o.data.hits),i(),a>=m){u.message="We're sorry, but you've reached the end of search results.",f.show(u),i();return}w(),console.log(o.data.hits)}catch(o){alert(o.message),i()}}
//# sourceMappingURL=index.js.map
