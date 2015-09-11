Ext.define('TestApp01.store.Schedule', {
    extend: 'Ext.data.Store',

    alias: 'store.schedule',
    id: 'schedule',

    model: 'TestApp01.model.Schedule',

    groupField: 'date',

    data: {
        items: [
            { date: '01.09.2015 09:00:00', caption: "English" },
            { date: '01.09.2015 11:30:00', caption: "Status" },
            { date: '02.09.2015 10:00:00', caption: "Work" }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
