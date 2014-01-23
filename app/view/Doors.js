Ext.define('DockDoor.view.Doors', {
    extend: 'Ext.dataview.List',
    xtype: 'doors',
    requires: [

    ],

    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Doors',
            items: [{
                text: 'Refresh',
                align: 'right',
                iconCls: 'refresh',
                itemId: 'refreshDoors'
            }]
        }],
        itemTpl: [
            '<div class="{CLASS}">',
            '<div class="info">',
                '<span class="info"> <b>{DOORDESC}</b> </span> <br> ',
                '<b>Trailer: </b> {TRAILER} <br>',
                '<b>Load#:</b> {LOAD} <br>',
                '<b>Door Destination:</b> {DOORDEST} <br>',
            '</div>',
            '</div>'

        ],
        store: 'Doors',
        striped: true,
        emptyText: 'Select a plant to view available doors.'

    }
});
