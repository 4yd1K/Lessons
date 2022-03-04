// lesson 2

// шахматная доска

function desk (){
    let a1 = "# # # # ";
    let a2 = " # # # #";
    for(let i = 0; i < 4 ;i++){
    console.log(a1);
    console.log(a2);
    }
    }
    desk()

// факториал (без рекурсии)
    function fuk (n) {
        let f=1;
        for (let i = 1; i <= n; i++)
        f = f * i
        return f;

    }

    console.log(fuk(10))

// сортировка пузырьками, без сорт

    var m = [7, 8, 3, 10, 5, 1, 4, 9, 2, 6];
 
var count = m.length-1;
 
for (var i = 0; i < count; i++) {
     for (var j = 0; j < count-i; j++) {
 
        if (m[j] > m[j+1]) {
           var max = m[j];
           m[j] = m[j+1];
           m[j+1] = max;
        }
     }  
}
 
console.log(m);

// size Converter


function sizeConverter (size , unit) {
if (unit === "Кб") {
    return size*1024
} if (unit === "Мб") {
    return size*1024*1024
} if (unit === "Гб") {
    return size*1024*1024*1024
}

}
console.log (sizeConverter(10, "Мб"))




// lesson 1


// console.log('Hello word');

// task 1
let str = '123456'

console.log(str.split('').reverse().join(''));

// task 2
let string = 'http://my-first-site.com'

console.log(string.startsWith('http://') && string.endsWith('.html'));



// task 3

const dayOfWeek = function(number){
    const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    
    return week[number-1]
}

console.log(dayOfWeek(1))




