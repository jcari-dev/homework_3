let money = 0;
let scissorsCost = 5;
let old_timey_lawnmowerCost = 25;
const tools = {
    teeth: 0.0416,
    rustyScissors: 0.2083,
    old_timey_lawnmower: 1.0416
}

function buyS() {
    let buySc = confirm(`Are you use you want to buy scissors, for $5? You have $${money} left.`);
    if (buySc == true) {
        money -= scissorsCost;
        document.getElementById('profit').innerHTML = `Total Money: $${money}`;
        confirm(`You have ${money} left.`)
        document.getElementById('sciBtn').style.visibility = "hidden"; // I have 
 //    tried so many things to try to properly disable that button, sadly this has been the best result
        document.getElementById('workBtn1').style.visibility = "hidden";
        document.getElementById('workBtn2').disabled = false;
    } else {
        confirm('Come back whenever!');
    }
}

function buyOld() {
    let buyOl = confirm(`Are you use you want to buy Old-timey Lawnmower, for $25? You have $${money} left.`);
    if (buyOl == true) {
        money -= old_timey_lawnmowerCost;
        document.getElementById('profit').innerHTML = `Total Money: $${money}`;
        confirm(`You have ${money} left.`)
        document.getElementById('sciBtn2').style.visibility = "hidden"; // I have 
 //    tried so many things to try to properly disable that button, sadly this has been the best result
        document.getElementById('workBtn2').style.visibility = "hidden";
        document.getElementById('workBtn2').disabled = true;
        document.getElementById('workBtn3').disabled = false;
    } else {
        confirm('Come back whenever!');
    }
}



function disableBtn() {
    if (money >= 5) {
        document.getElementById('sciBtn').disabled = false;
    } else {
        document.getElementById('sciBtn').disabled = true;
    }
}


function disableBtn2() {
    if (money >= 25) {
        document.getElementById('sciBtn2').disabled = false;
    } else {
        document.getElementById('sciBtn2').disabled = true;
    }
}

function work() {
    money += Math.round(tools.teeth * 24);
    console.log(money);
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
    disableBtn();


}

function work2() {
    money += Math.round(tools.rustyScissors * 24);
    console.log(money);
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
    disableBtn2();


}



function work3() {
    money += Math.round(tools.old_timey_lawnmower * 24);
    console.log(money);
    document.getElementById('profit').innerHTML = `Total Money: $${money}`;
    disableBtn();


}




// function work2(){
//     money -5;
//     money +=Math.round(tools.rustyScissors*24);
//     console.log(money);
//     document.getElementById('profit').innerHTML = `Total Money: $${money}`;
// }