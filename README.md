[![Apache 2.0 license](https://img.shields.io/github/license/raymondvansomeren/pubg-node-api?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0) [![Jenkins build](https://jenkins.satangaming.nl:8443/job/pubg-node-api/badge/icon?style=flat-square)](https://jenkins.satangaming.nl:8443/job/pubg-node-api/) [![NPM version](https://img.shields.io/npm/v/pubg-node-api?style=flat-square)](https://www.npmjs.com/package/pubg-node-api) [![NPM downloads](https://img.shields.io/npm/dm/pubg-node-api?style=flat-square)](https://www.npmjs.com/package/pubg-node-api) [![Last commit](https://img.shields.io/github/last-commit/raymondvansomeren/pubg-node-api?style=flat-square)](https://github.com/raymondvansomeren/pubg-node-api) [![Languages](https://img.shields.io/github/languages/count/raymondvansomeren/pubg-node-api?style=flat-square)](https://github.com/raymondvansomeren/pubg-node-api)

Pubg-node-api is a package that helps with interacting with the PUBG api.

## Install
```
$ npm install pubg-node-api
```

## A working example
```js
const pubg = require('pubg-node-api');

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
                console.log(matches);   // Or log the whole player as it's now filled with fetched matches
                // Each match has a duration of type Duration: https://www.npmjs.com/package/duration
                console.log(matches[0].duration.toString('H: %Hs m: %M'));
            });
    })
    // Will throw an error if there was a problem
    // No/bad token (401)
    // This includes no player found (404)
    // Too many requests (rate limited) (415)
    .catch((e) =>
    {
        console.error('Error code:', e);
    });

const pubg_data2 = {};

// OR
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
                console.log(matches);   // Or log the whole player as it's now filled with fetched matches
                // Each match has a duration of type Duration: https://www.npmjs.com/package/duration
                console.log(matches[0].duration.toString('H: %Hs m: %M'));
            });
    })
    // Will throw an error if there was a problem
    // No/bad token (401)
    // This includes no player found (404)
    // Too many requests (rate limited) (415)
    .catch((e) =>
    {
        console.error('Error code:', e);
    });
```

## Documentation
Coming soon 🔜