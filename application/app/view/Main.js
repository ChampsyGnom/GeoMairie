Ext.define('GeoMairie.view.Main', {
    extend: 'Ext.Panel',
    requires:[
        'Ext.Panel'     
    ],
    border: false,   
    xtype: 'app-main',   
    layout:
    {
        type: 'fit'
    },

    items: [
    {
        xtype: 'welcome'
        
    }
    ,
    {
        xtype: 'panel',
        hidden: true
       
    }
    ]
});