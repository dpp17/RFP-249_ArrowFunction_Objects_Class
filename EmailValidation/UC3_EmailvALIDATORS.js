let arguments = process.argv;
arguments.splice(0,2);

// UC 3
{
    let emailRegex = RegExp('^[a-z]+@[a-z]+\\.[a-z]+');
    arguments.forEach(element => {
        console.log(element + " :", emailRegex.test(element));
    });
}