Ext.define('DockDoor.view.Yard', {
    extend: 'Ext.dataview.List',
    xtype: 'yard',
    requires: [

    ],

    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Yard',
            items: [{
                text: 'Add',
                align: 'left',
                iconCls: 'add',
                itemId: 'addYard'
            },{
                text: 'Refresh',
                align: 'right',
                iconCls: 'refresh',
                itemId: 'refreshYard'
            }]
        }],
        itemTpl: [
            '<b>Trailer: </b> {YARDTRLR} <b>Load#:</b> {YARDLOAD} <br>',
            '<b>Destination: </b> {YARDDEST} <br>',
            '{YARDDATE} {YARDTIME}'
        ],
        store: 'Yards',
        striped: true,
        emptyText: 'No Trailers in Yard.'

    }
});
