// console.log("Before");
// getResult((arr)=>console.log(arr,"Nothing"));
// // console.log(result);
// console.log("After");

function getResult(callback) {
  setTimeout(() => {
    console.log("Callback");
    callback("Hello From callback");
  }, 2000);
}

function getFullName(ques,fullName){
    fullName(ques+ "Awais Shams")
}

getFullName("What is your Full Name",(res)=>console.log(res))

// getCustomer(1).then(cus=>{
//     console.log(cus)
//     getTopMovies().then(arr=>{
//         console.log(arr)
//         sendEmail(cus.email,arr).then(pri=>console.log(pri))
//     })
// });


// function getCustomer(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: "Mosh Hamedani",
//         isGold: true,
//         email: "email",
//       });
//     }, 4000);
//   });
// }

// function getTopMovies() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["movie1", "movie2"]);
//     }, 4000);
//   });
// }

// function sendEmail(email, movies) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 4000);
//   });
// }

// //   * Refactoring the code by replacing the callback hell implementation

// function callCustomer(customer) {
//   console.log("Customer: ", customer);
//   if (customer.isGold) {
//     getTopMovies(sendEmails);
//   }
// }

// function sendEmails(movies, email) {
//   console.log("Top movies: ", movies);
//   sendEmail(email, movies, displayMovies);
// }

// function displayMovies() {
//   console.log("Email Sent");
// }
