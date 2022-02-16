// console.log('Hello word');

let str = '123456'

console.log(str.split('').reverse().join(''));


let string = 'http://my-first-site.com'

console.log(string.startsWith('http://') && string.endsWith('.html'))




const dayOfWeek = function(number){
    const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    
    return week[number-1]
}

console.log(dayOfWeek(1))