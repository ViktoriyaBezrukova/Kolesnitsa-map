
function sideMenu() {
    let sidemenuItems = document.querySelectorAll('.sidemenu__item');
    let balloonAdress = document.querySelectorAll('.balloon__address');
    sidemenuItems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            let itemText = elem.querySelector('.text__address').textContent
            let inputAdress = document.querySelector('.dropdown-menu__choose')
            let successAdress = document.querySelector('.success__text-adress');
            successAdress.textContent = itemText;
            inputAdress.textContent = itemText
            elem.classList.toggle('grey-bg')

            if (elem.classList.contains('grey-bg')) {
                document.querySelector('.dropdown-menu').classList.add('dropdown-menu__open')
                document.querySelector('.roll').classList.add('roll__open')
                document.querySelector('.roll').classList.remove('roll__close')
                document.querySelector('.form__bot').classList.remove('none');
            } else {
                document.querySelector('.dropdown-menu').classList.remove('dropdown-menu__open')
                document.querySelector('.roll').classList.remove('roll__open')
                document.querySelector('.roll').classList.add('roll__close')
            }
        });
    });

    let closeRoll = document.querySelector('.form__btn')
    closeRoll.addEventListener('click', function () {
        document.querySelector('.form__bot').classList.add('none');
        sidemenuItems.classList.remove('grey-bg')
    });

    let roll = document.querySelector('.roll')
    roll.addEventListener('click', function () {
        roll.classList.toggle('roll__open');
        document.querySelector('.dropdown-menu').classList.toggle('dropdown-menu__open')
    })

    let inputTime = document.querySelector('.input__time');
    let popupBg = document.querySelector('.popup-bg');
    let userName = document.querySelector('.input__name')
    let successName = document.querySelector('.success__text-name')

    userName.addEventListener('keyup', function (e) {
        let firstLetter = e.target.value
        successName.innerHTML = firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1)
    })

    inputTime.addEventListener('click', function () {
        popupBg.classList.remove('none')
    })
}

function popups() {
    let popup = document.querySelector('.popup-bg')
    let closePopup = document.querySelector('.popup__close');
    let days = document.querySelectorAll('.date__item-number');
    let times = document.querySelectorAll('.date__time-hour');
    let successPopup = document.querySelector('.popup__success-bg');
    let successDate = document.querySelector('.success__text-date');
    let successHour = document.querySelector('.success__text-hours');
    let successClose = document.querySelector('.popup-success__close');
    let popupSeccess = document.querySelector('.popup__success-bg');

    closePopup.addEventListener('click', function () {
        popup.classList.add('none')
        successPopup.classList.remove('none')
    });

    days.forEach(function (elem) {
        elem.addEventListener('click', function () {
            successDate.textContent = elem.textContent + ' октября 2022 '
            console.log(successDate)
        })
    })

    times.forEach(function (elem) {
        elem.addEventListener('click', function () {
            successHour.textContent = elem.textContent
        })
    })

    successClose.addEventListener('click', function () {
        popupSeccess.classList.add('none')
    })

}

popups()

sideMenu()

