Ext.define("GeoMairie.view.Login.Welcome", {
    extend: 'Ext.Panel',
    border: false,
    alias: 'widget.welcome',
    requires:[
       'Ext.layout.container.Absolute'
    ],    
    layout: {
        type: 'absolute'        
    },
    bodyCls: 'welcome-background',
    items: [
        {
            xtype: 'panel',
            itemId: 'panel-left',
            bodyCls: 'welcome',               
            width: 0,
            height: 0,
            border:false,
            hidden:true,
            x: 0,
            y:0
        },
        {
            xtype: 'panel',
            itemId: 'panel-right',
            bodyCls: 'welcome',
            width: 0,
            height: 0,
            border: false,
            hidden: true,
            x: 0,
            y: 0
        }
    ],
    listeners: {
        afterrender: function (scope, opts)
        {
            var panelLeft = this.down("#panel-left");
            var panelRight = this.down("#panel-right");
            var totalHeight = Ext.getBody().getViewSize().height;
            var totalWidth = Ext.getBody().getViewSize().width;
            var halfWidth = totalWidth / 2;
            panelLeft.addCls("welcome");
            this.doLayout();
            Ext.create('Ext.fx.Anim', {
                target: panelLeft,
                duration: 0,
                from: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y:0
                },
                to: {
                    width: halfWidth,
                    height: totalHeight,
                    x: 0,
                    y: 0
                }
            });
            Ext.create('Ext.fx.Anim', {
                target: panelRight,
                duration: 0,
                from: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                },
                to: {
                    width: halfWidth,
                    height: totalHeight,
                    x: halfWidth,
                    y: 0
                }
            });
            panelLeft.show();
            panelRight.show();
            Ext.create('Ext.fx.Anim', {
                target: panelLeft,
                duration: 2000,
                delay:400,
                easing: 'bounceOut',
                from: {
                    width: halfWidth,
                    height: totalHeight,
                    x: 0,
                    y: 0
                },
                to: {
                    width: 0,
                    height: totalHeight,
                    x: 0,
                    y: 0
                }
            });

            Ext.create('Ext.fx.Anim', {
                target: panelRight,
                duration: 2000,
                delay: 400,
                easing:'bounceOut',
                from: {
                    width: halfWidth,
                    height: totalHeight,
                    x: halfWidth,
                    y: 0
                },
                to: {
                    width: 0,
                    height: totalHeight,
                    x: totalWidth,
                    y: 0
                }
            });
            /*
            console.log(this);
           
            var totalHeight = Ext.getBody().getViewSize().height;
            var totalWidth = Ext.getBody().getViewSize().width;
            var halfWidth = totalWidth / 2;
            panelLeft.setWidth(halfWidth);
            panelRight.setWidth(halfWidth);
            panelLeft.width = halfWidth;
            panelRight.width = halfWidth;
            panelLeft.height = totalHeight;
            panelRight.height = totalHeight;
            panelLeft.x = 0;
            panelRight.x = halfWidth;
            
           
            console.log("ok");
            */
        }
    }
});