Ext.define('DockDoor.view.Doors', {
    extend: 'Ext.dataview.List',
    xtype: 'doors',
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

        // Adds pull down refresh function.
        /*plugins: [{
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Pull down to refresh Door Info.'
        }]*/

        /* plugins: [{
                type: 'pullrefresh',
                listeners: [{
                        fn: function(component, eOpts) {
                            component.addAfterListener('latestfetched', function (pullrefresh, record) {
                                pullrefresh.up().refresh();
                                pullrefresh.lastUpdated = new Date();
                                pullrefresh.updateView();
                            }, this);
                        },
                        event: 'initialize'
                    }]
            }] */
    }
});
