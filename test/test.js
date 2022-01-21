const pubg = require('../core/base');
const assert = require('assert');

// No token, because we won't need it for testing (right now)
const api = new pubg('');

describe('Status of API', function()
{
    it('Should return 200 if the API is online, all tests need the API to be online', function()
    {
        api.get_status()
            .then((response) =>
            {
                // console.log(response);
                assert.equal(response.status, 200);
            });
    });
});