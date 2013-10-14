function triggerChartsResize(){
    debugger;
    try {
        if (window.onresize){
            window.onresize();
        }
    } catch (e){
        //just swallow it
    }
    $(window).trigger('resize');
}

$(function(){
    //settings
    var $settings = $("#settings"),
        $sidebarSettings = $("#sidebar-settings"),
        settingsState = JSON.parse(localStorage.getItem("settings-state")) || {
            sidebar: 'left',
            background: 'dark',
            sidebarState: 'auto',
            p_background: null,
            displaySidebar: true
        },
        $pageHeader = $(".page-header"),
        $body = $("body"),
        popoverClose = function(e){
            var $popover = $settings.siblings(".popover");
            if(!$.contains($popover[0], e.target)){
                $settings.popover('hide');
                $(document).off("click", popoverClose);
            }
        },
        backgroundStyle = function(style){

            var p_background = settingsState.p_background;
           
            // if (p_background != null) 
            // alert(p_background+':'+style);  
            $body.removeClass("background-"+p_background);
            //$('.btn-'+p_background).css('border','0px');
            if (style == "darker") {
                $body.addClass("background-darker");
            } else if (style == "std"){      
                $body.addClass("background-std");                 
           } else if (style == "classic"){      
                $body.addClass("background-classic");         
           } else if (style == "orange"){      
                $body.addClass("background-orange");         
           } else if (style == "turquoise"){      
                $body.addClass("background-turquoise");
            } else if (style == "brown"){      
                $body.addClass("background-brown"); 
            } else if (style == "emeraude"){      
                $body.addClass("background-emeraude"); 
            } else if (style == "lighter"){      
                $body.addClass("background-lighter");                 
            } else {                
                $body.addClass("background-std");
            }
            //$('.btn-'+style).css('border','4px solid rgba(51, 51, 51, 0.5)');
            settingsState.p_background = style;

        },
        sidebarState = function(state, triggerResize){
            var $template = $('#sidebar-settings-template');
            triggerResize = triggerResize == undefined ? true : false;
            if (!$template[0]){
                return;
            }
            $sidebarSettings.html(_.template($template.html(), {sidebarState: state}));
            if (state == "auto"){
                $(".sidebar, .side-nav, .wrap, .logo").removeClass("sidebar-icons");
            } else {
                $(".sidebar, .side-nav, .wrap, .logo").addClass("sidebar-icons");
            }
            if (triggerResize){
                triggerChartsResize();
            }

        },
        displaySidebar = function(display, triggerResize){
            triggerResize = triggerResize == undefined ? true : false;
            if (display == true){
                $body.removeClass("sidebar-hidden")
            } else {
                $body.addClass("sidebar-hidden")
            }
            if (triggerResize){
                triggerChartsResize();
            }
        };

    //backgroundStyle(settingsState.background);
    backgroundStyle(settingsState.p_background);
    sidebarState(settingsState.sidebarState, false);
    displaySidebar(settingsState.displaySidebar, false);

    if (!$settings[0]){
        return;
    }

    $settings.popover({
        template: '<div class="popover settings-popover">' +
            '<div class="arrow"></div>' +
            '<div class="popover-inner">' +
            '<div class="popover-content"></div>' +
            '</div>' +
            '</div>',
        html: true,
        animation: false,
        placement: 'bottom',
        content: function(){
            return _.template($('#settings-template').html(), settingsState);
        }
    }).click(function(e){
            //close all open dropdowns
            $('.page-header .dropdown.open .dropdown-toggle').dropdown('toggle');
            // need to remove popover on anywhere-click
            $(document).on("click", popoverClose);
            $(this).focus();
            return false;
        });

    $(".page-header .dropdown-toggle").click(function(){
        $settings.popover('hide');
        $(document).off("click", popoverClose);
    });
    //sidevar left/right
    $pageHeader.on("click", ".popover #sidebar-toggle .btn", function(){
        var $this = $(this),
            side = $this.data("value");
        settingsState.sidebar = side;
        localStorage.setItem("settings-state", JSON.stringify(settingsState));
    });

    //background
    $pageHeader.on("click", ".popover #background-toggle .btn", function(){
        var $this = $(this),
            style = $this.data("value");
        //settingsState.p_background = settingsState.background;
        backgroundStyle(style);
        settingsState.background = style;
        localStorage.setItem("settings-state", JSON.stringify(settingsState));
    });

    //sidebar visibility
    $pageHeader.on("click", ".popover #display-sidebar-toggle .btn", function(){
        var $this = $(this),
            display = $this.data("value");
        displaySidebar(display);
        settingsState.displaySidebar = display;
        localStorage.setItem("settings-state", JSON.stringify(settingsState));
    });

    //sidebar state {active, icons}
    $sidebarSettings.on("click", ".btn", function(){
        var $this = $(this),
            state = $this.data("value");
        if (state == 'icons'){
            closeNavigation();
        }
        sidebarState(state);
        settingsState.sidebarState = state;
        localStorage.setItem("settings-state", JSON.stringify(settingsState));
    });

    //close navigation if sidebar in icons state
    if (($("#sidebar").is(".sidebar-icons") || $(window).width() < 1049) && $(window).width() > 767){
        var $activeAccordion = $("#side-nav").find("> .accordion-group.active");
        $activeAccordion.find(".accordion-toggle").addClass("collapsed");
        $activeAccordion.find(".accordion-body.collapse").removeClass("in");
    }
});