let num1, num2, result;

function sum () {
    
    num1 = document.querySelector('.n1').value;
    num1 = parseInt(num1);

    num2 = document.querySelector('.n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.querySelector('.out').innerHTML = result;

}

function minus () {
   
    num1 = document.querySelector('.n1').value;
    num1 = parseInt(num1);

    num2 = document.querySelector('.n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.querySelector('.out').innerHTML = result;

}


function mult () {
   
    num1 = document.querySelector('.n1').value;
    num1 = parseInt(num1);

    num2 = document.querySelector('.n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.querySelector('.out').innerHTML = result;

}


function dev () {
   
    num1 = document.querySelector('.n1').value;
    num1 = parseInt(num1);

    num2 = document.querySelector('.n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;

    document.querySelector('.out').innerHTML = result;

}

// function clear () {
   
//     num1 = document.querySelector('.n1').value = '' ;
    

//     num2 = document.querySelector('.n2').value = '';
    


//     // document.querySelector('.out').innerHTML = result;

// }