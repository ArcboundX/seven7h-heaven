$(document).ready(function(){

    // Tab Switching Functionality
    function initializeTabSwitching() {
        // Get all tab buttons
        const $tabButtons = $('.tab-btn');
        const $gameBanner = $('#game-banner');
        const $bannerTitle = $('.dynamic-game-banner .title');
        const $bannerSubtitle = $('.dynamic-game-banner p:last-child');
        
        // Function to switch tabs
        function switchTab(tabId, title, bannerClass, subtitle) {
            // Remove active class from all buttons
            $tabButtons.removeClass('active');
            
            // Hide all mod sections
            $('.mod-section').removeClass('active');
            
            // Add active class to clicked button
            const $activeButton = $(`[data-tab="${tabId}"]`);
            if ($activeButton.length) {
                $activeButton.addClass('active');
            }
            
            // Show the corresponding mod section
            const $activeSection = $(`#mods-${tabId}`);
            if ($activeSection.length) {
                $activeSection.addClass('active');
            }
            
            // Update banner
            if ($gameBanner.length && bannerClass) {
                // Remove all banner classes except the base ones
                $gameBanner.removeClass().addClass('intro row dynamic-game-banner');
                // Add the new banner class
                $gameBanner.addClass(bannerClass);
            }
            
            // Update title
            if ($bannerTitle.length && title) {
                $bannerTitle.text(title);
            }
            
            // Update subtitle
            if ($bannerSubtitle.length && subtitle) {
                $bannerSubtitle.text(subtitle);
            }
        }
        
        // Add click event to each tab button
        $tabButtons.on('click', function(e) {
            e.preventDefault();
            const $this = $(this);
            const tabId = $this.data('tab');
            const title = $this.data('title');
            const bannerClass = $this.data('banner');
            const subtitle = $this.data('subtitle');
            
            switchTab(tabId, title, bannerClass, subtitle);
            
            // Update URL hash
            window.location.hash = tabId;
        });
        
        // Check URL hash on page load
        if (window.location.hash) {
            const tabId = window.location.hash.replace('#', '');
            const $button = $(`[data-tab="${tabId}"]`);
            if ($button.length) {
                const title = $button.data('title');
                const bannerClass = $button.data('banner');
                const subtitle = $button.data('subtitle');
                switchTab(tabId, title, bannerClass, subtitle);
            }
        }
        
        // Initialize first tab if no hash
        if (!window.location.hash && $tabButtons.length) {
            const $firstButton = $tabButtons.first();
            const tabId = $firstButton.data('tab');
            const title = $firstButton.data('title');
            const bannerClass = $firstButton.data('banner');
            const subtitle = $firstButton.data('subtitle');
            switchTab(tabId, title, bannerClass, subtitle);
        }
    }
    
    // Initialize tab switching if on shop page
    if ($('.shop').length && $('.tab-btn').length) {
        initializeTabSwitching();
    }


    // Partner slider
    $('#partner-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    }); // end of #partner-slider




    // Turn off Google Map zooming
    $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map').on('click', function () {
        $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;
    $(".map_canvas").mouseleave(function () {
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    }); //end of Turn off Google Map zooming


    // Team box height
    var h = $('.team-img-detail').height();
    var mbottom = h;
    h = h/2;
    var top = $('.team-box').height();
    top = (top/2)-h;
    var win = $(window).width();

    if ( win >= 768 ){
        $(".team-img-detail").css("top", top);
    } else {
        $(".team-img-detail").css({
            "bottom": -mbottom+20,
            "left": "0",
            "width": "100%"
        });
        $(".team-box").css("margin-bottom", mbottom+30);
    }// end of Team box height


    // Pop up
    $('.test-popup-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    }); //end of Pop Up





    // Modal Settings 
$(document).ready(function() {
    // Mod details modal
    $('.mod-details-btn').on('click', function(e) {
        e.preventDefault();
        const modId = $(this).data('mod');
        openModModal(modId);
    });
    
    // Close modal
    $(document).on('click', '.mod-modal-close, .mod-modal .btn-default', function() {
        $('.mod-modal').fadeOut();
    });
    
    // Close on background click
    $('.mod-modal').on('click', function(e) {
        if ($(e.target).hasClass('mod-modal')) {
            $(this).fadeOut();
        }
    });
    
    function openModModal(modId) {
        // In a real implementation, you'd fetch data based on modId
        // For now, we'll create a sample modal
        const modalHtml = `
            <div class="mod-modal" style="display: block;">
                <div class="mod-modal-content">
                    <div class="mod-modal-header">
                        <h3>Mod Name Details</h3>
                        <button class="mod-modal-close">&times;</button>
                    </div>
                    <div class="mod-modal-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <img src="assets/images/mods/sims1/full-size.jpg" alt="Mod Preview" style="width: 100%; border-radius: 4px;">
                            </div>
                            <div class="col-sm-8">
                                <h4>Complete Description</h4>
                                <p>Full detailed description here. This can be as long as needed. Explain what the mod does, how to install it, any requirements, etc.</p>
                                
                                <div class="mod-features">
                                    <h5>Features:</h5>
                                    <ul>
                                        <li>Feature 1 description</li>
                                        <li>Feature 2 description</li>
                                        <li>Feature 3 description</li>
                                    </ul>
                                </div>
                                
                                <div class="mod-requirements">
                                    <h5>Requirements:</h5>
                                    <p>The Sims 1: Complete Collection, Windows 10/11</p>
                                </div>
                                
                                <div class="mod-install">
                                    <h5>Installation:</h5>
                                    <p>1. Download the file<br>2. Extract to your Mods folder<br>3. Enable in game settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mod-modal-footer">
                        <a href="downloads/your-mod.zip" class="btn btn-default btn-robot-blue" download>
                            Download Now
                        </a>
                        <button class="btn btn-default btn-robot mod-modal-close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(modalHtml);
    }
});



}); // end of $(document).ready(function()