// How do class work?
// Classes basics
//
//
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription() {
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// var me = new Person('Ron', 25);
// var description = me.getUserDescription();

// We will create the following:
// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        // Return user that was removed
        var user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser(id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList(room) {
        var user = this.users.filter((user) => user.room === room);
        var namesArray = user.map((user) => user.name)
        return namesArray;
    }

}

module.exports = { Users };