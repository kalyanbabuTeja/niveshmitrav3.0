      (function () {
                       if ($('#layout-sidenav').hasClass('sidenav-horizontal') || window.layoutHelpers.isSmallScreen()) {
                           return;
                       }
                       try {
                           window.layoutHelpers._getSetting("Rtl")
                           window.layoutHelpers.setCollapsed(
                               localStorage.getItem('layoutCollapsed') === 'true',
                               false
                           );
                       } catch (e) { }
                   })();
                   $(function () {
                       $('#layout-sidenav').each(function () {
                           new SideNav(this, {
                               orientation: $(this).hasClass('sidenav-horizontal') ? 'horizontal' : 'vertical'
                           });
                       });
                       $('body').on('click', '.layout-sidenav-toggle', function (e) {
                           e.preventDefault();
                           window.layoutHelpers.toggleCollapsed();
                           if (!window.layoutHelpers.isSmallScreen()) {
                               try {
                                   localStorage.setItem('layoutCollapsed', String(window.layoutHelpers.isCollapsed()));
                               } catch (e) { }
                           }
                       });
                   });
                   $(document).ready(function () {
                       $("#pcoded").pcodedmenu({
                           themelayout: 'horizontal',
                           MenuTrigger: 'hover',
                           SubMenuTrigger: 'hover',
                       });
                   });
                   
         
         document.addEventListener('DOMContentLoaded', function() {
         document.querySelectorAll('input[name="tab"]').forEach(radio => {
         radio.addEventListener('change', function() {
             document.querySelectorAll('.tab-content').forEach(content => {
                 content.style.display = 'none';
             });
             const contentId = this.id.replace('tab', 'content');
             document.getElementById(contentId).style.display = 'block';
         });
         });
         });
   // Next buttons
  document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const nextCollapse = document.querySelector(this.getAttribute('data-next'));
      new bootstrap.Collapse(nextCollapse, { toggle: true });
    });
  });

  // Previous buttons
  document.querySelectorAll('.prev-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const prevCollapse = document.querySelector(this.getAttribute('data-prev'));
      new bootstrap.Collapse(prevCollapse, { toggle: true });
    });
  });  
   document.querySelectorAll('input[name="infrastructure"]').forEach((radio) => {
    radio.addEventListener('change', function () {
      const landCard = document.getElementById("landCard");
      const buildingCard = document.getElementById("buildingCard");

      if (this.value === "Land") {
        landCard.style.display = "block";
        buildingCard.style.display = "none";
      } else if (this.value === "Building") {
        buildingCard.style.display = "block";
        landCard.style.display = "none";
      }
    });
  });
$(document).ready(function() {
    var current_fs, next_fs, previous_fs; // fieldsets
    var current = 1;
    var steps = $(".form-step").length;

    setProgressBar(current);

    $(".next").click(function() {
        current_fs = $(this).closest(".form-step");
        next_fs = current_fs.next(".form-step");

        // Activate next step on progressbar
        $("#progressbar li").eq($(".form-step").index(next_fs)).addClass("active");

        // Show the next step
        next_fs.show().addClass("active");
        
        // Hide the current step
        current_fs.hide().removeClass("active");

        setProgressBar(++current);
    });

    $(".previous").click(function() {
        current_fs = $(this).closest(".form-step");
        previous_fs = current_fs.prev(".form-step");

        // De-activate current step on progressbar
        $("#progressbar li").eq($(".form-step").index(current_fs)).removeClass("active");

        // Show the previous step
        previous_fs.show().addClass("active");
        
        // Hide the current step
        current_fs.hide().removeClass("active");

        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }
    
    // Submit form handler
    $("#msform").on("submit", function(e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
   $(function() {
      $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy" // Format: Day-Month-Year
      });
    });
        
});
 