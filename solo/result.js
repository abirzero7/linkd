let score = 32;
let gpa;

switch(true){
    case score >=101 :
       gpa = "you give a wrong number";
       break;
    
    case score >=80 :
        gpa = "A+";
        break;
    
    case score >= 70:
        gpa = "A";
        break;
     case score >= 60:
        gpa = "A-";
        break;
     case score >= 50:
        gpa = "B";
        break;
    case score >= 40:
        gpa = "c";
        break;
     case score >= 33:
        gpa = "D";
        break;
     case score < 33:
        gpa = "F";
        break;
        


}
console.log(gpa)