Ext.define('DockDoor.model.Yard', {
    extend: 'Ext.data.Model',
	config: {
		fields: [{
			name: 'YARDPLNT',
			type: 'string'
		},{
			name: 'YARDTRLR',
			type: 'string'
		},{
            name: 'YARDLOAD',
            type: 'string'
        },{
            name: 'YARDDEST',
            type: 'string'
        },{
            name: 'YARDDATE',
            type: 'string'
        },{
            name: 'YARDTIME',
            type: 'string'
        },{
            name: 'YARDPCS',
            type: 'string'
        },{
            name: 'YARDUSR',
            type: 'string'
        }]
	}
});