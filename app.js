let money = 0;
let scissorsCost = 5;
let old_timey_lawnmowerCost = 25;
let fancy_BP_LawnmowerCost = 250;
const tools = {
    teeth: 0.0416, // 1 a day
    rustyScissors: 0.2083, // 5 a day
    old_timey_lawnmower: 2.0833 // 50 a day
}

// functions to buy new items/way to cut more grass


function buyS() {
    let buySc = confirm(`Are you sure you want to buy a pair scissors, for $5? You have $${money} left.`);
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
    let buyOl = confirm(`Are you sure you want to buy an Old-timey Lawnmower, for $25? You have $${money} left.`);
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

function fancyBa() {
    let buyBp = confirm(`Are you sure you want to buy a Fancy Battery-Powered Lawnmower, for $250? You have $${money} left.`);
    if (buyBp == true) {
        money -= fancy_BP_LawnmowerCost;
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


// functions to disable buttons before purchase

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

function disableBtn3() {
    if (money >= 250) {
        document.getElementById('sciBtn3').disabled = false;
    } else {
        document.getElementById('sciBtn3').disabled = true;
    }
}
// functions of each button to generate profit
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
    disableBtn3();


}





// function work2(){
//     money -5;
//     money +=Math.round(tools.rustyScissors*24);
//     console.log(money);
//     document.getElementById('profit').innerHTML = `Total Money: $${money}`;
// }