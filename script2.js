let color=prompt("Введите цвет светофора:");
let message="";
if(color==="красный"){
    message='STOP'
    document.getElementsByClassName('red')[0].style.backgroundColor="red";
    document.getElementById('stop').innerHTML=message;
}else if(color==="желтый"){
    message='WAIT'
    document.getElementsByClassName('yellow')[0].style.backgroundColor="yellow";
    document.getElementById('wait').innerHTML=message;
}else if(color==="зеленый"){
    message='GO'
    document.getElementsByClassName('green')[0].style.backgroundColor="green";
    document.getElementById('go').innerHTML=message;
}