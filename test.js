const pubg = require('./core/base');

// No token, because we won't need it for testing (right now)
const api = new pubg('');

api.get_status()
    .then((response) =>
    {
        console.log(response);
    });