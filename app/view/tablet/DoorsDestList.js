Ext.define('DockDoor.view.tablet.DoorsDestList', {
    extend: 'Ext.dataview.List',
    xtype: 'doorsdestlist',
    requires: [

    ],

    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Select Door . . .'
        }],
        itemTpl: [
            ' {DOORDESC}'
        ],
        store: 'DoorsDest',
        striped: true,
        emptyText: 'Select a plant to view available doors.'
    }
});
