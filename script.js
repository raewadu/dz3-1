let color=prompt('Введите цвет (red, green, blue, yellow, pink, purple, orange):')
let colors=['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
let trueColor='';
for (let i=0; i<colors.length; i++){
    if (color==colors[i]){
        color=colors[i];
        trueColor=color
    }
}
if (color==trueColor){
    document.body.style.backgroundColor = color;
    document.querySelector('h1').innerText = `Фон изменён на ${color} цвет`;
}else{
    document.querySelector('h1').innerText = `Ошибка! Введите корректный цвет`;
}