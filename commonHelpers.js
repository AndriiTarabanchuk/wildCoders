import{A as N,i as M,S as $,N as A,K as B}from"./assets/vendor-2cea54bb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const T=document.querySelector("body"),P=document.querySelector(".mob-menu-btn"),l=document.querySelector(".header-burger"),d=document.querySelector(".mob-menu"),I=document.querySelector(".mob-menu-list");function H(){T.classList.add("noscroll")}function h(){T.classList.remove("noscroll")}I.addEventListener("click",()=>{d.classList.remove("mob-menu-active"),l.classList.toggle("active"),h()});P.addEventListener("click",()=>{l.classList.toggle("active"),l.classList.contains("active")?(d.classList.add("mob-menu-active"),H()):(d.classList.remove("mob-menu-active"),h())});const C=document.querySelector(".switcher-wrapper"),E=document.querySelector(".switcher-menu");let g=!1;const q=`<span class="span-themes"
        ><span class="span-circkle"></span><span class="span-moon"></span
      ></span>`;document.addEventListener("DOMContentLoaded",x);window.addEventListener("resize",x);function x(){window.innerWidth<=768?(C.innerHTML="",E.innerHTML=q):(E.innerHTML="",C.innerHTML=q,d.classList.remove("mob-menu-active"),l.classList.remove("active"),h()),R()}function R(){const e=document.querySelector(".span-themes"),t=document.querySelector(".span-circkle"),s=document.querySelector(".span-moon");e&&t&&s&&(e.addEventListener("click",()=>{e.classList.toggle("span-active"),t.classList.toggle("transform"),s.classList.toggle("transform-moon"),e.classList.contains("span-active")?(document.body.setAttribute("dark",""),g=!0):(document.body.removeAttribute("dark",""),g=!1),localStorage.setItem("blackThemes",g)}),O(e,t,s))}function O(e,t,s){localStorage.getItem("blackThemes")==="true"?(document.body.setAttribute("dark",""),e&&t&&s&&(e.classList.add("span-active"),t.classList.add("transform"),s.classList.add("transform-moon"))):document.body.removeAttribute("dark","")}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("blackThemes")==="true"?document.body.setAttribute("dark",""):document.body.removeAttribute("dark",""),x()});const G="/wildCoders/assets/wallet-1x-061250e0.jpg",D="/wildCoders/assets/green-1x-a959fdb8.jpg",W="/wildCoders/assets/english-1x-38fc4818.jpg",V="/wildCoders/assets/power-1x-05a42d66.jpg",_="/wildCoders/assets/mimino-1x-f1affdd1.jpg",z="/wildCoders/assets/vyshyvanka-1x-64a37946.jpg",F="/wildCoders/assets/chego-1x-d2bbb936.jpg",K="/wildCoders/assets/energy-1x-f2d7b54f.jpg",Z="/wildCoders/assets/fruitbox-1x-14676b6a.jpg",U="/wildCoders/assets/starligth-1x-8585b3fd.jpg",Q="/wildCoders/assets/wallet-2x-158cf844.jpg",X="/wildCoders/assets/green-2x-5c413587.jpg",Y="/wildCoders/assets/english-2x-34fafec2.jpg",ee="/wildCoders/assets/power-2x-c9d1ecc4.jpg",te="/wildCoders/assets/mimino-2x-4acb2002.jpg",se="/wildCoders/assets/vyshyvanka-2x-aff37560.jpg",oe="/wildCoders/assets/chego-2x-72392c33.jpg",re="/wildCoders/assets/energy-2x-fa715548.jpg",ie="/wildCoders/assets/fruitbox-2x-4ae4ee3e.jpg",ne="/wildCoders/assets/starligth-2x-73d6d9f4.jpg",v=[{id:1,img:G,img2x:Q,description:"React, JavaScript, Node JS, Git",title:"Wallet webservice"},{id:2,img:D,img2x:X,description:"React, JavaScript, Node JS, Git",title:"Green harvest online store"},{id:3,img:W,img2x:Y,description:"React, JavaScript, Node JS, Git",title:"English excellence webservice"},{id:4,img:V,img2x:ee,description:"React, JavaScript, Node JS, Git",title:"Power pulse webservice"},{id:5,img:_,img2x:te,description:"React, JavaScript, Node JS, Git",title:"Mimino website"},{id:6,img:z,img2x:se,description:"React, JavaScript, Node JS, Git",title:"Vyshyvanka vibes Landing Page"},{id:7,img:F,img2x:oe,description:"React, JavaScript, Node JS, Git",title:"Chego jewelry website"},{id:8,img:K,img2x:re,description:"React, JavaScript, Node JS, Git",title:"Energy flow webservice "},{id:9,img:Z,img2x:ie,description:"React, JavaScript, Node JS, Git",title:"Fruitbox online store"},{id:10,img:U,img2x:ne,description:"React, JavaScript, Node JS, Git",title:"Starlight studio landing page"}],ce="/wildCoders/assets/icons-d9232b6c.svg",u=document.querySelector(".list-projects"),f=document.querySelector(".button-projects"),m=document.querySelector(".button-hide-projects");m.style.display="none";let c=0;const w=3,J=v.slice(c,c+w);u.insertAdjacentHTML("beforeend",S(J));function S(e){return e.map(({id:t,title:s,description:r,img:o,img2x:i})=>`
    <li class='list-projects-li' data-id='${t}'>
      <picture>
        <source srcset='${o} 1x, ${i} 2x'/>
        <img class='list-projects-img' src='${o}' alt='${s}' />
      </picture>
      <p class='list-projects-subtitle'>${r}</p>
      <h3 class='list-projects-title'>${s}</h3>
      <a href='https://github.com/AndreyTara/wildCoders' target="_blank" class='button-projects-visit'>visit
        <svg class="projects-svg" width="24" height="24">
          <use href="${ce}#icon-gitbrowsre"></use>
        </svg>
      </a>
    </li>
    `).join("")}f.addEventListener("click",()=>{c+=w;const e=v.slice(c,c+w);e.some(s=>s.id===v.length)&&(f.style.display="none",m.style.display="block"),u.insertAdjacentHTML("beforeend",S(e))});m.addEventListener("click",()=>{u.innerHTML="",c=0,u.insertAdjacentHTML("beforeend",S(J)),f.style.display="block",m.style.display="none"});new N(".accordion-container",{openOnInit:[0]});const L=document.querySelector(".worktog-form"),y=document.querySelector(".worktog-form-icon"),n=document.querySelector(".backdrop"),ae=document.querySelector(".worktog-modal-btn"),le=/^\w+(\.\w+)?@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,b={email:"",comment:""},de="https://portfolio-js.b.goit.study/api/requests",ue=document.querySelector(".worktog-modal-wrapper");L.addEventListener("input",me);function me(e){e.target.name==="email"&&e.target.value&&(le.test(`${e.target.value}`)?y.classList.add("valid"):y.classList.remove("valid"),b.email=e.target.value),e.target.name==="message"&&e.target.value&&(b.comment=e.target.value)}L.addEventListener("submit",pe);function pe(e){e.preventDefault(),e.target.default=!0,fetch(de,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{ue.innerHTML=`
      <h3 class="worktog-modal-title">${t.title}</h3> 
      <p class="wortog-modal-text">${t.message}</p>`,n.classList.add("is-open"),ge()}).catch(t=>{M.error({title:"Warning",message:`Data status is ${t.message} unsuccessful!`}),console.log(t)}).finally(()=>{e.target.default=!1}),y.classList.remove("valid"),L.reset()}function ge(){n.classList.add("is-open"),document.addEventListener("keydown",k),n.addEventListener("click",j)}function k(e){e.code=="Escape"&&(n.classList.remove("is-open"),document.removeEventListener("keydup",k),n.removeEventListener("click",j))}function j(e){const t=n===e.target,s=e.target.closest(".worktog-modal-btn")===ae;(t||s)&&(n.classList.remove("is-open"),document.removeEventListener("keydup",k),n.removeEventListener("click",j))}const a=new $(".swiper-container",{modules:[A,B],initialSlide:0,slidesPerView:1,spaceBetween:10,loop:!1,speed:400,autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next-new",prevEl:".swiper-button-prev-new"},keyboard:{enabled:!0,onlyInViewport:!1}});a.on("update",function(){const e=document.querySelector(".swiper-button-prev-new"),t=e.querySelector(".icon-left");t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))";const r=document.querySelector(".swiper-button-next-new").querySelector(".icon-right");r.style.stroke="rgb(var(--var-text))"});a.on("slideChange",function(){const e=document.querySelector(".swiper-button-next-new"),t=e.querySelector(".icon-right"),s=document.querySelector(".swiper-button-prev-new"),r=s.querySelector(".icon-left");a.isEnd?(t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):a.isBeginning?(r.style.stroke="rgb(var(--var-gray-reviews))",s.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):(t.style.stroke="rgb(var(--var-text))",r.style.stroke="rgb(var(--var-text))",e.style.border="1px solid rgb(var(--var-light-gray-reviews))",s.style.border="1px solid rgb(var(--var-light-gray-reviews))")});fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json()).then(e=>{const t=document.querySelector(".swiper-wrapper");e.forEach(s=>{const r=document.createElement("li");r.className="swiper-slide",r.innerHTML=`
      <div class="review">${s.review}</div>
      <div class="review-img-name">
        <div> <img src="${s.avatar_url}" alt="${s.author}" width="40px" height="40px" class="review-img"> </div>
        <div class="review-name">${s.author}</div>
      </div>
      `,t.appendChild(r)}),a.update()}).catch(e=>{const t=document.querySelector(".swiper-wrapper"),s=document.createElement("div");s.className="swiper-slide",s.innerHTML="<p>Not found</p>",t.appendChild(s),a.update()});
//# sourceMappingURL=commonHelpers.js.map
