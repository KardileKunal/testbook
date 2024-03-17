marks=100;
score = marks;

if (score >= 90 && score <= 100) {
    console.log("Grade is A");
}
else if(score >= 80 && score <= 90) {
    console.log("Grade is B");
}
else if(score >= 70 && score <= 80) {
    console.log("Grade is C");
}
else if(score >= 60 && score <= 70) {
    console.log("Grade is D");
}
else if(score < 60 && score >= 0 ){
    console.log("Grade is F");
}
else{
    console.log("Enter valid Marks");
}