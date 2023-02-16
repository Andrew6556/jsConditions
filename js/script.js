"use strict";


let user_name           = prompt('Введите логин: '),
    user_password       = prompt('Введите пароль: '),

    user_condition_auth = (user_name == 'admin' && user_password == '123321') ? 1 : 0;

if (user_name){
    if(user_condition_auth){
        alert('welcome Admin');
        document.querySelector('.wrapper').style.display = 'flex';
        document.querySelector('.form__text_name').innerText = user_name;
    }else if(user_password != '123321'){
        alert('Регистрация прошла успешно');
        while (true){
            let user_confirmation_password = prompt('Подвердите свой пароль: ');
            if (user_password == user_confirmation_password){
                alert("Вход выполнен")
                document.querySelector('.form__text_name').innerText = user_name;
                document.querySelector('.form__text_password').innerText = user_password;
                document.querySelector('.wrapper').style.display = 'flex';
                break
            }else{
                alert("Error!\nПопробуйте снова");
            }
        }
    }else {
        alert('Вход не выполнен')
    }
}else{
    alert("Вы не ввели свое имя!")
}

alert("Оцените нашу программу по 5-и балльной шкале");

let user_grade = +prompt("Введите ваше оценку(цифру):");

if (user_grade <= 5 && user_grade != ""){
    if (user_grade <= 5 && user_grade >= 4.5){
        alert("Вау, отличная оценка!")
    }else if (user_grade <= 4.5 && user_grade >= 3.5){
        alert("Хорошо, рады вашему отзыву")
    }else if (user_grade <= 3.5 && user_grade >= 2.5){
        alert("спасибо, рады вашему отзыву")
    }else if (user_grade <= 2.5 && user_grade >= 1.5){
        alert("ну ты это ,может передумаешь ,не все так плохо)")
    }else if (user_grade <= 1.5 && user_grade >= 0){
        alert("Одумайся, все ж работает, значит 5 баллов заслуженно можно ставить :)")
    }
}else{
    alert("Вы ввели недопустимое число");
}

    
