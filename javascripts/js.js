document.addEventListener("DOMContentLoaded", function(){


//    Задача 1 
//     let str = "abcde"
//     alert(str[0]);
//     alert(str[1]);
//     alert(str[4]);

// //     Задача 2
//     let numb_one = prompt("Напиши число", 2)
//     let numb_two = prompt("Напиши число", 13)
//     console.log (numb_one > 0 || numb_two > 0)

// //     Задача 3
//     let old = prompt("how old are you?", 18);
//     console.log (old >= 18)

//     // Урок 2
//     let ex1 = document.querySelector(".ex1")
//     let ex2 = document.querySelector(".ex2")
//     let ex3 = document.querySelector(".ex3")
//     let ex4 = document.querySelector(".ex4")
//     let ex5 = document.querySelector(".ex5")
//     let ex6 = document.querySelector(".ex6")
//     let ex7 = document.querySelector(".ex7")

//     // Задача 1
//     let a = prompt("Введите ваш возраст:", 30);
//     if(a <= 65) {ex1.textContent = "Вам ещё рано на пенсию";}
//     else {ex1.textContent = "Поздравляем с пенсионным возрастом!";}

//     //     Задача 2
//     let b = prompt("Введите первое число:", 5);
//     let b1 = prompt("Введите второе число:", 10);
//     if(b > b1) {ex2.textContent = "Первое число больше";}
//     if(b1 > b ) {ex2.textContent = "Второе число больше";}
//     if(b = b1) {ex2.textContent = "Числа равны";}

//     //     Задача 3
//     let c = prompt("Введите число:", 7);
//     if(c / 2) {ex3.textContent = "Это чётное число";}
//     else {ex3.textContent = "Это нечётное число"}

//     //     Задача 4
//     const secretNumber = 9;
//     const your_answer = prompt("Угадайте число от 1 до 10:");
//     if (your_answer == secretNumber) {ex4.textContent = "Вы угадали!"}
//     else {ex4.textContent = "Попробуйте ещё раз!"}


//     //     Задача 5
//     let d = prompt("Введите логин");
//     let d1 = prompt("Введите пароль");
//     const log = "admin";
//     const pass = "12345";
//     if (d == "admin" && d1 == "12345"){ex5.textContent = "Добро пожаловать!"}
//     else {ex5.textContent = "Неверный логин или пароль"}

//     //     Задача 6
//     let e = prompt("Введите год:", 2024);
//     if ((e % 4 === 0 && e % 100 !== 0) || e % 400 === 0){ex6.textContent = "Это високосный год"}
//     else {ex6.textContent = "Это невисокосный год"}

//      //     Задача 7
//     let f = prompt ("Введите число:");
//     if (f>100){ex7.textContent = "Большое число"};
//     if (f<100){ex7.textContent = "Маленькое число"};
//     if (f==100){ex7.textContent = "Точно 100!"};


    // Задача 1. Урок 3
    let but = document.querySelectorAll(".button");
    but.forEach(function(button){
        button.addEventListener("click", function (){
            if(button.style.backgroundColor === "blueviolet"){
                button.style.backgroundColor = "pink";
                button.style.margin = "20vw";
                console.log("изменение цвета и внешнего отступа")
            }
            else{
                button.style.backgroundColor = "blueviolet"
                button.style.margin = "10vw";
                console.log ("цвет не поменялся")
            }
        })
    })


});