(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function _(){const a=document.querySelectorAll("li"),s=Array.from(a);sessionStorage.setItem("firstSet","not-set"),sessionStorage.setItem("lastSet","not-set"),a.forEach(l=>{l.addEventListener("click",i=>{let e=i.target,t=sessionStorage.getItem("firstSet"),c=sessionStorage.getItem("lastSet");if(t=="not-set"&&(e.classList.add("first-single"),sessionStorage.setItem("firstSet","set")),t=="set"&&c=="not-set"){let o=document.querySelector(".first-single"),r=s.indexOf(o);s.indexOf(e)>=r?e!=o&&(o.classList.add("first"),e.classList.add("end"),sessionStorage.setItem("lastSet","set")):(a.forEach(n=>{n.classList.remove("first","first-single","end"),sessionStorage.setItem("firstSet","not-set"),sessionStorage.setItem("lastSet","not-set")}),e.classList.add("first-single"),sessionStorage.setItem("firstSet","set"))}t=="set"&&c=="set"&&(a.forEach(o=>{o.classList.remove("first","first-single","end"),sessionStorage.setItem("firstSet","not-set"),sessionStorage.setItem("lastSet","not-set")}),e.classList.add("first-single"),sessionStorage.setItem("firstSet","set"))})})}function m(){const a=document.querySelector(".cal"),s=document.querySelector(".toggle__theme");function l(i){i==="dark"?(a.classList.add("dark"),localStorage.setItem("cal-theme","dark"),s.classList.add("toggle__theme_dark")):i==="light"&&(a.classList.remove("dark"),localStorage.setItem("cal-theme","light"),s.classList.remove("toggle__theme_dark"))}localStorage.getItem("cal-theme")==="dark"&&l("dark"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&l("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",i=>{const e=i.matches?"dark":"light";e==="dark"&&l("dark"),e==="light"&&l("light")}),s.addEventListener("click",()=>{!localStorage.getItem("cal-theme")||localStorage.getItem("cal-theme")==="light"?l("dark"):(localStorage.getItem("cal-theme")==="dark"||s.classList.contains==="toggle__theme_dark")&&l("light")})}document.querySelector("#app").innerHTML=`
  <div class="cal">
    <div class="cal__header">
      <button class="cal__button prev-month"></button>
      <h2 class="cal__month">январь</h2>
      <button class="cal__button next-month"></button>
    </div>
    <ul class="cal__list">
      <li class="cal__item">1</li>
      <li class="cal__item">2</li>
      <li class="cal__item">3</li>
      <li class="cal__item">4</li>
      <li class="cal__item">5</li>
      <li class="cal__item">6</li>
      <li class="cal__item">7</li>
      <li class="cal__item">8</li>
      <li class="cal__item">9</li>
      <li class="cal__item">10</li>
      <li class="cal__item">11</li>
      <li class="cal__item">12</li>
      <li class="cal__item">13</li>
      <li class="cal__item">14</li>
      <li class="cal__item">15</li>
      <li class="cal__item">16</li>
      <li class="cal__item">17</li>
      <li class="cal__item">18</li>
      <li class="cal__item">19</li>
      <li class="cal__item">20</li>
      <li class="cal__item">21</li>
      <li class="cal__item">22</li>
      <li class="cal__item">23</li>
      <li class="cal__item">24</li>
      <li class="cal__item">25</li>
      <li class="cal__item">26</li>
      <li class="cal__item">27</li>
      <li class="cal__item">28</li>
      <li class="cal__item">29</li>
      <li class="cal__item">30</li>
      <li class="cal__item cal__item_next-m">1</li>
      <li class="cal__item cal__item_next-m">2</li>
      <li class="cal__item cal__item_next-m">3</li>
      <li class="cal__item cal__item_next-m">4</li>  
      <li class="cal__item cal__item_next-m">5</li>  
    </ul>
    <div class="cal__footer">
      <section class="themes toggle">
        <h2 class="themes__text visually-hidden">Выбор светлой или темной темы</h2>
        <button class="toggle__button themes__button toggle__theme" aria-label="Переключение тем" title="Переключение тем">
          <span class="settings__label themes__label">ТЕМА</span>
        </button>
      </section>
    </div>
  </div>
`;_(document.querySelector("#app"));m(document.querySelector("#app"));
