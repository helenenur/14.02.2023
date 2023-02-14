let example1 = { };
let joldosh = { 
  name : "Joldosh" ,
   age : 22,
   isEmployed : false
  };

  let example2 = { };
  let severa = {
    name : "Severa",
    surname : "Sulaimanova",
    firstname : "Helene",
    lastname : "Heli",
    IsEmployed : true
  };

  // View, edit, add
  console.log(joldosh.name);
  joldosh.age = 23;
  joldosh.favouriteBooks = ["Harry Potter", "Harry Potter 2"];


  //View, edit, add4
  console.log(severa.firstname);
  severa.firstname = "hi";
  console.log(severa.firstname);


  // delete
  delete joldosh.favouriteBooks;

  // delete 
  delete severa.favouriteBooks;


