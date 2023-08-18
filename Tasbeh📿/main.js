document.querySelector('.button3').addEventListener('click', function () {
    let inp = document.querySelector('input');
    inp.value = parseInt(inp.value) + 1;
});
document.querySelector('.button1').addEventListener('click', function () {
    document.querySelector('input').value = 0;
});
document.querySelector('.button2').addEventListener('click', function () {
    let qiymat = document.querySelector('input').value;
    if (qiymat >= '0') {
        document.querySelector('input').value = '';
    } else {
        document.querySelector('input').value = '0';
    }
});