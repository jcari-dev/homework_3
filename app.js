let money = 0;
let scissorsCost = 5;

const tools = {
    teeth: 0.0416,
    rustyScissors: 0.208
}

function disableBtn(){
    if(money >= 5){
        document.getElementById('sciBtn').disabled = false;
    } else{
        document.getElementById('sciBtn').disabled = true;
    }
}

function work(){
    money +=Math.round(tools.teeth*24);
    console.log(money);
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
    disableBtn();
}

function buyS(){
    let buySc = confirm(`Are you use you want to buy scissors, for $5? You have $${money} left.`);
    if (buySc == true){
    money -= scissorsCost;
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
    confirm(`You have ${money} left.`)
    document.getElementById('sciBtn').disabled = true;
    // console.log(money);
    } else {
        confirm('Come back whenever!');
    }
}

// function work2(){
//     money -5;
//     money +=Math.round(tools.rustyScissors*24);
//     console.log(money);
//     document.getElementById('profit').innerHTML = `Total Money: $${money}`;
// }





