today = new Date();
$("#year").text(today.getFullYear())

let dayOfWeek = today.getDay();
todaysHours = document.getElementById('dow' + dayOfWeek)
todaysHours.style.fontWeight = 500;

// SHOW MESSAGE
let modalTitle = 'Shop Hours Update';
let modalMessage = 'We will be closed on <strong>Thursday</strong> (11/24) and <strong>Friday</strong> (11/25) for the Thanksgiving holiday. We will reopen on Saturday (11/26). <br>Happy Thanksgiving to you and yours!';
let modalImage = 'https://images.unsplash.com/photo-1510194638421-92f54ce46444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80';
const startDate = new Date('November 20, 2022')
const endDate = new Date('November 26, 2022')

$(document).ready(function () {
    if (today >= startDate && today <= endDate) {
        $(".modal-title").text(modalTitle);
        $(".modal-text").append(modalMessage);
        $(".modal-image").attr('src', modalImage);
        $("#modal").modal('show');

    }
});
