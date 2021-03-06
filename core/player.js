const Matches = require('./matches');

class Player
{
    #matches_by_ids;
    #config;
    #initialized = false;

    // TODO hold the data in a nicer way
    constructor(player_obj, config)
    {
        this.#config = config;

        this.raw = player_obj;

        this.#matches_by_ids = this.raw?.data?.relationships?.matches?.data;

        this.type = this.raw.data.type;
        this.id = this.raw.data.id;
        this.name = this.raw.data.attributes.name;

        this.refresh_matches();

        this.matches
            .then((matches) =>
            {
                this.matches = matches;
            });
    }

    get_raw()
    {
        return this.raw;
    }

    async refresh_matches()
    {
        // TODO request if there are any new matches
        if (this.#initialized)
        {
            // Request the player for their new matches
        }
        else
        {
            this.#initialized = true;
        }

        const matches_class = new Matches(this.#config);

        const promises = [];

        // TODO limit the amount of matches retrieved (maybe to 10 or something)
        for (let i = 0; i < this.#matches_by_ids?.length; i++)
        {
            // TODO make sure the order is right
            // promises.push({ index: i, match: matches_class.get_match_by_id(this.#matches_by_ids[i].id) });
            promises.push(matches_class.get_match_by_id(this.#matches_by_ids[i].id));
        }

        this.matches = Promise.all(promises);
    }
}

module.exports = Player;