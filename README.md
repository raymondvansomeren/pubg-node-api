A working example:
```js
const pubg = require('./core/base');

const api = new pubg.API('token'); // Token being the one you got from the pubg api website: https://developer.pubg.com/

api.players.get_player_by_name('your-username')
    .then((player) =>
    {
        console.log(player);
    });

api.players.get_player_by_id('account.80da6a3b7dbfxxxxxxxxxaaed46ad418')
    .then((player) =>
    {
        console.log(player);
    });
```