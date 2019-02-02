var expect = require('expect');
var { generateMessage } = require('./message');

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
