const cat = document.getElementById("cat");
const counter = document.getElementById("counter");

const openImg = "open.jpg";
const closeImg = "close.jpg";

/* ===== COOKIE FUNCTIONS ===== */
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length);
        }
    }
    return null;
}

/* ===== LOAD COUNTER ===== */
let count = parseInt(getCookie("popcatCount")) || 0;
counter.textContent = count;

/* ===== ACTIONS ===== */
function pressCat() {
    cat.src = openImg;
    count++;
    counter.textContent = count;
    setCookie("popcatCount", count, 365); // simpan 1 tahun
}

function releaseCat() {
    cat.src = closeImg;
}

/* ===== MOUSE ===== */
cat.addEventListener("mousedown", pressCat);
cat.addEventListener("mouseup", releaseCat);
cat.addEventListener("mouseleave", releaseCat);

/* ===== TOUCH ===== */
cat.addEventListener("touchstart", (e) => {
    e.preventDefault();
    pressCat();
});

cat.addEventListener("touchend", releaseCat);
