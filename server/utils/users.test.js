const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Ron',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Sam',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Dame',
            room: 'Node Course'
        }];
    });


    it('Should add new User', () => {
        var id = 3452435;
        var name = "Ron";
        var room = "123";
        var users = new Users();
        var user = users.addUser(id, name, room);
        expect(user).toEqual({id, name, room});
        expect(users.users).toEqual([{id, name, room}]);
    });

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Ron', 'Dame']);
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Sam']);
    });

    it('Should remove a user', () => {
        var user = users.removeUser('1');
        expect(user.name).toEqual('Ron');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var user = users.removeUser('5');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        var user = users.getUser('1');
        expect(user.id).toEqual('1');
    });

    it('Should not find user', () => {
        var user = users.getUser('5');
        expect(user).toBeFalsy();
    });

    // it('Should reject string with spaces', () => {
    //     var name = "         ";
    //     var room = "123";
    //     var paramStr = `name=${name}&room=${room}`;
    //     var messageResp = isRealString(name, room);
    //     expect(messageResp).toBe(false);
    // });

    // it('Should validate true that name and room are not blank', () => {
    //     var name = "Ron";
    //     var room = "123";
    //     var paramStr = `name=${name}&room=${room}`;
    //     var messageResp = isRealString(name, room);
    //     expect(messageResp).toBe(true);
    // });


});

