// открытие и скрытие попапов
function openPopup() {
    let attr = this.dataset.popup;
    let popup = document.querySelector(`#${attr}`);
    //@ts-ignore
    popup.classList.toggle('hidden');
    //@ts-ignore
    popup.addEventListener("click", function(event) {
        //@ts-ignore
        e = event || window.event
        //@ts-ignore
        if (e.target == this) {
            //@ts-ignore
            popup.classList.add("hidden");
        }
    });
}
let popups = document.querySelectorAll('[data-popup]');

for (let i = 0; i < popups.length; i++) {
    //@ts-ignore
    popups[i].onclick = openPopup;
}
