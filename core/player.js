class Player
{
    constructor(player_obj)
    {
        this.raw = player_obj;
    }

    get_raw()
    {
        return this.raw;
    }
}

module.exports = Player;