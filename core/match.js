const Duration = require('duration');

class Match
{
    #config;
    // TODO hold the data in a nicer way
    constructor(match_obj, config)
    {
        this.#config = config;
        this.raw = match_obj;

        this.type = this.raw.data.type;
        this.id = this.raw.data.id;
        this.created_at = new Date(this.raw.data.attributes.createdAt);
        const created_at = new Date(this.created_at);
        const duration = this.created_at.valueOf() + this.raw.data.attributes.duration * 1000;
        this.duration = new Duration(created_at, new Date(duration));
        this.match_type = this.raw.data.attributes.matchType;
        this.gamemode = this.raw.data.attributes.gameMode;
        this.map_name = this.raw.data.attributes.mapName.replace('_', ' ');
        this.custom_match = this.raw.data.attributes.isCustomMatch;
        this.season_state = this.raw.data.attributes.seasonState;
        this.platform = this.raw.data.attributes.shardId;

        // TODO do something with assets
        // console.log(this.raw.data.relationships.assets);
        // console.log(this.raw.included.filter((a) => a.type === 'asset'));
        // TODO do something with rosters
        // console.log(this.raw.data.relationships.rosters);
        // console.log(this.raw.included.filter((a) => a.type === 'roster'));

        // TODO do something with participants
        // console.log(this.raw.included.filter((a) => a.type === 'roster')[0].relationships.participants);
        // console.log(this.raw.included.filter((a) => a.type === 'participant'));
    }

    get_raw()
    {
        return this.raw;
    }
}

module.exports = Match;