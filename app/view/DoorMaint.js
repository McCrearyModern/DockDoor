Ext.define('DockDoor.view.DoorMaint', {
    extend: 'Ext.form.Panel',
    xtype: 'doormaint',
    requires: [
        'Ext.field.Hidden',
        'Ext.field.Select'
    ],

    fullscreen: true,
    config: {
        items: [{
            xtype: 'hiddenfield',
            name: 'PLANTID'
        },{
            xtype: 'hiddenfield',
            name: 'DOORID'
        },{
                xtype: 'textfield',
                label: 'Door',
                name: 'DOORDESC',
                readOnly: true
        },{
            xtype: 'textfield',
            label: 'Load #',
            name: 'LOAD'
        },{
            xtype: 'textfield',
            label: 'Trailer',
            name: 'TRAILER'
        },{
            xtype: 'selectfield',
            label: 'Status',
            name: 'DOORSTS',
            options: [
                {text: '', value: ''},
                {text: 'Ready for Pickup', value: 'D'},
                {text: 'Ready, wait for bill . . .', value: 'C'},
                {text: 'Loading . . .', value: 'B'},
                {text: 'Empty', value: 'A'}
            ]
        },{
            xtype: 'textfield',
            label: 'Destination',
            name: 'DOORDEST'
        },{
            xtype: 'button',
            itemId: 'btnSaveDoor',
            text: 'Save',
            ui: 'confirm-round'
        }]
    }

});