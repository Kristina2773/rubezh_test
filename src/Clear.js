function Clear() {

    let one = document.querySelectorAll('.one');
    let two = document.querySelectorAll('.two');
    let three = document.querySelectorAll('.three');
    let four = document.querySelectorAll('.four');
    let five = document.querySelectorAll('.five');
    let six = document.querySelectorAll('.six');
    let seven = document.querySelectorAll('.seven');
    let eight = document.querySelectorAll('.eight');

    let em = document.querySelectorAll('.elem');
    let clc = document.querySelector('.reset');
    clc.onclick = function () {
        for (let n = 0; n < one.length; n++) {
            one[n].classList.remove('hide');
            two[n].classList.remove('hide');
            three[n].classList.remove('hide');
            four[n].classList.remove('hide');
            five[n].classList.remove('hide');
            six[n].classList.remove('hide');
            seven[n].classList.remove('hide');
        }
        for (let n = 0; n < eight.length; n++) {
            eight[n].classList.remove('hide');
        }
        for(let s of em) {
            s.classList.remove('light');
        }
    }
}
export default Clear