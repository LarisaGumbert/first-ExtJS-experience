var calendarDate = new Date();//2015, 0, 1);

Ext.define('TestApp01.view.main.Scheduler', {
    extend: 'Ext.panel.Panel',
    xtype: 'scheduler',
    layout: 'hbox',
    requires: [
        'TestApp01.store.Schedule'
    ],

    items: [
        //left panel
        {
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            collapsible: true,
            collapseDirection: 'left',
            margin: '0 10 0 0',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    padding: '5',
                    items: [
                        {
                            xtype: 'button',
                            text: 'New Appointment',
                            icon: 'resources/schedule16.png',
                            margin: '0 0 5 0',
                            handler: function(button, event) {
                                alert("Get REST !");
                            }
                        },
                        {
                            xtype: 'datepicker',
                            startDay: 1,
                            value: calendarDate,
                            margin: '0 0 5 0',
                            handler: function(picker, date) {
                                // do something with the selected date
                            }
                        },
                        {
                            xtype: 'datepicker',
                            startDay: 1,
                            value: Ext.Date.add(calendarDate, Ext.Date.MONTH, 1),
                            margin: '0 0 5 0',
                            handler: function(picker, date) {
                                // do something with the selected date
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: 2,
                    border: 1,
                    style: {
                        borderColor: 'silver',
                        borderStyle: 'solid'
                    }
                },
                {
                    xtype: 'container',
                    hidden: true,
                    padding: '5',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            margin: '0 0 25 0',
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
                },
                {
                    xtype: 'container',
                    padding: '5',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'treepanel',
                            width: 100,
                            height: 150,
                            rootVisible: false,
                            lines: false,
                            useArrows: true,
                            store: {type: 'calendar'}
                        }
                    ]
                }
            ]
        },
        //right panel
        {
            xtype: 'panel',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            header: false,
            tbar: [
                {
                    xtype: 'button',
                    icon: 'resources/arrow_left16.png'
                },
                {
                    xtype: 'button',
                    icon: 'resources/arrow_right16.png'
                },
                {
                    xtype: 'displayfield',
                    hideLabel: true,
                    style: {
                        fontSize: '1.2em'
                    },
                    value: (function() { return Ext.Date.format(calendarDate, 'M Y'); })()
                }
            ],
            items: [
                {
                    xtype: 'tabpanel',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            title: 'Calendar 1',
                            margin: '3 0 0 0',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'column',
                                    defaults: {
                                        xtype: 'container',
                                        padding: 5,
                                        border: true,
                                        cls: 'calendar-dayofweek-header',
                                        columnWidth: 0.142857
                                    },
                                    items: [
                                        { html: 'Monday' },
                                        { html: 'Tuesday' },
                                        { html: 'Wednesday' },
                                        { html: 'Thursday' },
                                        { html: 'Friday' },
                                        { html: 'Saturday' },
                                        { html: 'Sunday' }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    items: [
                                        {
                                            xtype: 'container',
                                            layout: 'column',
                                            defaults: {
                                                columnWidth: 0.142857,
                                                xtype: 'container',
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'stretch'
                                                },
                                                height: 120,
                                                border: true,
                                                cls: 'calendar-day-cell'
                                            },
                                            items:
                                                (function(date) {
                                                    var result = [];
                                                    var daysInMonth = Ext.Date.getDaysInMonth(date);
                                                    var dayOfWeek = new Date(date.setDate(1)).getDay();
                                                    if (dayOfWeek == 0) dayOfWeek = 7;
                                                    var daysToCalc = (daysInMonth - (7 - dayOfWeek + 1));
                                                    var blockQty = 7 + (7 - (daysToCalc % 7)) + daysToCalc;

                                                    var store = Ext.create('store.schedule');

                                                    for (var i = 1, d = 1; i <= blockQty; i++) {
                                                        var block = {};
                                                        if (d <= daysInMonth && ((i <= 7 && i >= (dayOfWeek)) || (i > 7)))
                                                        {
                                                            block = {
                                                                id: 'day_' + d,
                                                                items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        height: '1.5em',
                                                                        cls: 'calendar-day-header',
                                                                        html: d
                                                                    }
                                                                ]
                                                            };
                                                            store.filterBy(function(record) {
                                                                return Ext.Date.isEqual(Ext.Date.clearTime(record.data.date, true), new Date(date.getFullYear(), date.getMonth(), d));
                                                            });
                                                            store.each(function(record) {
                                                                block.items.push(
                                                                    {
                                                                        xtype: 'scheduleItem',
                                                                        text: '<b>' + Ext.Date.format(record.data.date, 'H:i') + '</b> ' + record.data.caption
                                                                    }
                                                                );
                                                            });

                                                            d++;
                                                        }
                                                        result.push(block);
                                                    }

                                                    return result;
                                                })(calendarDate)
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            title: 'Calendar 2',
                            flex: 1
                        }
                    ]
                }
            ]
        }

    ]
});
