Ext.define('DockDoor.view.Plants', {
    extend: 'Ext.dataview.List',
    xtype: 'plants',
    config: {
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Plants'
        }],
        itemTpl: '{PLANTID}',
        store: 'Plants',
        emptyText: 'There are no plants to show.'
    }
});
