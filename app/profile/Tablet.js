Ext.define('DockDoor.profile.Tablet', {
    extend: 'Ext.app.Profile',
    requires: [
        'DockDoor.view.tablet.Main',
        'DockDoor.controller.tablet.Tablet'
    ],

    config: {
        name: 'Tablet',
        views: [
            'Main',
            'DoorResetCard',
            'DoorReset',
            'DoorDestination',
            'DoorsDestList'
        ],
        controllers: ['Tablet'],
        stores: [
        ]
    },

    isActive: function() {
        return Ext.os.is('Tablet') || Ext.os.is('Desktop');
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('DockDoor.view.tablet.Main'));
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    }

});