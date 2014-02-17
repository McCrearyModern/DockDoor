Ext.define('DockDoor.view.YardMaint', {
    extend: 'Ext.form.Panel',
    xtype: 'yardmaint',
    requires: [
        'Ext.field.Hidden',
        'Ext.field.Select'
    ],

    fullscreen: true,
    config: {
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Yard Maint'
        },{
            xtype: 'hiddenfield',
            name: 'YARDPLNT'
        },{
            xtype: 'textfield',
            label: 'Trailer',
            name: 'YARDTRLR'
        },{
            xtype: 'textfield',
            label: 'Load #',
            name: 'YARDLOAD'
        },{
            xtype: 'textfield',
            label: 'Destination',
            name: 'YARDDEST'
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                itemId: 'btnSaveYard',
                text: 'Add/Save',
                ui: 'confirm-round',
                flex: 1
            },{
                xtype: 'spacer',
                width: 10
            },{
                xtype: 'button',
                itemId: 'btnCancelYard',
                text: 'Cancel',
                flex: 1
            }]
        }]
    }

});