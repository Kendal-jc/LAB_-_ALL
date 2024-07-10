(function($) {
    const sketchfabWidgetHandle=function($scope,$){

        console.log("Test");
    }
    $(window).on("elementor/frontend/init",function(){
        elementorFrontend.hooks.addAction("frontend/element_ready/sketchfab-widget.default",
        sketchfabWidgetHandle);
    })
})(jQuery);