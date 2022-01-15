const axios = require('axios');

const Player = require('./player');

// const Matches = require('./matches');

class Players
{
    constructor(config)
    {
        this.config = config;
        this.config.filters = {
            id_filter: '[playerIds]',
            name_filter: '[playerNames]',
        };
    }

    async get_player_by_name(player)
    {
        // console.log(this.config.request_headers_);
        const response = await axios({
            method: 'GET',
            url: `${this.config.api_url}/shards/${this.config.default_shard}/${this.config.routes.players}?filter${this.config.filters.name_filter}=${player}`,
            headers: this.config.request_headers,
        });
        // console.log(response.data.data[0]);
        return new Player(response?.data?.data[0]);
    }

    async get_player_by_id(player)
    {
        const response = await axios({
            method: 'GET',
            url: `${this.config.api_url}/shards/${this.config.default_shard}/${this.config.routes.players}/${player}`,
            headers: this.config.request_headers,
        });
        // console.log(response.data.data);
        return new Player(response?.data?.data);
    }
}

module.exports = Players;