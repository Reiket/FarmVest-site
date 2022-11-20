

// Работа с шапкой при скроле
export function headerScroll() {
    const header = document.querySelector(".header");
    const pageTheme = document.querySelector(".page__theme");
    console.log(pageTheme);
    console.log(header);
    window.onscroll = () => {
        if (window.scrollY > 20) {
            header.classList.add("_header-scroll");
            pageTheme.classList.add('none');
        } else {
            header.classList.remove("_header-scroll");
            pageTheme.classList.remove('none');

        }
    }
}
