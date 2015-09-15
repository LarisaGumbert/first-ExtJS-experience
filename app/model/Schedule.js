Ext.define('TestApp01.model.Schedule', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'date', type: 'date', dateFormat: 'd.m.Y H:i:s' },
        { name: 'caption', type: 'string' }
    ]
});
