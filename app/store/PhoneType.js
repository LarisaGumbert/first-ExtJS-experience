Ext.define('TestApp01.store.PhoneType', {
    extend: 'Ext.data.Store',

    alias: 'store.phonetype',

    fields: [
        'id', 'name'
    ],

    data: {
        items: [
            { id: '1', name: "Mobile" },
            { id: '2', name: "Home" },
            { id: '3', name: "Work" }
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
