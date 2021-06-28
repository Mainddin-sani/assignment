// kilometerToMeter();
// budgetCalculator();
// hotelCost();
// megaFriend();


/*   kilometerToMeter  */ 
function kilometerToMeter(kilometer) {
    var meters = kilometer * 1000;
    return meters;
}
var meterResult = kilometerToMeter(2);
console.log(meterResult);

/*   budgetCalculator  */
function budgetCalculator(clock, phone, laptop) {
    var totalClock = clock * 50;
    var totalPhone = phone * 100;
    var totallaptop = laptop * 500;
    var totalbudget = totalClock + totalPhone + totallaptop;
    return totalbudget;
}
var budgeOutput = budgetCalculator(5, 2, 2);
console.log(budgeOutput);

/*   hotelCost  */

function hotelCost(days) {
    var totalDays = 0;
    if (days <= 10) {
        totalDays = days * 100;
    }
    else if (days <= 20) {
        var firstTurn = 10 * 100;
        var remainingDays = days - 10;
        var secoundTurn = remainingDays * 80;
        totalDays = firstTurn + secoundTurn;
    }
    else {
        var firstTurn = 10 * 100;
        var secoundTurn = 10 * 80;
        var remainingDays = days - 20;
        var thirdTurn = remainingDays * 50;
        totalDays = firstTurn + secoundTurn + thirdTurn;
    }
    return totalDays;
}
console.log(hotelCost(22));


/*   megaFriend  */

function megaFriend(friends) {
    var maxName = 0;
    var names = "";
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (maxName < element.length) {
            names = element;
            maxName = element.length;
        }
    }
    return names;
}
var finalMegaFriend = megaFriend(['sani', 'mainuddin']);
console.log(finalMegaFriend);




