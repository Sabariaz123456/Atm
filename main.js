import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let totalBalance = "10000";
    console.log(`Your total balance is "${totalBalance}"`);
    let atmQuestion = await inquirer.prompt([
        {
            name: "acount type",
            message: "select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Saving Account",
            ]
        },
    ]);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash", "exit"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
