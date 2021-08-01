var gotJob = false;
var moneySaved = 50000;
var hasFlat = true;

// if(gotJob == true && moneySaved > 200000){
//     console.log('Cholo biye kore feli');
// }
// else{
//     console.log('Tor kopale biye nai!!!');
// }

// if(gotJob == true && moneySaved > 200000 && hasFlat == true){
//     console.log('Cholo biye kore feli');
// }
// else{
//     console.log('Tor kopale biye nai!!!');
// }

// if(gotJob == true || moneySaved > 200000 || hasFlat == true){
//     console.log('Cholo biye kore feli');
// }
// else{
//     console.log('Tor kopale biye nai!!!');
// }

if((gotJob == true && moneySaved > 200000) || hasFlat == true){
    console.log('Cholo biye kore feli');
}
else{
    console.log('Tor kopale biye nai!!!');
}