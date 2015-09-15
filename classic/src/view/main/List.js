Ext.define('TestApp01.view.main.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',

    requires: [
        'TestApp01.store.PhoneType'
    ],
    layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'stretch'    // Each takes up full width
    },
    width: 500,

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'First Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name'
        },
        {
            xtype: 'textfield',
            inputType: 'email',
            fieldLabel: 'Email',
            afterBodyEl: '<span class="field-subscript">(Your email address will be your user name)</span>'
        },
        {
            xtype: 'textfield',
            inputType: 'email',
            fieldLabel: 'Re-type Email'
        },
        {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: 'Password',
            afterBodyEl: '<span class="field-subscript">(Min 8 chars, 1 number, case-sensitive)</span>'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'City'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'State',
            autoSelect: false,
            store: [ "First State", "Second State", "Third State", "Forth State", "Fifth State" ],
            emptyText: 'Choose a state'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ZIP Code',
                    margin: '0 5 0 0',
                    flex: 1
                },
                {
                    xtype: 'textfield',
                    hideLabel: true,
                    emptyText: 'optional',
                    flex: 1
                }
            ],
            margin: '0 0 5 0'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Pnone',
                    afterBodyEl: '<span class="field-subscript">No spaces or dashes</span>',
                    flex: 1
                },
                {
                    xtype: 'image',
                    src: 'resources/help16.png',
                    alt: 'help',
                    margin: '0 5 0 0',
                    width: 16,
                    height: 16
                },
                {
                    xtype: 'combobox',
                    hideLabel: true,
                    store: {type: 'phonetype'},
                    valueField: 'id',
                    displayField: 'name',
                    value: 1,
                    flex: 1
                }
            ],
            margin: '0 0 5 0'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Date of Birth',
                    store: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    valueField: 'id',
                    displayField: 'name',
                    emptyText: 'Month',
                    margin: '0 5 0 0',
                    flex: 2
                },
                {
                    xtype: 'combobox',
                    hideLabel: true,
                    store: (function() { var arr= []; for (var i = 1; i <= 31; arr.push(i), i++){} return arr;})(),
                    valueField: 'id',
                    displayField: 'name',
                    emptyText: 'Day',
                    margin: '0 5 0 0',
                    flex: 1
                },
                {
                    xtype: 'combobox',
                    hideLabel: true,
                    store: (function() { var arr= []; for (var i = 1950; i <= new Date().getFullYear(); arr.push(i), i++){} return arr;})(),
                    valueField: 'id',
                    displayField: 'name',
                    emptyText: 'Year',
                    margin: '0 5 0 0',
                    flex: 1
                },
                {
                    xtype: 'image',
                    src: 'resources/help16.png',
                    alt: 'help',
                    margin: '0 5 0 0',
                    width: 16,
                    height: 16
                }
            ],
            margin: '0 0 5 0'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Gender',
            autoSelect: false,
            store: [ "Male", "Female" ],
            emptyText: 'Choose a gender'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Security Question',
                    store: ['Mother\'s maiden name' , 'Dog\'s name', 'Whatever...'],
                    valueField: 'id',
                    displayField: 'name',
                    emptyText: 'Chose a security question',
                    margin: '0 5 0 0',
                    flex: 1
                },
                {
                    xtype: 'image',
                    src: 'resources/help16.png',
                    alt: 'help',
                    width: 16,
                    height: 16
                }
            ],
            margin: '0 0 5 0'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Security answer',
            afterBodyEl: '<span class="field-subscript">(Not case-sensitive)</span>'
        }
    ]
});
