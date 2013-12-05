Ext.define('DockDoor.view.Doors', {
    extend: 'Ext.dataview.List',
    xtype: 'doors',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Dock Doors'
        }],
        title: 'Doors',
        itemTpl: [
            '<div class="info">',
                '<span class="door">{DOORDESC} </span> <br> ',
                '<b>Trailer: </b> {TRAILER} <br>',
                '<b>Door Destination:</b> {DOORDEST} <br>',
            '</div>',
            '<div class="status">',
                '<b>Order Qty: </b> {ORDERQTY} <br>',
                '<b>Shipped  : </b> {SHIPPED} <br>',
                '<b>Open     : </b> {OPEN} <br>',
            '</div>',
            '<div class="{CLASS}"></div>'
        ],
        store: 'Doors',
        emptyText: 'Select a plant to view available doors.',

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
