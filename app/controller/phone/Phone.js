Ext.define('DockDoor.controller.phone.Phone', {
    extend: 'DockDoor.controller.Main',

    config: {
        refs: {
            MainNav : 'main',
            DoorForm: 'doormaint'
        },

        control: {
            'doormaint #btnSaveDoor' : {
                tap: 'onTapSaveDoor'
            }
        }
    },

    onItemTapPlantList: function(list, index, target, record) {
        this.callParent(arguments);

        this.getMainNav().push({
            xtype: 'doors',
            title: record.get('PLANTDESC')
        });
    },

    onItemTapDoorList: function(list, index, target, record) {
        this.callParent(arguments);
        this.getMainNav().push({
            xtype: 'doormaint',
            title: 'PLT ' + record.get('PLANTID') + '  DOOR ' + record.get('DOORID')
        });

        this.getDoorForm().setRecord(record);

    },

    // The Save Door Button is tapped on the Dock Door Maintenance Form.  phone only
    onTapSaveDoor: function() {
        var controller = this;
        var fieldValues = this.getDoorForm().getValues();
        Ext.apply(fieldValues, {
            action: 'saveDoor'
        });

        Ext.data.JsonP.request({
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            params: fieldValues,
            success: function(response) {
                var doors = Ext.getStore('Doors');
                doors.getProxy().config.extraParams.PLANTID = fieldValues.PLANTID;
                doors.load({
                    callback: function() {
                        // go back to door list.
                        controller.getMainNav().pop();
                    }
                });
            },
            failure: function() {

            }
        });

    }

});