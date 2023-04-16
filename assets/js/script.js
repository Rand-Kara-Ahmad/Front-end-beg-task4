const jobsDropdown = document.querySelector('.jobs-dropdown')
const jobsDropdownPolygon = document.querySelector('.jobs-dropdown-polygon')

const jobs = document.querySelector('#jobs');
const dropdown_up = document.querySelector('#dropdown_up');


jobs.addEventListener('click', function () {
    if (jobsDropdown.style.display === "none") {
        jobsDropdownPolygon.style.display = "flex";
        jobsDropdown.style.display = "flex";
        jobs.style.fontWeight = "bold";
        jobs.style.color = "black";
        dropdown_up.src = "assets/images/icons/dropdown.svg";
    } else {
        jobsDropdownPolygon.style.display = "none";
        jobsDropdown.style.display = "none";
        jobs.style.fontWeight = "normal";
        jobs.style.color = "#938C8C";
        dropdown_up.src = "assets/images/icons/dropdown_up.svg";
    }
})
