Ext.define('TestApp01.view.main.Scheduler', {
    extend: 'Ext.panel.Panel',
    xtype: 'scheduler',
    layout: 'hbox',

    items: [
        //left panel
        {
            xtype: 'panel',
            layout: 'vbox',
            collapsible: true,
            collapseDirection: 'left',
            margin: '0 10 0 0',
            items: [
                {
                    xtype: 'panel',
                    layout: 'vbox',
                    padding: '5',
                    items: [
                        {
                            xtype: 'button',
                            text: 'New Appointment',
                            icon: 'resources\\\\schedule16.png', //TODO: ask
                            margin: '0 0 5 0',
                            //TODO: ask
                            /*,width: '100%'*/
                            handler: function(button, event) {
                                alert("Get REST !");
                            }
                        },
                        {
                            xtype: 'datepicker',
                            margin: '0 0 5 0',
                            handler: function(picker, date) {
                                // do something with the selected date
                            }
                        },
                        {
                            xtype: 'datepicker',
                            margin: '0 0 5 0',
                            handler: function(picker, date) {
                                // do something with the selected date
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    padding: '5',
                    //TODO: ask
                    width: 220,
                    border: true,
                    style: {
                        borderStyle: 'solid',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderBottom: 'none'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            margin: '0 0 25 0',
                            //TODO: ask why borders
                            border: false,
                            style: {
                                borderStyle: 'none'
                            },
                            collapsible: true,
                            collapseDirection: 'top',
                            hideCollapseTool: true,
                            tools: [
                                {
                                    type: 'up',
                                    itemId: 'tool_up',
                                    margin: '0 10 0 0',
                                    callback: function(owner, tool, event) {
                                        if (!owner.getCollapsed()) {
                                            owner.collapse();
                                            tool.hide();
                                            owner.tools.down.show();
                                        }
                                    }
                                },
                                {
                                    type: 'down',
                                    itemId: 'tool_down',
                                    margin: '0 10 0 0',
                                    hidden: true,
                                    callback: function(owner, tool, event) {
                                        if (owner.getCollapsed()) {
                                            owner.expand();
                                            tool.hide();
                                            owner.tools.up.show();
                                        }
                                    }
                                },
                                {
                                    xtype: 'checkbox',
                                    boxLabel: 'My Calendars',
                                    width: '90%',
                                    checked: true
                                }
                            ],
                            items: {
                                xtype: 'checkboxgroup',
                                columns: 1,
                                vertical: true,
                                hideLabel: true,
                                margin: 5,
                                items: [
                                    { boxLabel: 'Calendar 1', name: 'rb', inputValue: '1', checked: true },
                                    { boxLabel: 'Calendar 2', name: 'rb', inputValue: '2', checked: true }
                                ]
                            }
                        },
                        {
                            xtype: 'panel',
                            collapsible: true,
                            collapseDirection: 'top',
                            hideCollapseTool: true,
                            tools: [
                                {
                                    type: 'up',
                                    margin: '0 10 0 0',
                                    callback: function(owner, tool, event) {
                                        if (!owner.getCollapsed()) {
                                            owner.collapse();
                                            tool.hide();
                                            owner.tools.down.show();
                                        }
                                    }
                                },
                                {
                                    type: 'down',
                                    margin: '0 10 0 0',
                                    hidden: true,
                                    callback: function(owner, tool, event) {
                                        if (owner.getCollapsed()) {
                                            owner.expand();
                                            tool.hide();
                                            owner.tools.up.show();
                                        }
                                    }
                                },
                                {
                                    xtype: 'checkbox',
                                    boxLabel: 'Other Calendars',
                                    width: '90%',
                                    checked: true
                                }
                            ],
                            items: {
                                xtype: 'checkboxgroup',
                                columns: 1,
                                vertical: true,
                                hideLabel: true,
                                margin: 5,
                                items: [
                                    { boxLabel: 'Calendar 6000', name: 'rb', inputValue: '1' }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        //right panel
        {
            xtype: 'panel',
            layout: 'vbox',
            header: false,
            tbar: [
                {
                    xtype: 'button',
                    icon: 'resources\\\\arrow_left16.png'
                },
                {
                    xtype: 'button',
                    icon: 'resources\\\\arrow_right16.png'
                },
                {
                    xtype: 'displayfield',
                    hideLabel: true,
                    style: {
                        fontSize: '1.2em'
                    },
                    value: 'September 2015'
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    width: 600,
                    height: 600,
                    items: [
                        {
                            title: 'Calendar 1'
                        },
                        {
                            title: 'Calendar 2'
                        }
                    ]
                }
            ]
        }

    ]
});
