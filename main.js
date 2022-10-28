const menuBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");



menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
});


const cookieStorage =() => {
    getItem: (key) => {
        const cookies = document.cookie.split(";")
                .map(cookie => cookie.split("="))
                .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }));
                return cookies[key];
    }
    setItem: (key, value) => {
        document.cookie = `${key} = ${value}`;
    }
}

const storageType = sessionStorage;
const consentPropertyName = "loggedIn";

const shouldShowPopup = () => !storageType.getItem(consentPropertyName)

const saveToStorage = () => storageType.setItem(consentPropertyName, true)

window.onload = () => {
    const consentPopup =  document.getElementById("consent-popup");
    const acceptBtn =  document.getElementById("accept");

    
    const acceptFn = event => {
        saveToStorage(storageType);
        consentPopup.classList.add("hidden");
    }
    
    acceptBtn.addEventListener("click", acceptFn);

    if(shouldShowPopup(storageType)){
        consentPopup.classList.remove("hidden");
    }
}

