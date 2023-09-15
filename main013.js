import inquirer from "inquirer";
const wordCount = (string) => {
    const word = string.trim().split(/\s+/g);
    console.log("Total Words In The Para Are: " + word.length);
};
const getInput = async () => {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "para",
            message: "Enter Your Para: "
        }
    ]);
    await wordCount(userInput.para);
};
await getInput();
