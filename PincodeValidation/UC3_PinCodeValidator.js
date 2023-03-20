let arguments = process.argv;
arguments.splice(0, 2);

// UC 3
{
    let pinCodeRegex = RegExp('^[0-9]{6}$');
    arguments.forEach(element => {
        console.log(element + " :", pinCodeRegex.test(element));
    });
}