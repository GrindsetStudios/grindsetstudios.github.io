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
    style.textContent = `body [data-country="${countryCode.toLowerCase()}"] {display: block; !important;}`;
    document.head.appendChild(style);
}

async function getCountryCode() {
    // const STORAGE_KEY = 'userCountryCode';
    // const cachedCode = localStorage.getItem(STORAGE_KEY);

    // if (cachedCode) {
    //     return Promise.resolve(cachedCode);
    // }

    try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();

        if (data.status === 'success') {
            const countryCode = data.countryCode;
            // localStorage.setItem(STORAGE_KEY, countryCode);
            return countryCode;
        } else {
            throw new Error('Country code could not be determined');
        }
    } catch (error) {
        console.error('Error when requesting countryCode:', error);
        return null;
    }
}

CountryDefinition();