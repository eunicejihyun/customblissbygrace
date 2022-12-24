today = new Date();
$("#year").text(today.getFullYear())

let dayOfWeek = today.getDay();
todaysHours = document.getElementById('dow' + dayOfWeek)
todaysHours.style.fontWeight = 500;

// SHOW MESSAGE
let modalTitle = 'Holiday Hours Update';
let modalMessage = 'We will be closed on <strong>Monday</strong> (December 26) and <strong>Monday</strong> (January 2). Happy holidays to you and yours!';
let modalImage = 'https://images.unsplash.com/photo-1546074177-31bfa593f731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80';
const startDate = new Date('December 24, 2022')
const endDate = new Date('January 3, 2023')

$(document).ready(function () {
    if (today >= startDate && today <= endDate) {
        $(".modal-title").text(modalTitle);
        $(".modal-text").append(modalMessage);
        $(".modal-image").attr('src', modalImage);
        $("#modal").modal('show');

    }
});
