const blop = document.querySelector('.blop');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const jump = () => {
    blop.classList.add('jump');

    setTimeout(() => {
        blop.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const blopPosition = +window.getComputedStyle(blop).bottom.replace('px', '');

    console.log(blopPosition);

    if (pipePosition <= 95 && blopPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        blop.style.animation = 'none';
        blop.style.bottom = `${blopPosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);