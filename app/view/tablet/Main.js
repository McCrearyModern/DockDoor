Ext.define('DockDoor.view.tablet.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'DockDoor.view.tablet.DoorResetCard',
        'DockDoor.view.YardMaint'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [{
                title: 'Dock Door Pickups',
                iconCls: 'home',
                layout: 'hbox',

                styleHtmlContent: true,
                scrollable: false,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Mobile Dock Door App'
                },{
                    xtype: 'plants',
                    itemId: 'plantsOnMain',
                    flex: 1,
                    style: 'border: 2px grey solid'
                },{
                    xtype: 'doors',
                    flex: 4,
                    margin: '0 0 0 10'
                },{
                    xtype: 'container',
                    flex: 2,
                    layout: 'vbox',
                    items: [{
                        xtype: 'yard',
                        flex: 2,
                        margin: '0 0 0 10'
                    },{
                        xtype: 'yardmaint',
                        flex: 1,
                        hidden: true
                    }]
                }]
            }]
    }
});
