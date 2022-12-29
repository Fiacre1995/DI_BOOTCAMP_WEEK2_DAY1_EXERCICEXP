/* Exercice 1 */
FavoriteFood = "Chocolate";
FavoriteMeal = "Diner";
console.log("I eat " + FavoriteFood + " at every " + FavoriteMeal);

/*Exercice 2*/
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);
let myWatchedSeriesLength =  myWatchedSeries.length;
console.log(myWatchedSeriesLength);
myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);
console.log("I watch " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence );

myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);
myWatchedSeries.push("Suite");
console.log(myWatchedSeries);
myWatchedSeries.splice(0,0," Monk");
console.log(myWatchedSeries);
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
console.log(myWatchedSeries[1].substring(2,3));


/*Exercice 3*/ 
Temperature = 37;
Conversion = ((Temperature/5)*9)+32;
Temperature = Conversion;
console.log(Temperature);

/*Exercice 4*/
let c;
let a = 34;
let b = 21;
console.log(a+b)
//Prediction: 55
//Actual: 55
a = 2;
console.log(a+b)
//Prediction: 23
//Actual: 23
//c: undefined
console.log(3+4+'5');
//Prediction: 345
//Actual: 75

/*Exercice 5*/
typeof(15)
// Prediction:Number
// Actual:Number
typeof(5.5)
// Prediction:Number
// Actual:Number
typeof(NaN)
// Prediction:String
// Actual:Number
typeof("hello")
// Prediction:String
// Actual:String
typeof(true)
// Prediction:Boolean
// Actual:Boolean
typeof(1 != 2)
// Prediction:boolean
// Actual:boolean
"hamburger" + "s"
// Prediction:String
// Actual:String
"hamburgers" - "s"
// Prediction:boolean
// Actual:number
"1" + "3"
// Prediction:String
// Actual: String
"1" - "3"
// Prediction:number
// Actual: number
"johnny" + 5
// Prediction:String
// Actual:String
"johnny" - 5
// Prediction:String
// Actual:number
99 * "hello"
// Prediction:String
// Actual:number
1 != 1
// Prediction:boolean
// Actual:boolean
1 == "1"
// Prediction:boolean
// Actual:boolean
1 === "1"
// Prediction:boolean
// Actual:boolean

/*Exercice 6*/
5 + "34"
// Prediction:534
// Actual:534
5 - "4"
// Prediction:False
// Actual: 1
10 % 5
// Prediction:0
// Actual:0
5 % 10
// Prediction:0
// Actual:0
"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript
" " + " "
// Prediction:
// Actual:
" " + 0
// Prediction:0
// Actual:0
true + true
// Prediction:true
// Actual:0
true + false
// Prediction:
// Actual:1
false + true
// Prediction:
// Actual:1
false - true
// Prediction:
// Actual:-1
!true
// Prediction:false
// Actual:false
3 - 4
// Prediction:-1
// Actual:
"Bob" - "bill"
// Prediction:flase
// Actual:NaN
