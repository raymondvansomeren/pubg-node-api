const axios = require('axios');

const Match = require('./match');

class Matches
{
    #config;

    constructor(config)
    {
        this.#config = config;

        this.headers = {
            'Accept': 'application/vnd.api+json',
        };
    }

    async get_match_by_id(match)
    {
        const response = await axios({
            method: 'GET',
            url: `${this.#config.api_url}/shards/${this.#config.default_shard}/${this.#config.routes.matches}/${match}`,
            headers: this.headers,
        })
            .catch((e) =>
            {
                console.log(match);
                if (e.response.status === 404)
                {
                    return undefined;
                }
                else
                {
                    return undefined;
                }
            });
        return new Match(response?.data?.data);
    }
}

module.exports = Matches;