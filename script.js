var btn1j= document.getElementById('btn1');
var btn2j= document.getElementById('btn2');
var btn3j= document.getElementById('btn3');
var btn4j= document.getElementById('btn4');
var slide= document.getElementById('slider')
function toggleBtn1(){
    btn1j.style.backgroundColor='black';
    btn2j.style.backgroundColor='white';
    btn3j.style.backgroundColor='white';
    btn4j.style.backgroundColor='white';
    slide.style.marginLeft='0px';
}
function toggleBtn2(){
    btn1j.style.backgroundColor='white';
    btn2j.style.backgroundColor='black';
    btn3j.style.backgroundColor='white';
    btn4j.style.backgroundColor='white';
    slide.style.marginLeft='-500px';
}
function toggleBtn3(){
    btn1j.style.backgroundColor='white';
    btn2j.style.backgroundColor='white';
    btn3j.style.backgroundColor='black';
    btn4j.style.backgroundColor='white';
    slide.style.marginLeft='-1000px';
}
function toggleBtn4(){
    btn1j.style.backgroundColor='white';
    btn2j.style.backgroundColor='white';
    btn3j.style.backgroundColor='white';
    btn4j.style.backgroundColor='black';
    slide.style.marginLeft='-1500px';
}