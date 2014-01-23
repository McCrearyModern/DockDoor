Ext.define('DockDoor.view.tablet.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'DockDoor.view.tablet.DoorResetCard'
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
                    flex: 3,
                    margin: '0 0 0 10'
                }]
            }]
    }
});
