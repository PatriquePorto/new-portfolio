// Project Video Variables
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const hoverSign = document.querySelector('.hover-sign');

// Sidebar Variables
const sideBar = document.querySelector('.siderbar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

// Project Video List
const videoList = [video1, video2, video3];

videoList.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
        hoverSign.classList.add('active');
    });
    video.addEventListener('mouseout', () => {
        video.pause();
        hoverSign.classList.remove('active');
    });
});

// Sidebar Elements

menu.addEventListener("click", function() {
    sideBar.classList.toggle('open-sidebar');  
});

// Close Sidebar

close.addEventListener("click", function() {
    sideBar.classList.toggle('open-sidebar');
});