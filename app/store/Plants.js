Ext.define('DockDoor.store.Plants',{
    extend : 'Ext.data.Store',
    requires : ['DockDoor.model.Plant'],

    config : {
        model : 'DockDoor.model.Plant',
        autoLoad : true,

        proxy : {
            type : 'jsonp',
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            extraParams: {
                action : 'getPlants'
            },
            reader : {
                type : 'json',
                rootProperty : 'PLANTS'
            }
        }
    }    
});