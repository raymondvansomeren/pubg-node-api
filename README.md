A working example:
```js
const pubg = require('./core/base');

const api = new pubg('token'); // Token being the one you got from the pubg api website: https://developer.pubg.com/

const pubg_data1 = {};

// Fetch user by their steam name
api.players.get_player_by_name('your-username')
    .then((player) =>
    {
        // Save the player object to use it later on
        pubg_data1.player = player;

        // Wait for the mathes of the player to be fetched
        pubg_data1.player.matches
            .then((matches) =>
            {
                console.log(matches); // Or log the whole player, since it is now filled with matches too
            });
    });

const pubg_data2 = {};

// Fetch user by their id (you can get this with get_player_by_name)
api.players.get_player_by_id('account.80da6a3b7dbfxxxxxxxxxaaed46ad418')
    .then((player) =>
    {
        // Save the player object to use it later on
        pubg_data2.player = player;

        // Wait for the mathes of the player to be fetched
        pubg_data2.player.matches
            .then((matches) =>
            {
                console.log(matches); // Or log the whole player, since it is now filled with matches too
            });
    });
```