import{A as N,i as M,S as A,N as B,K as P}from"./assets/vendor-2cea54bb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const C=document.querySelector("body"),$=document.querySelector(".mob-menu-btn"),l=document.querySelector(".header-burger"),d=document.querySelector(".mob-menu"),I=document.querySelector(".mob-menu-list");function H(){C.classList.add("noscroll")}function h(){C.classList.remove("noscroll")}I.addEventListener("click",()=>{d.classList.remove("mob-menu-active"),l.classList.toggle("active"),h()});$.addEventListener("click",()=>{l.classList.toggle("active"),l.classList.contains("active")?(d.classList.add("mob-menu-active"),H()):(d.classList.remove("mob-menu-active"),h())});const E=document.querySelector(".switcher-wrapper"),q=document.querySelector(".switcher-menu");let p=!1;const T=`<span class="span-themes"
        ><span class="span-circkle"></span><span class="span-moon"></span
      ></span>`;document.addEventListener("DOMContentLoaded",S);window.addEventListener("resize",S);function S(){window.innerWidth<=768?(E.innerHTML="",q.innerHTML=T):(q.innerHTML="",E.innerHTML=T,d.classList.remove("mob-menu-active"),l.classList.remove("active"),h()),R()}function R(){const e=document.querySelector(".span-themes"),t=document.querySelector(".span-circkle"),s=document.querySelector(".span-moon");e&&t&&s&&(e.addEventListener("click",()=>{e.classList.toggle("span-active"),t.classList.toggle("transform"),s.classList.toggle("transform-moon"),e.classList.contains("span-active")?(document.body.setAttribute("dark",""),p=!0):(document.body.removeAttribute("dark",""),p=!1),localStorage.setItem("blackThemes",p)}),O(e,t,s))}function O(e,t,s){localStorage.getItem("blackThemes")==="true"?(document.body.setAttribute("dark",""),e&&t&&s&&(e.classList.add("span-active"),t.classList.add("transform"),s.classList.add("transform-moon"))):document.body.removeAttribute("dark","")}document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("blackThemes")==="true"?document.body.setAttribute("dark",""):document.body.removeAttribute("dark",""),S()});const G="/wildCoders/assets/wallet-2x-864b430c.jpg",D="/wildCoders/assets/green-2x-dd991c7e.jpg",W="/wildCoders/assets/english-2x-c72afddc.jpg",V="/wildCoders/assets/power-2x-3015a490.jpg",_="/wildCoders/assets/mimino-2x-8b2bf8dc.jpg",z="/wildCoders/assets/vyshyvanka-2x-b502b3d5.jpg",F="/wildCoders/assets/chego-2x-ca6ac779.jpg",K="/wildCoders/assets/energy-2x-311d6b80.jpg",Z="/wildCoders/assets/fruitbox-2x-f9988128.jpg",U="/wildCoders/assets/starligth-2x-a84dbdbf.jpg",v=[{id:1,img:"./img/wallet.jpg",img2x:G,description:"React, JavaScript, Node JS, Git",title:"Wallet webservice"},{id:2,img:"./img/green.jpg",img2x:D,description:"React, JavaScript, Node JS, Git",title:"Green harvest online store"},{id:3,img:"./img/english.jpg",img2x:W,description:"React, JavaScript, Node JS, Git",title:"English excellence webservice"},{id:4,img:"./img/power.jpg",img2x:V,description:"React, JavaScript, Node JS, Git",title:"Power pulse webservice"},{id:5,img:"./img/mimino.jpg",img2x:_,description:"React, JavaScript, Node JS, Git",title:"Mimino website"},{id:6,img:"./img/vyshyvanka.jpg",img2x:z,description:"React, JavaScript, Node JS, Git",title:"Vyshyvanka vibes Landing Page"},{id:7,img:"./img/chego.jpg",img2x:F,description:"React, JavaScript, Node JS, Git",title:"Chego jewelry website"},{id:8,img:"./img/energy.jpg",img2x:K,description:"React, JavaScript, Node JS, Git",title:"Energy flow webservice "},{id:9,img:"./img/fruitbox.jpg",img2x:Z,description:"React, JavaScript, Node JS, Git",title:"Fruitbox online store"},{id:10,img:"./img/starligth.jpg",img2x:U,description:"React, JavaScript, Node JS, Git",title:"Starlight studio landing page"}],Q="/wildCoders/assets/icons-f4d45bad.svg",m=document.querySelector(".list-projects"),y=document.querySelector(".button-projects"),u=document.querySelector(".button-hide-projects");u.style.display="none";let c=0;const b=3,J=v.slice(c,c+b);m.insertAdjacentHTML("beforeend",L(J));function L(e){return e.map(({id:t,title:s,description:r,img:o,img2x:i})=>`
    <li class='list-projects-li' data-id='${t}'>
   <img class='list-projects-img' src='${i}' alt='${s}' />
    <p class='list-projects-subtitle'>${r}</p>
    <h3 class='list-projects-title'>${s}</h3>
   <a href='https://github.com/AndreyTara/wildCoders' target="_blank" class='button-projects-visit'>visit
    <svg class="projects-svg" width="24" height="24">
              <use href="${Q}#icon-gitbrowse"></use>
            </svg>
   </a>
    </li>
    `).join("")}y.addEventListener("click",()=>{c+=b;const e=v.slice(c,c+b),t=e.some(s=>s.id===v.length);console.log(t),t&&(y.style.display="none",u.style.display="block"),m.insertAdjacentHTML("beforeend",L(e))});u.addEventListener("click",()=>{m.innerHTML="",c=0,m.insertAdjacentHTML("beforeend",L(J)),y.style.display="block",u.style.display="none"});new N(".accordion-container",{openOnInit:[0]});const k=document.querySelector(".worktog-form"),f=document.querySelector(".worktog-form-icon"),n=document.querySelector(".backdrop"),X=document.querySelector(".worktog-modal-btn"),Y=/^\w+(\.\w+)?@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,w={email:"",comment:""},ee="https://portfolio-js.b.goit.study/api/requests",te=document.querySelector(".worktog-modal-wrapper");k.addEventListener("input",se);function se(e){e.target.name==="email"&&e.target.value&&(Y.test(`${e.target.value}`)?f.classList.add("valid"):f.classList.remove("valid"),w.email=e.target.value),e.target.name==="message"&&e.target.value&&(w.comment=e.target.value)}k.addEventListener("submit",oe);function oe(e){e.preventDefault(),e.target.default=!0,fetch(ee,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)}).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{te.innerHTML=`
      <h3 class="worktog-modal-title">${t.title}</h3> 
      <p class="wortog-modal-text">${t.message}</p>`,n.classList.add("is-open"),re()}).catch(t=>{M.error({title:"Warning",message:`Data status is ${t.message} unsuccessful!`}),console.log(t)}).finally(()=>{e.target.default=!1}),f.classList.remove("valid"),k.reset()}function re(){n.classList.add("is-open"),document.addEventListener("keydown",x),n.addEventListener("click",j)}function x(e){e.code=="Escape"&&(n.classList.remove("is-open"),document.removeEventListener("keydup",x),n.removeEventListener("click",j))}function j(e){const t=n===e.target,s=e.target.closest(".worktog-modal-btn")===X;(t||s)&&(n.classList.remove("is-open"),document.removeEventListener("keydup",x),n.removeEventListener("click",j))}const a=new A(".swiper-container",{modules:[B,P],initialSlide:0,slidesPerView:1,spaceBetween:10,loop:!1,speed:400,autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:1,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:30}},navigation:{nextEl:".swiper-button-next-new",prevEl:".swiper-button-prev-new"},keyboard:{enabled:!0,onlyInViewport:!1}});a.on("update",function(){const e=document.querySelector(".swiper-button-prev-new"),t=e.querySelector(".icon-left");t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))";const r=document.querySelector(".swiper-button-next-new").querySelector(".icon-right");r.style.stroke="rgb(var(--var-text))"});a.on("slideChange",function(){const e=document.querySelector(".swiper-button-next-new"),t=e.querySelector(".icon-right"),s=document.querySelector(".swiper-button-prev-new"),r=s.querySelector(".icon-left");a.isEnd?(t.style.stroke="rgb(var(--var-gray-reviews))",e.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):a.isBeginning?(r.style.stroke="rgb(var(--var-gray-reviews))",s.style.border="1px solid rgb(var(--var-more-light-gray-reviews))"):(t.style.stroke="rgb(var(--var-text))",r.style.stroke="rgb(var(--var-text))",e.style.border="1px solid rgb(var(--var-light-gray-reviews))",s.style.border="1px solid rgb(var(--var-light-gray-reviews))")});fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.json()).then(e=>{const t=document.querySelector(".swiper-wrapper");e.forEach(s=>{const r=document.createElement("li");r.className="swiper-slide",r.innerHTML=`
      <div class="review">${s.review}</div>
      <div class="review-img-name">
        <div> <img src="${s.avatar_url}" alt="${s.author}" width="40px" height="40px" class="review-img"> </div>
        <div class="review-name">${s.author}</div>
      </div>
      `,t.appendChild(r)}),a.update()}).catch(e=>{const t=document.querySelector(".swiper-wrapper"),s=document.createElement("div");s.className="swiper-slide",s.innerHTML="<p>Not found</p>",t.appendChild(s),a.update()});
//# sourceMappingURL=commonHelpers.js.map
