let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;
const book = document.querySelector(".pages");

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
        // إخفاء الصفحة الحالية
        pages[currentPage].style.transform = "rotateY(-180deg)";
        pages[currentPage].style.zIndex = 1;

        // الانتقال للصفحة التالية
        currentPage++;
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = 2;

        // التأكد من إخفاء الصفحات التي تكون وراء الصفحة الحالية
        if (currentPage < totalPages - 1) {
            pages[currentPage + 1].style.zIndex = 1;
        }
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 0) {
        // إخفاء الصفحة الحالية
        pages[currentPage].style.transform = "rotateY(180deg)";
        pages[currentPage].style.zIndex = 1;

        // الانتقال للصفحة السابقة
        currentPage--;
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = 2;

        // التأكد من إخفاء الصفحات التي تكون وراء الصفحة الحالية
        if (currentPage > 0) {
            pages[currentPage - 1].style.zIndex = 1;
        }
    }
});
