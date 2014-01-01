Ext.define('DockDoor.model.Door', {
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
        },{
            name: 'NOTIFY',
            type: 'string'
        },{
            name: 'DOORDESC',
            type: 'string'
        },{
            name: 'ORDERQTY',
            type: 'number'
        },{
            name: 'SHIPPED',
            type: 'number'
        },{
            name: 'OPEN',
            type: 'number'
        },{
            name: 'CLASS',
            type: 'string'
        },{
            name: 'DOORSTS',
            type: 'string'
        }]
	}
});