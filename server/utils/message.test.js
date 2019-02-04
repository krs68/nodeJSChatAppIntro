var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {

    it('Should generate correct message object', () => {
        var from = "Ron";
        var text = "Hello World";
        var messageResp = generateMessage(from, text);
        expect(messageResp.from).toBe(from);
        expect(messageResp.text).toBe(text);
        // or you can write above two lines as:
        // --> not working --> expect(messageResp).toInclude({from, text});
        // --> not working --> expect(messageResp.createdAt).toBeA("number");
        // newer versions have different commands, need to refer to last lecture
    });
});

describe('generateLocationMessage', () => {

    it('Should generate URL message object', () => {
        var coords = {latitude: '111111111111', longitude: '2222222222222222' };
        var url = `https://www.google.com/maps/search/?api=1&query=${coords.latitude},${coords.longitude}`;
        var messageResp = generateLocationMessage('Admin', coords.latitude, coords.longitude);
        console.log('--------->', messageResp);
        expect(messageResp.url).toBe(url);
        // or you can write above two lines as:
        // --> not working --> expect(messageResp).toInclude({from, text});
        // --> not working --> expect(messageResp.createdAt).toBeA("number");
        // newer versions have different commands, need to refer to last lecture
    });
});
