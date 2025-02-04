function scrollToTarget(targetId) {
    const element = document.getElementById(targetId);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 100;

    window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function visibleHeaderModal() {
    const body = document.querySelector("body");
    const burgerButton = body.querySelector(".burger-button").classList;
    const headerMobile = body.querySelector(".header-mobile").style;

    if (burgerButton.contains("burger__active")) {
        burgerButton.remove("burger__active");
        headerMobile.top = "-110vh";
        body.style.overflow = "visible";
    } else {
        burgerButton.add("burger__active");
        headerMobile.top = "0";
        body.style.overflow = "hidden";
    }
}

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

async function CountryDefinition() {
    let countryCode = await getCountryCode()
    const style = document.createElement('style');
    const userLanguage = navigator.language || navigator.languages[0];
    style.textContent = `body [data-country="${userLanguage.toLowerCase()}"]`;
    if(countryCode != null)
        style.textContent += `, body [data-country="${countryCode.toLowerCase()}"]`;
    style.textContent += '{display: block; !important;}';
    document.head.appendChild(style);
}

async function getCountryCode() {
    const STORAGE_KEY = 'userCountryCode';
    const cachedCode = localStorage.getItem(STORAGE_KEY);

    if (cachedCode) {
        return Promise.resolve(cachedCode);
    }

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code;
        localStorage.setItem(STORAGE_KEY, countryCode);
        return countryCode;
    } catch (error) {
        console.error('Error when requesting countryCode:', error);
        return null;
    }
}

CountryDefinition();