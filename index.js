/* empty css                      */import{a as q,S as C,i as u}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const $="49626853-35a7cc777388834eb6e89d08d";async function g(r,t){const o=new URLSearchParams({key:$,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});return await q(`https://pixabay.com/api/?${o}`)}const p=document.querySelector(".gallery"),h=document.querySelector(".loader-js"),y=document.querySelector(".btn.visually-hidden");function L(r){const t=r.map(({webformatURL:f,largeImageURL:e,tags:s,likes:l,views:S,comments:x,downloads:M})=>`<li class="gallery-item">
  <a class="item-link" href="${e}">
    <img class="img" src="${f}" alt="${s}" />
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
        <p class="statistic-value">${M}</p>
      </li>
    </ul></a
  >
</li>`).join("");p.insertAdjacentHTML("beforeend",t),new C(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){p.innerHTML=""}function b(){h.classList.add("loader")}function i(){h.classList.remove("loader")}function w(){y.classList.replace("visually-hidden","load-more-btn")}function B(){y.classList.replace("load-more-btn","visually-hidden")}const d=document.querySelector(".form"),P=document.querySelector(".btn.visually-hidden");let a=1,c,m;P.addEventListener("click",U);const n={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",iconUrl:"./error.svg",iconColor:"#ffffff",backgroundColor:"#B51B1B"},O={title:"ERROR",titleColor:"#ffffff",message:"Error connecting to server",messageColor:"#ffffff",iconUrl:"./img/error.svg",iconColor:"#ffffff",backgroundColor:"#B51B1B"};d.addEventListener("submit",E);function E(r){if(r.preventDefault(),B(),v(),a=1,c=r.target.elements.text.value.trim(),!c||c===" "){u.show(n),d.reset();return}b(),g(c,a).then(t=>{const o=t.data.hits;if(m=Math.ceil(t.data.totalHits/o.length),console.log(t.data),!o.length){D();return}i(),L(o),a<=m&&w()}).catch(t=>{console.log(t.message),i(),u.show(O)}),d.reset()}function D(){u.show(n),v(),i()}async function U(){B(),b(),a++,console.log(a);try{const r=await g(c,a);if(L(r.data.hits),i(),a>=m){n.message="We're sorry, but you've reached the end of search results.",n.iconUrl="/error.svg",u.show(n),i();return}w(),console.log(r.data.hits)}catch(r){alert(r.message),i()}}
//# sourceMappingURL=index.js.map
