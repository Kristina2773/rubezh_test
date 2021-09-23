function Hiding() {

    let one = document.querySelectorAll('.one');
    let two = document.querySelectorAll('.two');
    let three = document.querySelectorAll('.three');
    let four = document.querySelectorAll('.four');
    let five = document.querySelectorAll('.five');
    let six = document.querySelectorAll('.six');
    let seven = document.querySelectorAll('.seven');
    let eight = document.querySelectorAll('.eight');

    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    let btn3 = document.querySelector('.btn3');
    let btn4 = document.querySelector('.btn4');
    let btn5 = document.querySelector('.btn5');
    let btn6 = document.querySelector('.btn6');
    let btn7 = document.querySelector('.btn7');
    let btn8 = document.querySelector('.btn8');

    btn1.onclick = function () {
        for (let n1 = 0; n1 < one.length; n1++) {
            one[n1].classList.toggle('hide');
        }
    }
    btn2.onclick = function () {
        for (let n2 = 0; n2 < two.length; n2++) {
            two[n2].classList.toggle('hide');
        }
    }
    btn3.onclick = function () {
        for (let n3 = 0; n3 < three.length; n3++) {
            three[n3].classList.toggle('hide');
        }
    }
    btn4.onclick = function () {
        for (let n4 = 0; n4 < four.length; n4++) {
            four[n4].classList.toggle('hide');
        }
    }
    btn5.onclick = function () {
        for (let n5 = 0; n5 < five.length; n5++) {
            five[n5].classList.toggle('hide');
        }
    }
    btn6.onclick = function () {
        for (let n6 = 0; n6 < six.length; n6++) {
            six[n6].classList.toggle('hide');
        }
    }
    btn7.onclick = function () {
        for (let n7 = 0; n7 < seven.length; n7++) {
            seven[n7].classList.toggle('hide');
        }
    }
    btn8.onclick = function () {
        for (let n8 = 0; n8 < eight.length; n8++) {
            eight[n8].classList.toggle('hide');
        }
    }
}

export default Hiding
