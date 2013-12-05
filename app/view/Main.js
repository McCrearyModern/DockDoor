Ext.define('DockDoor.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'DockDoor.view.Plants',
        'DockDoor.view.Doors'
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
