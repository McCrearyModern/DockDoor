/**
 * Created by rbec5463 on 10/23/13.
 */
Ext.define('DockDoor.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            PlantList : 'main #plantsOnMain',
            DoorList: 'doors',
            RefreshDoors: 'doors #refreshDoors',
            YardMaint: 'yardmaint',
            RefreshYard: 'yard #refreshYard',
            DoorResetCard: 'doorresetcard',
            DoorReset: 'doorreset',

            // buttons
            ClearDoor: 'doorreset #clearDoor',
            Move2NewDoor: 'doorreset #move2NewDoor',
            Move2Daily: 'doorreset #move2Daily'
        },

        control: {
            PlantList: {
                itemtap: 'onItemTapPlantList'
            },
            DoorList: {
                itemswipe: 'onItemSwipeDoorList',
                itemtap: 'onItemTapDoorList'
            },
            RefreshDoors: {
                tap: 'onTapRefreshDoors'
            },
            RefreshYard: {
                tap: 'onTapRefreshYard'
            },
            'yard #addYard': {
                tap: 'onTapAddYard'
            },
            'yardmaint #btnSaveYard': {
                tap: 'onTapSaveYard'
            },
            'yardmaint #btnCancelYard': {
                tap: 'onTapCancelYard'
            }
        }
    },

    onItemTapPlantList: function(list, index, target, record) {
        DockDoor.resources.GlobalVars.setCurrentPlant(record.get('PLANTID'));

        var doors = Ext.getStore('Doors');
        doors.removeAll();
        doors.load();
    },

    onItemSwipeDoorList: function(list, index,target,record, e, eOpts) {
        var me = this;

        if (e.direction == 'left' || e.direction == 'right') {
            if (!me.getDoorReset()) {
                Ext.Viewport.add({
                    xtype: 'doorresetcard'
                });
            } else {
                me.getDoorResetCard().show();
            }
            me.getDoorResetCard().setActiveItem(0);
            this.getDoorReset().setCurrentDoor(record);
        }
    },

    onItemTapDoorList: function(list, index, target, record) {

    },

    onTapRefreshDoors: function() {
        var doors = Ext.getStore('Doors');
        doors.removeAll();
        doors.load();
    },

    onTapRefreshYard: function() {
        var yard = Ext.getStore('Yards');
        yard.removeAll();
        yard.load();
    },

    onTapAddYard: function() {
        this.getYardMaint().show();
        this.getYardMaint().down('textfield[name=YARDTRLR]').focus();
    },

    onTapSaveYard: function() {
        var controller = this;
        var fieldValues = this.getYardMaint().getValues();
        Ext.apply(fieldValues, {
            action: 'saveYard'
        });

        Ext.data.JsonP.request({
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            params: fieldValues,
            success: function(response) {
                var yard = Ext.getStore('Yards');
                yard.removeAll();
                yard.load();
                controller.onTapCancelYard();
            },
            failure: function() {

            }
        });
    },

    onTapCancelYard: function() {
        var yardMaint = this.getYardMaint();
        yardMaint.hide();

        yardMaint.down('textfield[name=YARDTRLR]').setValue('');
        yardMaint.down('textfield[name=YARDLOAD]').setValue('');
        yardMaint.down('textfield[name=YARDDEST]').setValue('');
    },

    init: function() {
        this.callParent(arguments);
    }

});