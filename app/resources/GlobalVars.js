/**
 * Created by rbec5463 on 12/30/13.
 */
Ext.define('DockDoor.resources.GlobalVars', {
    singleton: true,

    config: {
        currentPlant: null,
        destPlant: null
    },

    constructor: function(config) {
        this.initConfig(config);
    }
})