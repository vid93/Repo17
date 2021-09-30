const _ = require('lodash');

var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {
    var output = "";

    for(let i = 0; i < users.length; i++){
        output += users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender + "\n";
    }
    
    return output;

}

function findUser(lastName, gender){
    try{
        var user = _.find(users, {lastName: lastName, gender: gender});

        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;

        console.log(iFindUser);

        return iFindUser;


    }catch(error){
        console.log("Cannot read property 'firstName' of undefined");
        return "Cannot read property 'firstName' of undefined"
    }
}

getUsers();
findUser("smith", "female");

module.exports = findUser;