const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('Should reject non-string values', () => {
        var name = 12333333;
        var room = "123";
        var paramStr = `name=${name}&room=${room}`;
        var messageResp = isRealString(name, room);
        expect(messageResp).toBe(false);
    });

    it('Should reject string with spaces', () => {
        var name = "         ";
        var room = "123";
        var paramStr = `name=${name}&room=${room}`;
        var messageResp = isRealString(name, room);
        expect(messageResp).toBe(false);
    });

    it('Should validate true that name and room are not blank', () => {
        var name = "Ron";
        var room = "123";
        var paramStr = `name=${name}&room=${room}`;
        var messageResp = isRealString(name, room);
        expect(messageResp).toBe(true);
    });


});

