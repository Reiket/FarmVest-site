export function themeFunc() {
    "use strict"

    window.addEventListener("load", windowLoad); // дочекаємся поки вся сторінка завантажиться

    function  windowLoad() {
        const htmlBlock = document.documentElement; // получаєм блок  HTML

        const saveUserTheme = localStorage.getItem('user-theme'); //Для зберігання теми після перезапуску сторінки
        //Робота з системними налаштуваннями 
        let userTheme;
        if(window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=> {
            !saveUserTheme ? changeTheme() : null;
        });
        //зміна теми при кліку
        const themeButton = document.querySelector('.page__theme');
        const resetButton  = document.querySelector('.page__reset');
        if (themeButton) {
            themeButton.addEventListener("click", function(e) {
                resetButton.classList.add('active');
                changeTheme(true);
            });
        }
        if (resetButton) {
            resetButton.addEventListener("click", function(e) {
                resetButton.classList.remove('active');
                localStorage.getItem('user-theme', '');
            });
        }
        //Додавання теми при загрузці сайту
        function setThemeClass() {
            if(saveUserTheme) { //якщо була збережена тема,то вона загрузиться
                htmlBlock.classList.add(saveUserTheme);
                resetButton.classList.add('active');
            } else {
                htmlBlock.classList.add(userTheme); //якщо не було збережених тем додається системна тема
            }
        }
        setThemeClass();

        //Функція зміни тем
        function changeTheme(saveTheme = false) {
            let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
            let newTheme;

            if(currentTheme === 'light') {
                newTheme = 'dark';
            } else if(currentTheme === 'dark') {
                newTheme = 'light';
            }
            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);
            saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        }
    }"use strict"

    window.addEventListener("load", windowLoad); // дочекаємся поки вся сторінка завантажиться

    function  windowLoad() {
        const htmlBlock = document.documentElement; // получаєм блок  HTML

        const saveUserTheme = localStorage.getItem('user-theme'); //Для зберігання теми після перезапуску сторінки
        //Робота з системними налаштуваннями 
        let userTheme;
        if(window.matchMedia) {
            userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e=> {
            !saveUserTheme ? changeTheme() : null;
        });
        //зміна теми при кліку
        const themeButton = document.querySelector('.page__theme');
        const resetButton  = document.querySelector('.page__reset');
        if (themeButton) {
            themeButton.addEventListener("click", function(e) {
                resetButton.classList.add('active');
                changeTheme(true);
            });
        }
        if (resetButton) {
            resetButton.addEventListener("click", function(e) {
                resetButton.classList.remove('active');
                localStorage.getItem('user-theme', '');
            });
        }
        //Додавання теми при загрузці сайту
        function setThemeClass() {
            if(saveUserTheme) { //якщо була збережена тема,то вона загрузиться
                htmlBlock.classList.add(saveUserTheme);
                resetButton.classList.add('active');
            } else {
                htmlBlock.classList.add(userTheme); //якщо не було збережених тем додається системна тема
            }
        }
        setThemeClass();

        //Функція зміни тем
        function changeTheme(saveTheme = false) {
            let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
            let newTheme;

            if(currentTheme === 'light') {
                newTheme = 'dark';
            } else if(currentTheme === 'dark') {
                newTheme = 'light';
            }
            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);
            saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
        }
    }
}
