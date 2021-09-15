const cont = document.querySelector('.container')
document.onmousemove = function(e){
    let x = e.clientX / 10;
    let y = e.clientY / 10;

    cont.style.backgroundPositionX = x + 'px';
    cont.style.backgroundPositionY = y + 'px';
}