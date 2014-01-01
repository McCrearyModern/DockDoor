Ext.define('DockDoor.profile.Phone', {
    extend: 'Ext.app.Profile',
    requires: [
        'DockDoor.view.phone.Main',
        'DockDoor.controller.phone.Phone'
    ],

    config: {
        name: 'Phone',
        views: ['Main'],
        controllers: ['Phone']
    },

    isActive: function() {
        return Ext.os.is('Phone');
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('DockDoor.view.phone.Main'));
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    }

});