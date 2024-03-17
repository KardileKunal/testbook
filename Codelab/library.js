function dues(charge) {
        if (days < 7) {
            fee=0.50*days;
        }else if (charge == 7) {
            fee =1*days;
        }else if (charge > 7) {
            fee =2*days;
        }
        console.log("Charges are "+fee+" dollars")
}

const days= 34;

if (days < 7) {
    
    console.log(dues(days));
}
else if(days == 7){
    console.log(dues(days));
}
else if(days > 7){
    console.log(dues(days));
}