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
    // let but = document.querySelectorAll(".button");
    // but.forEach(function(button){
    //     button.addEventListener("click", function (){
    //         if(button.style.backgroundColor === "blueviolet"){
    //             button.style.backgroundColor = "pink";
    //             button.style.margin = "20vw";
    //             console.log("изменение цвета и внешнего отступа")
    //         }
    //         else{
    //             button.style.backgroundColor = "blueviolet"
    //             button.style.margin = "10vw";
    //             console.log ("цвет не поменялся")
    //         }
    //     })
    // })




    // задача 1. урок 4
    let bu = 0
    let Butt = document.querySelector(".button1");
    let forPco = document.querySelector(".pCo");
    let txtt = ("Вы достигли максимального количества кликов");

    Butt.addEventListener("click", function(){
            bu++;
            forPco.textContent = bu;
        if(bu === 15){
        Butt.disabled = true
        alert(txtt);
     }
    });


    // задача 2. урок 4

      let count = 10;
      const display = document.querySelector('.timer');
      const resetButton = document.querySelector('.forTimer');
      let interval;

      function startTimer() {
        interval = setInterval(function () {
          count--;
          display.textContent = count;

          if (count <= 0) {
            clearInterval(interval);
            display.textContent = "Время вышло!";
          }
        }, 1000);
      }

      resetButton.addEventListener('click', function () {
        clearInterval(interval);
        count = 10;
        display.textContent = count;
        startTimer();
      });

      startTimer();



          // задача 3. урок 4
        let v = 0;
        let tic = null;

        let sta = document.querySelector(".st")
        let sto = document.querySelector(".sp")
        let reset = document.querySelector(".res")
        let clo = document.querySelector(".clock")

         sta.addEventListener("click", function() {
            if (!tic) {
                tic = setInterval(function() {
                v++;
                clo.textContent = v;
        }, 1000);
            }
         });

           sto.addEventListener("click", function() {
        clearInterval(tic);
        tic = null;
        });
       
        reset.addEventListener("click", function() {
        clearInterval(tic);
        tic = null;
        v = 0;
        clo.textContent = v;
    });


});