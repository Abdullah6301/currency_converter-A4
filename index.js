import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93476,
    GBP: 0.79832,
    INR: 83.4691,
    PKR: 277.86,
    AED: 3.67244,
};
async function main() {
    const answer = await inquirer.prompt([
        {
            name: 'from',
            message: "Enter the currency you want to convert from:",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AED'] // 'choices' should be lowercase
        },
        {
            name: 'to',
            message: "Enter the currency you want to convert to:",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'AED'] // 'choices' should be lowercase
        },
        {
            name: 'amount',
            message: "Enter the amount you want to convert:",
            type: 'number',
        }
    ]);
    const from = currency[answer.from];
    const to = currency[answer.to];
    const amount = answer.amount;
    const baseAmount = amount / from;
    const convertedAmount = baseAmount * to;
    console.log(`Converted amount: ${convertedAmount.toFixed(4)}`);
}
// Run the main function
main().catch(err => console.error(err));
