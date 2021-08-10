//1) Создайте h2 c текстом "События"
//2) Создайте блок div размером 400px на 400px
//3) Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
//4) Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока: х 180, у 200"
//5) При движении мышки над блоком должны обновляться данные о расположении курсора и отображаться координаты в тексте соответственно осям х и у по отношению к странице
//6) Внизу должны отображаться текущие координаты по x и y, но по отношению блока


const myTitle = document.createElement('h1');
myTitle.innerHTML = "<h1 id='txt'>События</h1>";
document.body.appendChild(myTitle);

const mySecondSpan = document.createElement('p');
mySecondSpan.innerHTML = " X:  <span> 0 </span> " + " Y: <span>0</span>";
document.body.appendChild(mySecondSpan);
mySecondSpan.classList.add('secondCoordinate');

const myDiv = document.createElement('div');
myDiv.innerHTML = "<div></div>";
myDiv.style.width = '400px';
myDiv.style.height = '400px';
myDiv.style.border = '1px solid black';
document.body.appendChild(myDiv);

const myFirstSpan = document.createElement('p');
myFirstSpan.innerHTML = "Координаты внутри блока: X:  <span> 0 </span>" + " Y: <span> 0 </span>";
document.body.appendChild(myFirstSpan);
myFirstSpan.classList.add('firstCoordinate');

const firstCoordinateX = document.querySelector('.firstCoordinate span:first-child');
const firstCoordinateY = document.querySelector('.firstCoordinate span:last-child');
const secondCoordinateX = document.querySelector('.secondCoordinate span:first-child');
const secondCoordinateY = document.querySelector('.secondCoordinate span:last-child');

document.querySelector('div').onmousemove = function (event) {
    event = event || window.onload;
    secondCoordinateX.innerHTML = '0';
    secondCoordinateY.innerHTML = '0';
    firstCoordinateX.innerHTML = event.offsetX;
    firstCoordinateY.innerHTML = event.offsetY;
}

document.querySelector('html').onmouseout = function (event) {
    event = event || window.onload;
    firstCoordinateX.innerHTML = '0';
    firstCoordinateY.innerHTML = '0';
    secondCoordinateX.innerHTML = event.pageX;
    secondCoordinateY.innerHTML = event.pageY;
}