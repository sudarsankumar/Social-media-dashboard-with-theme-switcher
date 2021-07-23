const chk = document.getElementById('chk');
var body = document.querySelector('body')
var header =  document.querySelector('header .left .head')
var counts =  document.querySelector('header .left .counts')
var dark = document.querySelector('header .right .texts')
var slider = document.querySelector('header .right .slider')
var checkbox = document.querySelector('.ball')
var label = document.querySelector('.label')
var overview = document.querySelector('.part2 .heading')
var fb = document.querySelectorAll('.part2 .part2-container .fb')
var part1Fb = document.querySelector('.part1 .part1-facebook')
var part1Tw = document.querySelector('.part1 .part1-twitter')
var part1In = document.querySelector('.part1 .part1-instagram')
var part1Yo = document.querySelector('.part1 .part1-youtube')
var part1FbT = document.querySelector('.part1 .part1-facebook .middle .number')
var part1TwT = document.querySelector('.part1 .part1-twitter .middle .number')
var part1InT = document.querySelector('.part1 .part1-instagram .middle .number')
var part1YoT = document.querySelector('.part1 .part1-youtube .middle .number')
var part1FbN = document.querySelector('.part1 .part1-facebook .top .name')
var part1TwN = document.querySelector('.part1 .part1-twitter .top .name')
var part1InN = document.querySelector('.part1 .part1-instagram .top .name')
var part1YoN = document.querySelector('.part1 .part1-youtube .top .name')
var part1FbZ = document.querySelector('.part1 .part1-facebook .middle .text')
var part1TwZ = document.querySelector('.part1 .part1-twitter .middle .text')
var part1InZ = document.querySelector('.part1 .part1-instagram .middle .text')
var part1YoZ = document.querySelector('.part1 .part1-youtube .middle .text')
var word = document.querySelectorAll('.word')
var num = document.querySelectorAll('.num')
var footer = document.querySelector('footer')
var footerA = document.querySelector('footer a')
chk.addEventListener('change', () => {
	body.classList.toggle('dark');
    label.classList.toggle('dark');
    console.log(checkbox)
    header.classList.toggle('dark');
    counts.classList.toggle('dark');
    dark.classList.toggle('dark');
    slider.classList.toggle('dark');
    checkbox.classList.toggle('dark');
    overview.classList.toggle('dark');
    part1Fb.classList.toggle('dark');
    part1Tw.classList.toggle('dark');
    part1In.classList.toggle('dark');
    part1Yo.classList.toggle('dark');
    part1FbT.classList.toggle('dark');
    part1TwT.classList.toggle('dark');
    part1InT.classList.toggle('dark');
    part1YoT.classList.toggle('dark');
    part1FbN.classList.toggle('dark');
    part1TwN.classList.toggle('dark');
    part1InN.classList.toggle('dark');
    part1YoN.classList.toggle('dark');
    part1FbZ.classList.toggle('dark');
    part1TwZ.classList.toggle('dark');
    part1InZ.classList.toggle('dark');
    part1YoZ.classList.toggle('dark');
    fb.forEach((divs) => {
        divs.classList.toggle('dark')
    })
    word.forEach((divs) => {
        divs.classList.toggle('dark')
    })
    num.forEach((divs) => {
        divs.classList.toggle('dark')
    })
    footer.classList.toggle('dark');
    footerA.classList.toggle('dark');
});