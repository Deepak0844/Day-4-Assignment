//1.Square of a number
let num = 4;
console.log("square of a number:"+Math.pow(num,2));

//2.Swapping 2 numbers
let a = 10;
let b = 20;
a=a+b;   
b=a-b;  
a=a-b;
console.log("swapping 2 nums :"+" a = "+a+","+"b = "+b);

//3.Addition of 3 numbers
let num1 = 5;
let num2 = 5;
let num3 = 5;
console.log("addition of 3 num : "+parseInt(num1+num2+num3));

//4.Celsius to Fahrenheit conversion
let celsius = 34;
let Fahrenheit =(celsius*(1.8)+32);
console.log("Celsius to Fahrenheit:"+Fahrenheit);

//5.Meter to miles
let meter = 100;
let mile = (meter/1609.344);
console.log("meter to mile :"+mile.toFixed(3));

//6.Pounds to kg
let pound = 200;
let kg = (pound*0.45359237);
console.log("Pounds to kg:"+kg.toFixed(3)+" kg");

//7.Calculate Batting Average
let RunsScored =1617;
let TimesOut =42;
const average =RunsScored/TimesOut;
console.log("batting average: "+average);

//8.Calculate five test scores and print their average
let test1 =50;
let test2 =40;
let test3 =60;
let test4 =75;
let test5 =80;
let averageTestScores =(test1+test2+test3+test4+test5)/5;
console.log("averageTestScores: "+averageTestScores);

//9.Power of any number x ^ y.
let x = 2;
let y = 2;
let power = Math.pow(x,y);
console.log("power of num: "+power);

//10.Calculate Simple Interest
let P =100;
let R =2;
let T =2;
SI = P * R * T;
console.log("Simple Interest: "+SI);

//11.Calculate area of an equilateral triangle
let side = 3;
let area = (Math.sqrt(3)/4)*Math.pow(side,2);
console.log("area of an equilateral triangle: "+area.toFixed(2));

//12.Area Of Isosceles Triangle
let base = 5;
let height = 8;
let area1 = (base*height)/2;
console.log("Area Of Isosceles Triangle: "+area1);

//13.Volume Of Sphere
let radius = 3;
let PI =3.141592653589793238;
let volume = (4/3)*PI*Math.pow(radius,3);
console.log("Volume Of Sphere: "+volume.toFixed(2));

//14.Volume Of Prism
let length1 =9;
let width1 =4;
let height1 =5;
let volume1 =length1*width1*height1;
console.log("Volume Of Prism: "+volume1);

//15.Find area of a triangle
let base2 = 5;
let height2 = 8;
let area2 = (base*height)/2;
console.log("Area Of Triangle: "+area2);

//16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost = 1000;
let soldCost = 845;
const discount = (actualCost-soldCost)/actualCost*100;
console.log("Discount Of Product: "+discount+"%");

//17.Given their radius of a circle and find its diameter, circumference and area.
let radius2 = 5;
let pi = 3.141592653589793238;
let diameter = (radius2*2);
let circumference = (2*pi*radius2);
let area3 = pi*Math.pow(radius2,2)
console.log("diameter :"+diameter,",","circumference :"+circumference.toFixed(2),",","area :"+area3.toFixed(2))

//18.Given two numbers and perform all arithmetic operations
var number1 = 5;
var number2 = 2;
console.log("Addition: "+parseInt(number1+number2))
console.log("Subtraction: "+parseInt(number1-number2))
console.log('Multiplication: '+number1*number2)
console.log('Division: '+number1/number2)
console.log('modulus: '+number1%number2)

//19.Display the asterisk pattern as shown below(No loop needed)
console.log('*','*','*','*','*')
console.log('*','*','*','*','*')
console.log('*','*','*','*','*')
console.log('*','*','*','*','*')
console.log('*','*','*','*','*')

//20.Calculate electricity bill? For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
let wattsPerHour = 100
let wattsPerDay = wattsPerHour*24
let dailyUnits = (wattsPerDay/1000)
let monthlyUnits = dailyUnits*30
let totalEnergyBill = monthlyUnits*10
console.log(totalEnergyBill)

//21.Program To Calculate CGPA
let English = 9.1,Tamil = 8.5,Maths = 9.5,Science =9.6,SocialScience = 8.6    
let CGPA = (English+Tamil+Maths+Science+SocialScience)/(5)  
console.log(" CGPA is: "+CGPA);  


