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

    init: function() {
        this.callParent(arguments);
    }

});