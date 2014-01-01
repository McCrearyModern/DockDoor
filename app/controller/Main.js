/**
 * Created by rbec5463 on 10/23/13.
 */
Ext.define('DockDoor.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            PlantList : 'plants',
            DoorList: 'doors',
            RefreshDoors: 'doors #refreshDoors'
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
            Ext.Msg.confirm('Dock Status Change', 'Are you sure you want to mark Trailer # ' + record.get('TRAILER') + ' as picked up?',
                function(answer, val) {
                    if (answer == 'yes') {
                        Ext.data.JsonP.request({
                            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
                            callbackKey: 'callback',
                            params: {
                                DOORID: record.get('DOORID'),
                                PLANTID: record.get('PLANTID'),
                                action: 'resetDoor'
                            },
                            success: function() {
                                var doorStore = Ext.getStore('Doors');
                                doorStore.load();
                            }
                        });
                    }
                }
            );
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