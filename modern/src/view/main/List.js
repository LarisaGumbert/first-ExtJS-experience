/**
 * This view is an example list of people.
 */
Ext.define('TestApp01.view.main.List', {
    extend: 'Ext.Panel',
    xtype: 'mainlist',

    fullscreen: true,
    items: [
        {
            xtype: 'textfield',
            label: 'First Name'
        },
        {
            xtype: 'textfield',
            label: 'Last Name'
        },
        {
            xtype: 'emailfield',
            label: 'Email'
        },
        {
            xtype: 'emailfield',
            label: 'Re-type Email'
        },
        {
            xtype: 'passwordfield',
            label: 'Password'
        },
        {
            xtype: 'textfield',
            label: 'Address'
        },
        {
            xtype: 'textfield',
            label: 'City'
        },
        {
            xtype: 'selectfield',
            label: 'State',
            autoSelect: false,
            options: [
                {text: "First State", value: 1},
                {text: "Second State", value: 2},
                {text: "Third State", value: 3},
                {text: "Forth State", value: 4},
                {text: "Fifth State", value: 5}
            ],
            placeHolder: 'Choose a state'
        },
        {
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'left'
            },
            items: [
                {
                    xtype: 'textfield',
                    label: 'ZIP Code'
                },
                {
                    xtype: 'textfield',
                    placeHolder: 'optional'
                }
            ]
        }
    ]
});
