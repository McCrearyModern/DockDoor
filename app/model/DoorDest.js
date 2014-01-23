Ext.define('DockDoor.model.DoorDest', {
    extend: 'Ext.data.Model',
	config: {
        idProperty: 'UNIQUEID',

		fields: [{
            name: 'UNIQUEID'
        },{
			name: 'PLANTID',
			type: 'string'
		},{
			name: 'DOORID',
			type: 'string'
		},{
            name: 'DOORDESC',
            type: 'string'
        },{
            name: 'DOORDEST',
            type: 'string'
        },{
            name: 'TRAILER',
            type: 'string'
        },{
            name: 'LOAD',
            type: 'string'
        }]
	}
});