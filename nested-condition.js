var danishPrice = 50;
var butterBunPrice = 25;
var toastPrice = 10;
var myBudget = 100;
var packedWell = false;

// if(danishPrice < myBudget){
//     console.log('Danish Khaye Danish Hoye Jabo');
// }
// else if(butterBunPrice < myBudget){
//     console.log('Tea with Butter Bun');
// }
// else if(toastPrice < myBudget){
//     console.log('Tea with Toast Bisquit');
// }
// else{
//     console.log('Dhur! Shudhu Cha e Khabo');
// }
if(danishPrice < myBudget){
    if(packedWell == true){
        console.log("Tea With Danish");
    }
    else{
        console.log('Dhur! Khola Danish Khamu na');
    }
}
else{
    console.log('Dhur! Khola Danish Khamu na');
}