//Q=1
document.write(`<h1>Question=1</h1>`)
var date = new Date()
document.write(`current date is : ${date}`)

//Q=2
document.write(`<h1>Question=2</h1>`)
var date = new Date().getMonth()
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.write(`current month : ${months[date]}`)

//Q=3
document.write(`<h1>Question=3 on alert</h1>`)
var days = ['sun','mon','tues','wed','thurs','fri','sat'];
var date = new Date().getDay();
alert(`today is ${days[date]}`)

//Q=4
document.write(`<h1>Question=4</h1>`)
var days = ['sun','mon','tues','wed','thurs','fri','sat'];
var date = new Date().getDay();
if(days[date] === 'sun' || days[date] === 'sat'){
    document.write(`Its Fun Day`)
}
else{
    document.write(`Its working day`)
}

//Q=5
document.write(`<h1>Question=5</h1>`)
var date  = new Date().getDate();
date = Number(date);
if(date < 16){
    document.write(`first fifteen days of the month`)
}
else{
    document.write(`last days of the month`)
}

//Q=6
document.write(`<h1>Question=6</h1>`)
var date = new Date();
    document.write(`
        Current Date is : ${date}<br>
        Elapsed Milisecond from January 1, 1970 is : ${date.getTime()}<br>
        Elpased Minutes from January 1, 1970 is : ${date.getTime()/(1000*60)}`)
//Q=7
document.write(`<h1>Question=7</h1>`)
var date = new Date().getHours();
    if(date < 12){
            document.write(`It's AM`)
    }
    else{
        document.write(`It's PM`)
    }

    //Q=8
document.write(`<h1>Question=8</h1>`)
    var laterDate = new Date('December 31, 2020');
    document.write(`later date : ${laterDate}`)

    //Q=9
document.write(`<h1>Question=9</h1>`)
    var date = new Date('June 18, 2015').getTime();
    var newDate = new Date('february 28, 2024').getTime();
    var pastDays = (newDate - date)/(1000*60*60*24);
    document.write(`
        <p>${Math.round(pastDays)} days have Passed since <br>
        1<sup>st</sup></b> Ramzan of 2015</p>`)
console.log(date)
console.log(newDate)
console.log(pastDays)

//Q=10
document.write(`<h1>Question=10</h1>`)
var currentDate = new Date('December 5, 2015').getTime();
var pastDate = new Date('January 1, 2015').getTime();
var durationInSeconds = (currentDate - pastDate)/(1000);
    document.write(`
        <p>On Reference Date : ${new Date('December 5, 2015 22:50:16')}</p>
        <p>${durationInSeconds} Seconds had passed since begining of 2015</p>`)

//Q=11
document.write(`<h1>Question=11</h1>`)
var currentDate = new Date();
    document.write(`
        <p>Current Date : ${currentDate}<br>`)
    currentDate.setHours(currentDate.getHours() - 1);
    document.write(`1 Hours ago, It was ${currentDate}`)

//Q=12
document.write(`<h1>Question=12</h1>`)
var currentDate = new Date();
    document.write(`Current Date : ${currentDate}<br>`)
    currentDate.setFullYear(currentDate.getFullYear() - 100);
    document.write(`100 Years back, It was ${currentDate}`)

//Q=13
document.write(`<h1>Question=13</h1>`)
var age = +prompt("Enter Your Age.")
var date = (new Date().getFullYear()) - age;
    document.write(`
        <p>Your Age Is ${age}</p>
        <p>Your Birth Year is ${date}</p>`)

//Q=14
document.write(`<h1>Question=14</h1>`)
var customerName = prompt('Enter Your Name');
    var monthArray = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentMonth = monthArray[new Date().getMonth()];
    var numberOfUnit = 224;
    var chargePerUnit = 55;
    var netAmountPayable = numberOfUnit * chargePerUnit;
    var latePayment = 560;
    var grossAmount = netAmountPayable + latePayment;
    document.write(`
        Customer Name : ${customerName}<br>
        Month : ${currentMonth}<br>
        Number Of Units : ${numberOfUnit}<br>
        Charge per Unit : ${chargePerUnit}<br>
        <br />
        Net Amount Payable (within Due Date) : ${netAmountPayable}<br>
        Late Payment surcharge : ${latePayment}<br>
        Gross Amount payable (after Due Date) : ${grossAmount}<br>`)
