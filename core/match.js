class Match
{
    // TODO hold the data in a nicer way
    constructor(player_obj)
    {
        this.raw = player_obj;
    }

    get_raw()
    {
        return this.raw;
    }
}

module.exports = Match;