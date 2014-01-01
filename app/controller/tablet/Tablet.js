Ext.define('DockDoor.controller.tablet.Tablet', {
    extend: 'DockDoor.controller.Main',

    config: {
        refs: {
            MainNav : 'main'
        }
    },

    onItemTapPlantList: function(list, index, target, record) {
        this.callParent(arguments);
        console.log('tablet control . . .')
    }

});