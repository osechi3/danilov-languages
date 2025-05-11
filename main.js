// Language picker
let currentPageURL = window.location.href;
let languagePicker = document.querySelector(".language-picker");

if (currentPageURL.match("/ja/")) {
    languagePicker.href = currentPageURL.replace("/ja/", "/ru/");
} else if ((currentPageURL.match("/ru/"))) {
    languagePicker.href = currentPageURL.replace("/ru/", "/ja/");
}

// Могут возникнуть проблемы, если страница есть на одном языке, а на другом ее нет