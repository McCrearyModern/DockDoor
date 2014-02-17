Ext.define('DockDoor.store.Yards',{
    extend : 'Ext.data.Store',
    requires : ['DockDoor.model.Yard'],

    config : {
        model : 'DockDoor.model.Yard',
        autoLoad : true,
        proxy : {
            type : 'jsonp',
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            extraParams: {
                action : 'getYard'
            },
            reader : {
                type : 'json',
                rootProperty : 'YARD'
            }
        }
    }
});