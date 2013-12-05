/**
 * Created by rbec5463 on 10/23/13.
 */
Ext.define('DockDoor.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            PlantList : 'plants',
            DoorList: 'doors'
        },

        control: {
            PlantList: {
                itemtap: 'onItemTapPlantList'
            },
            DoorList: {
                itemswipe: 'onItemSwipeDoorList'
            }
        }


    },

    onItemTapPlantList: function(th, index, target, record) {
        var doors = Ext.getStore('Doors');
        doors.removeAll();
        doors.getProxy().config.extraParams.PLANTID = record.get('PLANTID');
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
    }

});