// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

// for(var i = 0; i < navMenuAnchorTags.length; i++)
// {
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById('targetSectionID');
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0, 50);
//         }, 20);
//     });
// }

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.querySelector('.skills-display');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

// setting width to zero for all div
function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars(){
    for(let bar of progressBars)
    {
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll(){
    // You have to check whether skills-display is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        // console.log("Skill section visible");
        fillBars();
    }
    else if(coordinates.top > window.innerHeight)
    {
        animationDone = false;
        initialiseBars();
    }
}

function toggleDropDown(id) {
    let elem = document.getElementById(id);
    if (elem.style.display === "none") {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
}