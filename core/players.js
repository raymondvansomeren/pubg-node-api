const axios = require('axios');

const Player = require('./player');

class Players
{
    #config;

    constructor(config)
    {
        this.#config = config;
        this.#config.filters = {
            id_filter: '[playerIds]',
            name_filter: '[playerNames]',
        };
        this.headers = {
            'Authorization': `Bearer ${this.#config.token}`,
            'Accept': 'application/vnd.api+json',
        };
    }

    async get_player_by_name(player)
    {
        let rtn = {};
        await axios({
            method: 'GET',
            url: `${this.#config.api_url}/shards/${this.#config.default_shard}/${this.#config.routes.players}?filter${this.#config.filters.name_filter}=${player}`,
            headers: this.headers,
        })
            .then((r) =>
            {
                rtn = new Player(r?.data, this.#config);
            })
            .catch((e) =>
            {
                throw e;
            });
        return rtn;
    }

    async get_player_by_id(player)
    {
        let rtn = {};
        await axios({
            method: 'GET',
            url: `${this.#config.api_url}/shards/${this.#config.default_shard}/${this.#config.routes.players}/${player}`,
            headers: this.headers,
        })
            .then((r) =>
            {
                rtn = new Player(r?.data, this.#config);
            })
            .catch((e) =>
            {
                throw e;
            });
        return rtn;
    }
}

module.exports = Players;