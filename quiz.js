import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "firstQuestion",
        choices: ["cricket", "basketball", "football", "hockey"],
        message: "Which is national sport of Pakistan"
    },
    {
        type: "list",
        name: "secondQuestion",
        choices: ["Karachi", "Lahore", "Queta", "Islamabad"],
        message: "Which is largest city of Pakistan"
    },
    {
        type: "list",
        name: "thirdQuestion",
        choices: ["Rose", "Jasmine", "Sunflower", "Tulip"],
        message: "Which is national flower of Pakistan"
    },
]);
if (answer.firstQuestion) {
    let result = "hockey";
    let score = 0;
    if (answer.firstQuestion === result) {
        score = score + 5;
    }
    result = "Karachi";
    if (answer.secondQuestion === result) {
        score = score + 5;
    }
    result = "Jasmine";
    if (answer.thirdQuestion === result) {
        score = score + 5;
    }
    console.log("Your score is " + score + "/15 ");
}
