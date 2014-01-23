Ext.define('DockDoor.controller.tablet.Tablet', {
    extend: 'DockDoor.controller.Main',

    config: {
        refs: {
            MainNav : 'main',

            // buttons
            ClearDoor: 'doorreset #clearDoor',
            Move2NewDoor: 'doorreset #move2NewDoor',
            Move2Daily: 'doorreset #move2Daily',
            DestPlantList: 'doordestination #plantsOnDest',
            DestDoorList: 'doorsdestlist'
        },

        control: {
            ClearDoor: {
                tap: 'onTapClearDoor'
            },
            Move2NewDoor: {
                tap: 'onTapMove2NewDoor'
            },
            Move2Daily: {
                tap: 'onTapMove2Daily'
            },
            DestPlantList: {
                itemtap: 'onItemTapPlantDestList'
            },
            DestDoorList: {
                itemtap: 'onItemTapDoorDestList'
            }
        }
    },

    onItemTapPlantList: function(list, index, target, record) {
        this.callParent(arguments);
    },

    onTapClearDoor: function() {
        var me = this;
        var record = this.getDoorReset().getCurrentDoor();

        Ext.Msg.confirm('Dock Status Change', 'Are you sure you want to mark Trailer # ' + record.get('TRAILER') +
                        ' as picked up?',
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
                            me.getDoorResetCard().hide();
                        }
                    });
                }
            }
        );
    },

    onTapMove2NewDoor: function() {
        var me = this;
        var record = this.getDoorReset().getCurrentDoor();
        Ext.getStore('DoorsDest').removeAll();

        Ext.Msg.confirm('Dock Door Transfer', 'Are you ready to pull trailer ' + record.get('TRAILER') + ' from door? <br>' +
            'If so, Hit Yes . . . Then . . . when ready, <br> select the plant and door you are moving trailer to.',
            function(answer, val) {
                if (answer == 'yes') {
                    var doorStore = Ext.getStore('Doors');
                    doorStore.load();

                    // show dialog to pick plant and door trailer moved to.
                    me.getDoorResetCard().setActiveItem(1);

                    Ext.data.JsonP.request({
                        url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
                        callbackKey: 'callback',
                        params: {
                            DOORID: record.get('DOORID'),
                            PLANTID: record.get('PLANTID'),
                            action: 'resetDoor'
                        },
                        success: function() {
                            //var doorStore = Ext.getStore('Doors');
                            //doorStore.load();

                            // show dialog to pick plant and door trailer moved to.
                            me.getDoorResetCard().setActiveItem(1);
                        }
                    });

                }
            }
        );
    },

    onTapMove2Daily: function() {
        var me = this;
        var thisDoor = this.getDoorReset().getCurrentDoor();

        Ext.Msg.confirm('Move Trailer to Daily', 'This will move the Trailer: #' + thisDoor.get('TRAILER') +
                        ' to the Daily Yard.  Are you sure?',
            function(answer, val) {
                if (answer == 'yes') {
                    Ext.data.JsonP.request({
                        url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
                        callbackKey: 'callback',
                        params: {
                            DOORID: thisDoor.get('DOORID'),
                            PLANTID: thisDoor.get('PLANTID'),
                            MOVE2YARD: 'YES',
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
    },

    onItemTapPlantDestList: function(list, index, target, record) {
        var doorStore = Ext.getStore('DoorsDest');
        DockDoor.resources.GlobalVars.setDestPlant(record.get('PLANTID'));

        doorStore.getProxy().config.extraParams.PLANTID = record.get('PLANTID');
        doorStore.load();
    },

    onItemTapDoorDestList: function(list, index, target, record) {
        var me = this;
        var destDoor = this.getDoorReset().getCurrentDoor();

        Ext.data.JsonP.request({
            url: 'http://mccrearymodern.com:6032/mobile/dockdoor.pgm',
            callbackKey: 'callback',
            params: {
                NEWDOORID: record.get('DOORID'),
                NEWPLANTID: record.get('PLANTID'),

                CURRENTDOOR: destDoor.get('DOORID'),
                CURRENTPLANT: destDoor.get('PLANTID'),
                TRAILER: destDoor.get('TRAILER'),
                DESTINATION: destDoor.get('DOORDEST'),
                LOAD: destDoor.get('LOAD'),

                action: 'move2NewDoor'
            },
            success: function() {
                Ext.getStore('Doors').load();
                me.getDoorResetCard().hide();
            }
        });
    }
});