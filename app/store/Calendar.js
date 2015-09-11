Ext.define('TestApp01.store.Calendar', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.calendar',

    root: {
        expanded: true,
        children: [
            { text: 'My calendars',
                expanded: true,
                checked: true,
                children: [
                    { text: 'Calendar 1', leaf: true, checked: true },
                    { text: 'Calendar 2', leaf: true, checked: true}
                ]
            },
            { text: 'Other calendars',
                expanded: true,
                checked: true,
                children: [
                    { text: 'Calendar 60010', leaf: true, checked: false}
                ]
            }
        ]
    }
});
