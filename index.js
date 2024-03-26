function calculateMoney(ticketSale) {

    if(typeof ticketSale !== "number"){
        return "Invalid! Please enter a number.";
    }
    if( ticketSale < 0){
        return "Invalid! Please enter a number greater than zero.";
    }

    const perTicketPrice = 120;
    const securityGuardSalary = 500;
    const perStaffLunchCost = 50;

    const result = ( ticketSale * perTicketPrice) - ( securityGuardSalary + (8 * perStaffLunchCost) );

    return result;
    }










function checkName(name) {
    if(typeof name !== "string"){
        return "Invalid";
    }

    const lastLetters = ["a", "y", "i" , "e" , "o" , "u", "w"];
    const lastChar = name[name.length-1].toLowerCase();

    for (const letter of lastLetters) {
        if (lastChar === letter) {
            return "Good Name";
        }
    }
    return "Bad Name";
    }











function deleteInvalids(array){
    let newArray = [];
    if(Array.isArray(array)){
        for(const element of array){
            if(typeof element === 'number' && !isNaN(element) ){
                newArray.push(element);
            }
        }
        return newArray;
    }
    return "Invalid Array! Please pass an array.";
}








function password(obj) {

    const firstLetterCap = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const yearLength = obj.birthYear.toString().length;

   if(yearLength !== 4){
        return "Invalid";
    }else if(Object.keys(obj).length !== 3){
        return "Invalid";
    } else{
        const result = firstLetterCap + "#" + obj.name + "@" + obj.birthYear;
        return result; 
    }
    }








function monthlySavings(arr, livingCost) {

    if(!Array.isArray(arr)){
        return "Invalid Input";
    }
    if(typeof livingCost !== "number"){
        return "Invalid Input";
    }

    let earnings = 0;
    for (let payment of arr) {        
        if(payment < 3000){
            earnings += payment; 
            continue;
        }
         if(payment >= 3000){
            earnings += payment - (payment * 20 / 100);
            continue;
        } 
        return earnings;
    }

    const totalSavings = earnings - livingCost
    if(totalSavings < 0){
        return "earn more";
    }
    
    return totalSavings;    
    }
    