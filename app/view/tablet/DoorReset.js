Ext.define('DockDoor.view.tablet.DoorReset', {
    extend: 'Ext.Container',
    xtype: 'doorreset',

    config: {
        padding: 8,
        currentDoor: {},    // object to hold the current door info.
        layout: 'hbox',
        defaults: {
            margin: 8
        },
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Door Reset',
            layout: {
                pack: 'right'
            }
        },{
            xtype: 'button',
            text: 'Clear Door',
            flex: 1,
            itemId: 'clearDoor'
        },{
            xtype: 'button',
            text: 'Move to Door',
            flex: 1,
            itemId: 'move2NewDoor'
        },{
            xtype: 'button',
            text: 'Move To Daily',
            flex: 1,
            itemId: 'move2Daily'
        }]
    }
});