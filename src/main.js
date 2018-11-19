$(document).ready(function() {
    let myDocker = new wcDocker('.dockerContainer', {
        allowDrawers: true,
        responseRate: 10,
        themePath   : 'node_modules/wcDocker/Build/Themes',
        theme       : 'shadow.min'
    });
    console.log("啦啦啦啦");
    myDocker.registerPanelType('Info Panel', {
        isPrivate: true,
        onCreate : function(myPanel) {
            myPanel.initSize(400, 200);
            let $infoText = $('<span class="info" style="margin:20px;"></span>');
            let $okButton = $('<button>OK</button>');

            myPanel.layout().addItem($infoText).stretch('100%', '100%');
            myPanel.layout().addItem($okButton, 0, 1).stretch('100%', '1%').css('text-align', 'right');

            $okButton.click(function() {
                myPanel.close();
            });
        },
    });

    let infoPanel = myDocker.addPanel('Info Panel', wcDocker.DOCK.MODAL, null);
    infoPanel.layout().scene().find('span').text("啦啦啦啦啦");
});