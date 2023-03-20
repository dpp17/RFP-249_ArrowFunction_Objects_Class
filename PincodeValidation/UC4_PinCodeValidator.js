let arguments = process.argv;
arguments.splice(0, 2);


// UC 4
let pinCodeRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$');
arguments.forEach(element => {
    console.log(element + " :", pinCodeRegex.test(element));
});