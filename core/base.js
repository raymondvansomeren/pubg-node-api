const Player = require('./player');
const Players = require('./players');

class API
{
    constructor(token, options = {
        default_shard: 'steam',
    })
    {
        this.config = {};

        this.set_api_token(token);

        this.config.api_url = 'https://api.pubg.com';
        this.config.default_shard = options.default_shard || 'steam';
        this.config.routes = {
            matches: 'matches',
            players: 'players',
            samples: 'samples',
            status: 'status',
        };
    }

    // TODO add check to see if the token was correct
    set_api_token(token)
    {
        this.config.token = token;

        this.config.request_headers = {
            'Authorization': `Bearer ${this.config.token}`,
            'Accept': 'application/vnd.api+json',
        };

        this.players = new Players(this.config);
    }
}

module.exports = {
    API,
    Player,
};