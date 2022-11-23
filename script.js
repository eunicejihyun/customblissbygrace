today = new Date();

let copyright_year = document.getElementById('year');

copyright_year.textContent=today.getFullYear();

let dayOfWeek = today.getDay();

todaysHours = document.getElementById('dow'+dayOfWeek)

todaysHours.style.fontWeight = 500;

// SHOW MESSAGE
$(document).ready(function(){
    $("#messageModal").modal('show');
});
