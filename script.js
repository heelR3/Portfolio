
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function(){
    const seeMoreBtn = document.getElementById("see-more-btn");
    const showLessBtn = document.getElementById("show-less-btn");
    const extraWorks = document.querySelector(".extra-works");

    seeMoreBtn.addEventListener("click", function () {
        extraWorks.style.display = "grid"; // Show extra projects
        seeMoreBtn.style.display = "none"; // Hide "See More"
        showLessBtn.style.display = "block"; // Show "Show Less"
    });

    showLessBtn.addEventListener("click", function () {
        extraWorks.style.display = "none"; // Hide extra projects
        showLessBtn.style.display = "none"; // Hide "Show Less"
        seeMoreBtn.style.display = "block"; // Show "See More"
    });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzA-_byi1gTQTME3Nyf43uQMXd6CNLVPMSmJMzjvBzoglaReTZzMQL_LEFmXfTKgKuWpw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
        
form.addEventListener('submit', e => {
    e.preventDefault()
    // Show "Submitting..." message immediately
    msg.innerHTML = "Submitting...";
    msg.style.color = "blue";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully..."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


async function fetchLeetCodeData(username) {
    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();

        if (data.totalSolved !== undefined) {
            document.getElementById("leetcode-count").innerText = data.totalSolved;
        } else {
            document.getElementById("leetcode-count").innerText = "N/A";
        }
    } catch (error) {
        console.error("Error fetching LeetCode data:", error);
        document.getElementById("leetcode-count").innerText = "Error";
    }
}

const ems = document.getElementById("ems");
ems.onclick = function(){
    window.open("https://heelr3.github.io/ems/");
}

const ai-interview-mocker = document.getElementById("ai-interview-mocker");
ai-interview-mocker.onclick = function(){
    window.open("https://ai-interview-mocker-phi-teal.vercel.app/");
}

const personal-portfolio = document.getElementById("personal-portfolio");
personal-portfolio.onclick = function(){
    window.open("https://heelr3.github.io/Portfolio/");
}


// Replace with your actual LeetCode username
fetchLeetCodeData("heel_r3");
setInterval(() => fetchLeetCodeData("heel_r3"), 60000); // Refreshes every 60 seconds
