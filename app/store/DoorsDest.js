Ext.define('DockDoor.store.DoorsDest',{
    extend : 'Ext.data.Store',
    requires : ['DockDoor.model.DoorDest'],

    config : {
        model : 'DockDoor.model.DoorDest',
        autoLoad : false,
        proxy : {
            type : 'jsonp',
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            extraParams: {
                action : 'getDoorsDest'
            },
            reader : {
                type : 'json',
                rootProperty : 'DOORSDEST'
            }
        }
    }
});