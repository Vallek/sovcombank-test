import './style.css'
import { calendarDates } from './dates.js'
import { themes } from './themes.js'

document.querySelector('#app').innerHTML = `
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
`

calendarDates(document.querySelector('#app'))
themes(document.querySelector('#app'))
