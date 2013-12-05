Ext.define('DockDoor.store.Doors',{
    extend : 'Ext.data.Store',
    requires : ['DockDoor.model.Door'],

    config : {
        model : 'DockDoor.model.Door',
        autoLoad : false,
        proxy : {
            type : 'jsonp',
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            extraParams: {
                action : 'getDoors'
            },
            reader : {
                type : 'json',
                rootProperty : 'DOORS'
            }
        }
    }    
});