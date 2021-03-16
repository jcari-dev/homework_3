let money = 0;
const tools = {
    teeth: 0.041666,
    rustyScissors: 0.208
}


function work(){
    money +=Math.round(tools.teeth*24);
    console.log(money);
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
}

// function work2(){
//     money -5;
//     money +=Math.round(tools.rustyScissors*24);
//     console.log(money);
//     document.getElementById('profit').innerHTML = `Total Money: $${money}`;
// }





