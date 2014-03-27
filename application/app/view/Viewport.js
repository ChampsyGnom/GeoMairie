Ext.define('GeoMairie.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'GeoMairie.view.Main'
    ],
   
    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
