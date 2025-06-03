let dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();

const day = document.querySelector(".calendar-dates");
const currentDate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation span");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const generateCalendar = () => {
    let firstDay = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month + 1, 0).getDate();
    let dayend = new Date(year, month, lastDay).getDay();
    let monthLastDate = new Date(year, month, 0).getDate();

    let lit = "";

    for (let i = firstDay; i > 0; i--){
        lit += 
            `<li class="inactive">${monthLastDate - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDay; i++){
        let isToday = i === dateObj.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    currentDate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
}

generateCalendar();

prenexIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());

            year = date.getFullYear();

            month = date.getMonth();
        }else{
            date = new Date();

        }
        generateCalendar();
    });
});