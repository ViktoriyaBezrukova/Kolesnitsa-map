let center = [48.686618640743205, 44.41671222577644]

function init() {
    let map = new ymaps.Map('map-id', {
        center: center,
        zoom: 12
    });

    let placemark = new ymaps.Placemark([48.705618214139186, 44.43228411401363], {
        balloonContent: `
          <div class="slider__item">
            <img class="slider__img" src="images/balloon-img.png" alt="">
          </div>
      </div>
        <div class="ballon__body">
        <div class="balloon__address" data-type="1"><svg class="balloon__img" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L13 2V11L9 12" fill="#ED1C24"/>
        <path d="M9 3L13 2V11L9 12" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 10L1 11V2L5 1" fill="#ED1C24"/>
        <path d="M5 10L1 11V2L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12L5 10V1L9 3V12Z" fill="#ED1C24" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> Волгоград, ул. Космонавтов, 16Д</div>
        <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25383 10.0017L9.1613 11.9209C9.53627 12.1668 9.99778 11.801 9.88817 11.3511L9.04593 7.90854C9.02315 7.81312 9.02677 7.71294 9.05637 7.61957C9.08597 7.52619 9.14034 7.44341 9.21322 7.38076L11.8207 5.11968C12.1611 4.8258 11.988 4.23204 11.5438 4.20205L8.14022 3.97414C8.04736 3.96853 7.95807 3.93491 7.88329 3.87739C7.8085 3.81987 7.75145 3.74096 7.7191 3.65028L6.44997 0.327631C6.41637 0.231612 6.35517 0.148666 6.27467 0.0900533C6.19417 0.0314405 6.09828 0 6 0C5.90172 0 5.80583 0.0314405 5.72533 0.0900533C5.64483 0.148666 5.58363 0.231612 5.55003 0.327631L4.2809 3.65028C4.24855 3.74096 4.1915 3.81987 4.11671 3.87739C4.04193 3.93491 3.95264 3.96853 3.85978 3.97414L0.456183 4.20205C0.0119858 4.23204 -0.161078 4.8258 0.179281 5.11968L2.78678 7.38076C2.85966 7.44341 2.91403 7.52619 2.94363 7.61957C2.97323 7.71294 2.97685 7.81312 2.95407 7.90854L2.17529 11.0992C2.0426 11.639 2.59641 12.0768 3.04061 11.783L5.74617 10.0017C5.82204 9.95153 5.91009 9.92489 6 9.92489C6.08991 9.92489 6.17796 9.95153 6.25383 10.0017Z" fill="#F8CC46"/>
        </svg><b>4,0</b> (8 отзывов)</div>
        <div class="balloon__clock"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#ED1C24"/>
        <path d="M6 2.5V6H9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Круглосуточно</div>
        <div class="balloon__bottom">
        <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.43017 6.04131C3.96803 7.15204 4.86619 8.04789 5.9783 8.5829C6.06033 8.62174 6.15106 8.63855 6.24157 8.63168C6.33207 8.62481 6.41923 8.59448 6.49445 8.5437L8.12787 7.45257C8.20003 7.40363 8.28343 7.37376 8.37026 7.36576C8.45709 7.35777 8.54453 7.3719 8.62443 7.40684L11.6822 8.7201C11.7867 8.7636 11.874 8.84024 11.9307 8.93823C11.9873 9.03622 12.0102 9.15012 11.9958 9.2624C11.8989 10.0188 11.5297 10.714 10.9572 11.2179C10.3848 11.7218 9.64838 11.9998 8.88577 12C6.52912 12 4.26899 11.0638 2.60258 9.39742C0.936177 7.73101 0 5.47088 0 3.11423C0.000171877 2.35162 0.278213 1.6152 0.782095 1.04277C1.28598 0.470338 1.98118 0.101122 2.7376 0.00420709C2.84988 -0.0102148 2.96378 0.0126706 3.06177 0.0693393C3.15976 0.126008 3.2364 0.213317 3.2799 0.317823L4.59316 3.38211C4.62731 3.46074 4.6416 3.54656 4.63476 3.63202C4.62793 3.71747 4.60018 3.79993 4.55396 3.87213L3.46284 5.53168C3.41426 5.60674 3.38575 5.69301 3.38003 5.78223C3.37431 5.87146 3.39157 5.96066 3.43017 6.04131V6.04131Z" fill="#ED1C24"/>
        </svg><a href="tel:79999997777">+7 (999) 999-77-77</a></div>
        <button class="user__btn">Записаться</button>
        </div>   
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/iconmap.png',
        iconImageSize: [44, 44],
        iconImageOffset: [-35, -30],
        hideIconOnBalloonOpen: false
    });

    let placemark2 = new ymaps.Placemark([48.67754703151563, 44.46095156396481], {
        balloonContent: `
          <div class="slider__item">
            <img class="slider__img" src="images/balloon-img.png" alt="">
          </div>
      </div>
        <div class="ballon__body">
        <div class="balloon__address" data-type="2"><svg class="balloon__img" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L13 2V11L9 12" fill="#ED1C24"/>
        <path d="M9 3L13 2V11L9 12" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 10L1 11V2L5 1" fill="#ED1C24"/>
        <path d="M5 10L1 11V2L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 12L5 10V1L9 3V12Z" fill="#ED1C24" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Волгоград, ул. Космонавтов, 16Д</div>
        <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.25383 10.0017L9.1613 11.9209C9.53627 12.1668 9.99778 11.801 9.88817 11.3511L9.04593 7.90854C9.02315 7.81312 9.02677 7.71294 9.05637 7.61957C9.08597 7.52619 9.14034 7.44341 9.21322 7.38076L11.8207 5.11968C12.1611 4.8258 11.988 4.23204 11.5438 4.20205L8.14022 3.97414C8.04736 3.96853 7.95807 3.93491 7.88329 3.87739C7.8085 3.81987 7.75145 3.74096 7.7191 3.65028L6.44997 0.327631C6.41637 0.231612 6.35517 0.148666 6.27467 0.0900533C6.19417 0.0314405 6.09828 0 6 0C5.90172 0 5.80583 0.0314405 5.72533 0.0900533C5.64483 0.148666 5.58363 0.231612 5.55003 0.327631L4.2809 3.65028C4.24855 3.74096 4.1915 3.81987 4.11671 3.87739C4.04193 3.93491 3.95264 3.96853 3.85978 3.97414L0.456183 4.20205C0.0119858 4.23204 -0.161078 4.8258 0.179281 5.11968L2.78678 7.38076C2.85966 7.44341 2.91403 7.52619 2.94363 7.61957C2.97323 7.71294 2.97685 7.81312 2.95407 7.90854L2.17529 11.0992C2.0426 11.639 2.59641 12.0768 3.04061 11.783L5.74617 10.0017C5.82204 9.95153 5.91009 9.92489 6 9.92489C6.08991 9.92489 6.17796 9.95153 6.25383 10.0017Z" fill="#F8CC46"/>
        </svg><b>4,0</b> (8 отзывов)</div>
        <div class="balloon__clock"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#ED1C24"/>
        <path d="M6 2.5V6H9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>Круглосуточно</div>
        <div class="balloon__bottom">
        <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.43017 6.04131C3.96803 7.15204 4.86619 8.04789 5.9783 8.5829C6.06033 8.62174 6.15106 8.63855 6.24157 8.63168C6.33207 8.62481 6.41923 8.59448 6.49445 8.5437L8.12787 7.45257C8.20003 7.40363 8.28343 7.37376 8.37026 7.36576C8.45709 7.35777 8.54453 7.3719 8.62443 7.40684L11.6822 8.7201C11.7867 8.7636 11.874 8.84024 11.9307 8.93823C11.9873 9.03622 12.0102 9.15012 11.9958 9.2624C11.8989 10.0188 11.5297 10.714 10.9572 11.2179C10.3848 11.7218 9.64838 11.9998 8.88577 12C6.52912 12 4.26899 11.0638 2.60258 9.39742C0.936177 7.73101 0 5.47088 0 3.11423C0.000171877 2.35162 0.278213 1.6152 0.782095 1.04277C1.28598 0.470338 1.98118 0.101122 2.7376 0.00420709C2.84988 -0.0102148 2.96378 0.0126706 3.06177 0.0693393C3.15976 0.126008 3.2364 0.213317 3.2799 0.317823L4.59316 3.38211C4.62731 3.46074 4.6416 3.54656 4.63476 3.63202C4.62793 3.71747 4.60018 3.79993 4.55396 3.87213L3.46284 5.53168C3.41426 5.60674 3.38575 5.69301 3.38003 5.78223C3.37431 5.87146 3.39157 5.96066 3.43017 6.04131V6.04131Z" fill="#ED1C24"/>
        </svg><a href="tel:79999997777">+7 (999) 999-77-77</a></div>
        <button class="user__btn">Записаться</button>
        </div>   
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/iconmap.png',
        iconImageSize: [44, 44],
        iconImageOffset: [-35, -30],
        hideIconOnBalloonOpen: false
    });
    let placemark3 = new ymaps.Placemark([48.63205423488706, 44.42524599755855], {
        balloonContent: `
        <div class="slider__item">
          <img class="slider__img" src="images/balloon-img.png" alt="">
        </div>
    </div>
      <div class="ballon__body">
      <div class="balloon__address" data-type="3"><svg class="balloon__img" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3L13 2V11L9 12" fill="#ED1C24"/>
      <path d="M9 3L13 2V11L9 12" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 10L1 11V2L5 1" fill="#ED1C24"/>
      <path d="M5 10L1 11V2L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12L5 10V1L9 3V12Z" fill="#ED1C24" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> Волгоград, ул. Космонавтов, 16Д</div>
      <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25383 10.0017L9.1613 11.9209C9.53627 12.1668 9.99778 11.801 9.88817 11.3511L9.04593 7.90854C9.02315 7.81312 9.02677 7.71294 9.05637 7.61957C9.08597 7.52619 9.14034 7.44341 9.21322 7.38076L11.8207 5.11968C12.1611 4.8258 11.988 4.23204 11.5438 4.20205L8.14022 3.97414C8.04736 3.96853 7.95807 3.93491 7.88329 3.87739C7.8085 3.81987 7.75145 3.74096 7.7191 3.65028L6.44997 0.327631C6.41637 0.231612 6.35517 0.148666 6.27467 0.0900533C6.19417 0.0314405 6.09828 0 6 0C5.90172 0 5.80583 0.0314405 5.72533 0.0900533C5.64483 0.148666 5.58363 0.231612 5.55003 0.327631L4.2809 3.65028C4.24855 3.74096 4.1915 3.81987 4.11671 3.87739C4.04193 3.93491 3.95264 3.96853 3.85978 3.97414L0.456183 4.20205C0.0119858 4.23204 -0.161078 4.8258 0.179281 5.11968L2.78678 7.38076C2.85966 7.44341 2.91403 7.52619 2.94363 7.61957C2.97323 7.71294 2.97685 7.81312 2.95407 7.90854L2.17529 11.0992C2.0426 11.639 2.59641 12.0768 3.04061 11.783L5.74617 10.0017C5.82204 9.95153 5.91009 9.92489 6 9.92489C6.08991 9.92489 6.17796 9.95153 6.25383 10.0017Z" fill="#F8CC46"/>
      </svg><b>4,0</b> (8 отзывов)</div>
      <div class="balloon__clock"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#ED1C24"/>
      <path d="M6 2.5V6H9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>Круглосуточно</div>
      <div class="balloon__bottom">
      <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.43017 6.04131C3.96803 7.15204 4.86619 8.04789 5.9783 8.5829C6.06033 8.62174 6.15106 8.63855 6.24157 8.63168C6.33207 8.62481 6.41923 8.59448 6.49445 8.5437L8.12787 7.45257C8.20003 7.40363 8.28343 7.37376 8.37026 7.36576C8.45709 7.35777 8.54453 7.3719 8.62443 7.40684L11.6822 8.7201C11.7867 8.7636 11.874 8.84024 11.9307 8.93823C11.9873 9.03622 12.0102 9.15012 11.9958 9.2624C11.8989 10.0188 11.5297 10.714 10.9572 11.2179C10.3848 11.7218 9.64838 11.9998 8.88577 12C6.52912 12 4.26899 11.0638 2.60258 9.39742C0.936177 7.73101 0 5.47088 0 3.11423C0.000171877 2.35162 0.278213 1.6152 0.782095 1.04277C1.28598 0.470338 1.98118 0.101122 2.7376 0.00420709C2.84988 -0.0102148 2.96378 0.0126706 3.06177 0.0693393C3.15976 0.126008 3.2364 0.213317 3.2799 0.317823L4.59316 3.38211C4.62731 3.46074 4.6416 3.54656 4.63476 3.63202C4.62793 3.71747 4.60018 3.79993 4.55396 3.87213L3.46284 5.53168C3.41426 5.60674 3.38575 5.69301 3.38003 5.78223C3.37431 5.87146 3.39157 5.96066 3.43017 6.04131V6.04131Z" fill="#ED1C24"/>
      </svg><a href="tel:79999997777">+7 (999) 999-77-77</a></div>
      <button class="user__btn">Записаться</button>
      </div>   
      </div>
      `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/iconmap.png',
        iconImageSize: [44, 44],
        iconImageOffset: [-35, -30],
        hideIconOnBalloonOpen: false
    });
    let placemark4 = new ymaps.Placemark([48.73049977731589, 44.50094787923387], {
        balloonContent: `
         <div class="slider__item">
          <img class="slider__img" src="images/balloon-img.png" alt="">
        </div>
    </div>
      <div class="ballon__body">
      <div class="balloon__address" data-type="4"><svg class="balloon__img" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3L13 2V11L9 12" fill="#ED1C24"/>
      <path d="M9 3L13 2V11L9 12" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 10L1 11V2L5 1" fill="#ED1C24"/>
      <path d="M5 10L1 11V2L5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12L5 10V1L9 3V12Z" fill="#ED1C24" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> Волгоград, ул. Космонавтов, 16Д</div>
      <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.25383 10.0017L9.1613 11.9209C9.53627 12.1668 9.99778 11.801 9.88817 11.3511L9.04593 7.90854C9.02315 7.81312 9.02677 7.71294 9.05637 7.61957C9.08597 7.52619 9.14034 7.44341 9.21322 7.38076L11.8207 5.11968C12.1611 4.8258 11.988 4.23204 11.5438 4.20205L8.14022 3.97414C8.04736 3.96853 7.95807 3.93491 7.88329 3.87739C7.8085 3.81987 7.75145 3.74096 7.7191 3.65028L6.44997 0.327631C6.41637 0.231612 6.35517 0.148666 6.27467 0.0900533C6.19417 0.0314405 6.09828 0 6 0C5.90172 0 5.80583 0.0314405 5.72533 0.0900533C5.64483 0.148666 5.58363 0.231612 5.55003 0.327631L4.2809 3.65028C4.24855 3.74096 4.1915 3.81987 4.11671 3.87739C4.04193 3.93491 3.95264 3.96853 3.85978 3.97414L0.456183 4.20205C0.0119858 4.23204 -0.161078 4.8258 0.179281 5.11968L2.78678 7.38076C2.85966 7.44341 2.91403 7.52619 2.94363 7.61957C2.97323 7.71294 2.97685 7.81312 2.95407 7.90854L2.17529 11.0992C2.0426 11.639 2.59641 12.0768 3.04061 11.783L5.74617 10.0017C5.82204 9.95153 5.91009 9.92489 6 9.92489C6.08991 9.92489 6.17796 9.95153 6.25383 10.0017Z" fill="#F8CC46"/>
      </svg><b>4,0</b> (8 отзывов)</div>
      <div class="balloon__clock"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#ED1C24"/>
      <path d="M6 2.5V6H9.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>Круглосуточно</div>
      <div class="balloon__bottom">
      <div class="balloon__response"><svg class="balloon__img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.43017 6.04131C3.96803 7.15204 4.86619 8.04789 5.9783 8.5829C6.06033 8.62174 6.15106 8.63855 6.24157 8.63168C6.33207 8.62481 6.41923 8.59448 6.49445 8.5437L8.12787 7.45257C8.20003 7.40363 8.28343 7.37376 8.37026 7.36576C8.45709 7.35777 8.54453 7.3719 8.62443 7.40684L11.6822 8.7201C11.7867 8.7636 11.874 8.84024 11.9307 8.93823C11.9873 9.03622 12.0102 9.15012 11.9958 9.2624C11.8989 10.0188 11.5297 10.714 10.9572 11.2179C10.3848 11.7218 9.64838 11.9998 8.88577 12C6.52912 12 4.26899 11.0638 2.60258 9.39742C0.936177 7.73101 0 5.47088 0 3.11423C0.000171877 2.35162 0.278213 1.6152 0.782095 1.04277C1.28598 0.470338 1.98118 0.101122 2.7376 0.00420709C2.84988 -0.0102148 2.96378 0.0126706 3.06177 0.0693393C3.15976 0.126008 3.2364 0.213317 3.2799 0.317823L4.59316 3.38211C4.62731 3.46074 4.6416 3.54656 4.63476 3.63202C4.62793 3.71747 4.60018 3.79993 4.55396 3.87213L3.46284 5.53168C3.41426 5.60674 3.38575 5.69301 3.38003 5.78223C3.37431 5.87146 3.39157 5.96066 3.43017 6.04131V6.04131Z" fill="#ED1C24"/>
      </svg><a href="tel:79999997777">+7 (999) 999-77-77</a></div>
      <button class="user__btn">Записаться</button>
      </div>   
      </div>    
      `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/iconmap.png',
        iconImageSize: [44, 44],
        iconImageOffset: [-35, -30],
        hideIconOnBalloonOpen: false
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию 
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
}

ymaps.ready(init);
[48.73049977731589, 44.50094787923387]



var phoneMask = IMask(
    document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
});


// СЛАЙДЕР
$(document).ready(function () {
    $('.slider').slick({
        dots: false,

    });
})

