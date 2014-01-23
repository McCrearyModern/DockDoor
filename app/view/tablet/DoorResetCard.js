Ext.define('DockDoor.view.tablet.DoorResetCard', {
    extend: 'Ext.Panel',
    xtype: 'doorresetcard',

    requires: [
        'DockDoor.view.tablet.DoorReset',
        'DockDoor.view.tablet.DoorDestination',
        'DockDoor.view.tablet.DoorsDestList'
    ],

    config: {
        modal: true,
        centered: true,
        padding: 8,
        height: Ext.Viewport.getWindowHeight() * 0.50,
        width: Ext.Viewport.getWindowWidth() * 0.50,
        hideOnMaskTap: true,
        layout: 'card',
        defaults: {
            margin: 8
        },
        items: [{
            xtype: 'doorreset'
        },{
            xtype: 'doordestination'
        }]
    }
});