const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
    this.classList.toggle('active1');
}

function addClass() {
    this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);

// Fill-SkillBar
var skillSection= document.getElementById('skills-indicators-section');
var skillbar= document.getElementsByClassName('skill-indicator-inner');
var animation=false;

function initialiseBars(){
    for (var i of skillbar){
        i.style.width='0px';
    }
}

initialiseBars();
window.addEventListener('scroll',function(){

    var currentpos=window.pageYOffset;
    var pos=skillSection.getBoundingClientRect();

    if(!animation&&currentpos>=pos.top){
        animation=true;
        for(var i=0; i<skillbar.length;i++){
            var barWidth=skillbar[i].getAttribute('data-bar-width');
            skillbar[i].style.width= barWidth+'%';
        }
    }else if(currentpos<=pos.top){
        animation=false;
        initialiseBars();
    }


})