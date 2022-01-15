const Matches = require('./matches');
const Players = require('./players');

class API
{
    #config;

    constructor(token, options = {
        default_shard: 'steam',
    })
    {
        this.#config = {};

        this.set_api_token(token);

        this.#config.api_url = 'https://api.pubg.com';
        this.#config.default_shard = options.default_shard || 'steam';
        this.#config.routes = {
            matches: 'matches',
            players: 'players',
            samples: 'samples',
            status: 'status',
        };
    }

    // TODO add check to see if the token was correct
    set_api_token(token)
    {
        this.#config.token = token;

        this.players = new Players(this.#config);
        this.matches = new Matches(this.#config);
    }
}

module.exports = API;