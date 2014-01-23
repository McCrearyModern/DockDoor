Ext.define('DockDoor.view.tablet.DoorDestination', {
    extend: 'Ext.Container',
    xtype: 'doordestination',

    requires: [

    ],

    config: {
        layout: 'hbox',
        items: [{
            xtype: 'plants',
            itemId: 'plantsOnDest',
            flex: 1
       },{
            xtype: 'doorsdestlist',
            flex: 2
        }]
    }
});