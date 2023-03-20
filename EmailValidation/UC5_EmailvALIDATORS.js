let arguments = process.argv;
arguments.splice(0,2);

// UC 5
{
    let emailRegex = RegExp('^[a-z]+([\.\+\_\-][a-z]+)?@[a-z]+.[a-z]+(\.[a-z]{2})?$');
    arguments.forEach(element => {
        console.log(element + " :", emailRegex.test(element));
    });
}