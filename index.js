// set time out function
// function sayHello(){
//     alert('Hello');
// }
// setTimeout(sayHello,5000);


// setinterval function


// function sayGM(){
//     alert("Good morning")

// }
// setInterval(sayGM,8000)



// You can also pass arguments along with the function, like this:

// function sayHello(message, person) {
//   alert( message + ', ' + person );
// }
// setTimeout(sayHello, 1000, "Hi", "Monica"); // Hi, Monica


// console.log("this is important")

// // the scenario is that  in online school management system student get enrolled separately and we have have to fetched stdudent list for attendance from the server


// const students=[
//     {name:"himanshu",subject:"python"},
//     {name:"Ujala",subject:"c"}
// ]

// jab tak enrollstudent 3000ms executed nahi ho jata tab tak callback function run nahi hoga

// function enrollStudents(student,callback){
//     setTimeout(function (){
//         students.push(student);
//         console.log("Student has been enrolled")
//         callback();
//     },3000);
// }


// function getStudents(){
//     setTimeout(function(){
//         let str=""
//         students.forEach(function(student){
//             str+=`<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML=str;
//         console.log("Student have been fetched")
//     },1000);
// }

// let newStudents=[{name:"Sunny",subject:"Python"},
//                {name:"tanu",subject:"maths"}];
//   newStudents.forEach(function(student){
//             enrollStudents(student, getStudents);
//             });




// this takes callback function as arguments
//  students.forEach()


//  very interestinf from akshay saini sir he has covered how callback function and closure 
// work with addeventlistener


// function attacheventlistener(){

// let count=0;
// document.getElementById("mybtn").addEventListener("click",function (){
//   console.log("clicked hua",++count)
// });
// }


// attacheventlistener();


// this is example of callback function 
// function call another function
// const cart=["shoes","pants","kurta"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });


const GITHUB_API="https://api.github.com/users/himanshu2009"

const user=fetch(GITHUB_API);

console.log(user);


// inside user  we get fetched data from the server 

user.then(function(data){
    console.log(data);
});

// inside  data we are getting result whether it is fulfilled or rejected 

// above code uses promises ,once the data is get from server js output it 

// promise chaining 

// Function to fetch the weather forecast for the day
function fetchWeather() {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        return data.weather[0].main;
      });
  }
  
  // Function to order the coffee beans from the supplier
  function orderBeans(weather) {
    return new Promise(function(resolve, reject) {
      if (weather === 'Rain' || weather === 'Thunderstorm') {
        reject('Bad weather, cannot order beans');
      } else {
        resolve('Order placed successfully');
      }
    });
  }
  
  // Chain the promises to fetch the weather and then order the coffee beans
  fetchWeather()
    .then(function(weather) {
      return orderBeans(weather);
    })
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log(error);
    });


    // Explanantion

// Let's say you're a coffee shop owner, and you want to create an application that fetches the weather forecast 
// for the day and then orders the required amount 
// of coffee beans from your supplier based on the weather.

// To achieve this, you can use a series of promises to chain the asynchronous tasks. 
// In this example, the fetchWeather() function fetches the weather forecast for the day 
// using the OpenWeatherMap API, and returns a Promise that resolves with the weather condition 
// (e.g., 'Rain', 'Clear', etc.).

// The orderBeans() function takes the weather condition as an input, and returns a new Promise
//  that either resolves with a success message (if the weather is good), or rejects with an error
//   message (if the weather is bad).

// The promises are then chained together using the .then() method. The first .then() callback
//  function takes the weather condition returned by fetchWeather() as an input, and passes it to the orderBeans() function. 
//  The second .then() callback function logs the success message returned by orderBeans() to the console. The .catch() method 
//  is used to handle any errors that occur during the promise chain.

// When you run this code, it fetches the weather forecast for London from the OpenWeatherMap API,
//  checks if the weather is good (i.e., not rainy or stormy), and if it is, logs a success message to the 
//  console indicating that the coffee beans have been ordered successfully. If the weather is bad, it logs an error message 
//  indicating that the order could not be placed.
  














//  promises concept








// fetch api concept

// get request to api
// we are using fake fetch api to retrive data from the server bt get call 
// async function utility(){

//     let content= await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output= await content.json();
//     console.log(output);

// }
// utility();

// post request to api
// async function helper(){
// let options= {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'himanshu',
//     body: 'bar',
//     userId: 1000,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
    
//   },
// };


// let content= await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let response=content.json();

// return response;

// }

// async function utility(){
//     let ans=helper();
//     console.log(ans);
// }
// utility();




// closure concept 
//  var name="firefox"//this reference is used when there is no name varible inside outer function
// function init() {
//   // var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();










// async



// await















