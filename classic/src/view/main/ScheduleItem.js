Ext.define('TestApp01.view.main.ScheduleItem', {
    extend: 'Ext.container.Container',
    xtype: 'scheduleItem',

    requires: [
        'TestApp01.store.Schedule'
    ],
    layout: {
        type: 'hbox'
    },
    height: 20,
    margin: '0 0 1 0',

    //custom
    text: '',

    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items:[
                {
                    xtype: 'container',
                    width: 5,
                    height: 20,
                    cls: 'schedule-item-indent'
                },
                {
                    xtype: 'container',
                    itemId: 'itemText',
                    flex: 1,
                    height: 20,
                    cls: 'schedule-item-text',
                    html: me.text
                }
            ]
        });
        me.callParent(arguments);
    }
});
