/* 
	define all other plugins here after bootstrap except jquery(which we already called in main.js file)
*/
$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Footer margin set for stick to bottom
  function footerAdj() {
    var footerH = $(".footer").innerHeight();
    $(".footer").css({ "margin-top": -footerH });
    $(".main-content").css({ "padding-bottom": footerH });
  }
  footerAdj();
  $(window).resize(function () {
    footerAdj();
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);

    // header sub menu close on resize
    $(".main-navigation > ul > .sub-menu-active .submenu-content")
      .stop(true, true)
      .slideUp(250);
    setTimeout(function () {
      $(".main-navigation > ul > li .submenu-content").css("display", "");
    }, 250);

    // remove all classes on resize --------------------------------
    $(".main-navigation > ul > .sub-menu-active").removeClass(
      "sub-menu-active"
    );
    $(".user-setting-page .aside-layout-wrapper").removeClass("show-menu");
    //----------------------------------------------------------------
  });

  // Add new js functions here -----------------------------------------------------------------
  $(".hamburger-menu, .header .backdrop").click(function () {
    $("body").toggleClass("menu-open");
  });

  // header sub menu JS
  $(".main-navigation > ul > li > a").on("click", function () {
    if ($(window).width() < 1200) {
      if ($(this).closest("li").hasClass("sub-menu-active")) {
        $(this).closest("li").removeClass("sub-menu-active");
        $(this)
          .closest("li")
          .find(".submenu-content")
          .stop(true, true)
          .slideUp(250);
      } else {
        $(".main-navigation > ul > .sub-menu-active .submenu-content")
          .stop(true, true)
          .slideUp(250);
        $(".main-navigation > ul > .sub-menu-active").removeClass(
          "sub-menu-active"
        );
        $(this).closest("li").addClass("sub-menu-active");
        $(this)
          .closest("li")
          .find(".submenu-content")
          .stop(true, true)
          .slideDown(250);
      }
    }
  });

  // select2
  $(".custom-Select2").each(function () {
    $(this).select2({
      dropdownParent: $(this).closest(".select2-dropdownParent"),
    });
  });
  $(".custom-Select2-no-search").each(function () {
    $(this).select2({
      dropdownParent: $(this).closest(".select2-dropdownParent"),
      minimumResultsForSearch: -1,
      dropdownPosition: "below",
    });
  });
  $(".custom-Select2-no-search.no-parent").each(function () {
    $select = $(this).select2({
      minimumResultsForSearch: -1,
      dropdownPosition: "below",
    });
    // $(this).on("select2-open", function() {$(this).select2('positionDropdown', true);});
    $select.data("select2").$dropdown.addClass("z-2000");
  });

  // perfectscroll scrollbar
  $(".perfectscroll").perfectScrollbar({
    // handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
    // scrollingThreshold: 1000,
    // wheelSpeed: 1,
    // wheelPropagation: false,
    // minScrollbarLength: null,
    // maxScrollbarLength: null,
    // useBothWheelAxes: false,
    // suppressScrollX: false,
    // suppressScrollY: false,
    // swipeEasing: true,
    // scrollXMarginOffset: 0,
    // scrollYMarginOffset: 0
  });

  // datepicker
  $(".inline-calendar").datepicker({
    todayHighlight: true,
    beforeShowDay: function (date) {
      if (date.getMonth() == new Date().getMonth())
        switch (date.getDate()) {
          case 6:
            return "active";
          case 7:
            return "ev";
          case 8:
            return "ev";
          case 9:
            return "ev";
          case 15:
            return "ev";
          case 20:
            return "ev";
          case 21:
            return "ev";
          case 27:
            return "ev";
        }
    },
  });
  $(".inline-calendar-secondary").datepicker({
    todayHighlight: true,
    beforeShowDay: function (date) {
      if (date.getMonth() == new Date().getMonth())
        switch (date.getDate()) {
          case 6:
            return "tl";
          case 9:
            return "tl-fc-td";
          case 13:
            return "fc";
          case 15:
            return "tl-fc";
          case 17:
            return "td";
          case 22:
            return "fc-td";
          case 31:
            return "tl-td";
        }
    },
  });
  $(".datepicker-textbox").datepicker({});

  // daterange picker
  var start = moment().subtract(29, "days");
  var end = moment();
  $(".daterangepicker-text").daterangepicker({
    ranges: {
      //  'Today': [moment(), moment()],
      //  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      //  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "Last 60 Days": [moment().subtract(59, "days"), moment()],
      "Last 90 Days": [moment().subtract(89, "days"), moment()],
      "Last 180 Days": [moment().subtract(179, "days"), moment()],
      "Last 360 Days": [moment().subtract(359, "days"), moment()],
      //  'This Month': [moment().startOf('month'), moment().endOf('month')],
      //  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
  });

  // dropdown menu click close
  $(".dropdown-menu.no-click-close").on("click", function (e) {
    e.stopPropagation();
  });

  // updated 7-1-2025
  $(".dropdown.dropdown-tooltip")
    .mouseenter(function (e) {
      $(this).find(".btn").dropdown("toggle");
    })
    .mouseleave(function (e) {
      $(this).find(".btn").dropdown("hide").blur();
    });

  // tag inputs
  $(".taginput").tagsinput();

  // bootstrap tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      // 'customClass': 'custom-tooltip',
      // trigger: 'click'
    });
  });

  // property details drawer 13-01-25
  const swiper = new Swiper(".property-detail-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  setTimeout(function () {
    tabResponsive();
  }, 300);
  $('[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    setTimeout(function () {
      tabResponsive();
    }, 300);
  });
  $(window).resize(function () {
    setTimeout(function () {
      tabResponsive();
    }, 300);
  });
  function tabResponsive() {
    if ($(".scrollable-tab-wrapper").length) {
      $(".scrollable-tab-wrapper").each(function () {
        var wrapperWidth = $(this).width();
        var tabLinkWidth = 0;
        $(this)
          .find("> .feature-tab-links .nav-tabs li")
          .each(function () {
            tabLinkWidth += $(this).outerWidth(true);
          });

        if (wrapperWidth < tabLinkWidth && wrapperWidth > 0) {
          $(this).find("> .has-arrows").addClass("arrows-visible");
        } else {
          $(this).find("> .has-arrows").removeClass("arrows-visible");
        }
      });
    }
  }
  // Scrollable tabbing
  $(".scrollable-tab-wrapper .nav-tabs .nav-link").click(function (e) {
    if (
      $(this)
        .closest(".scrollable-tab-wrapper")
        .find(".has-arrows")
        .hasClass("arrows-visible")
    ) {
      var pos = $(this)
        .closest(".scrollable-tab-wrapper")
        .find(".nav-tabs .nav-link.active")
        .closest("li")
        .position().left;
      var currentscroll = $(this)
        .closest(".scrollable-tab-wrapper")
        .find(".nav-tabs")
        .scrollLeft();
      var divwidth = $(this)
        .closest(".scrollable-tab-wrapper")
        .find(".nav-tabs")
        .width();
      pos = pos + currentscroll - divwidth / 2 + 10;
      $(this).closest(".scrollable-tab-wrapper").find(".nav-tabs").animate({
        scrollLeft: pos,
      });
    }
  });

  $(".scrollable-tab-wrapper .has-arrows .next-link").click(function () {
    var space_width_flag = true;
    var current_index;
    $(this)
      .closest(".has-arrows")
      .find(".nav-tabs li")
      .each(function () {
        if (
          $(this).outerWidth(true) + $(this).position().left >
            $(this).closest(".nav-tabs").scrollLeft() +
              $(this).closest(".nav-tabs").width() +
              60 &&
          space_width_flag
        ) {
          current_index = $(this).index();
          space_width_flag = false;
        }
      });
    var tabLinkWidth = 0;
    $(this)
      .closest(".feature-tab-links")
      .find(".nav-tabs li")
      .each(function () {
        tabLinkWidth += $(this).outerWidth(true);
      });
    totalLength = tabLinkWidth - $(this).closest(".feature-tab-links").width();
    var nextScroll =
      $(this).closest(".has-arrows").find(".nav-tabs").scrollLeft() +
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs li")
        .eq(current_index)
        .outerWidth(true);
    $(this).closest(".has-arrows").find(".prev-link").removeClass("disable");
    if (totalLength > nextScroll) {
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs")
        .animate({ scrollLeft: nextScroll }, 500);
      $(this).removeClass("disable");
    } else {
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs")
        .animate({ scrollLeft: totalLength }, 500);
      $(this).addClass("disable");
    }
  });

  $(".scrollable-tab-wrapper .has-arrows .prev-link").click(function () {
    var space_width_flag = true;
    var current_index = 0;
    $(this)
      .closest(".has-arrows")
      .find(".nav-tabs li")
      .each(function () {
        if ($(this).position().left < 0) {
          if ($(this).index() > current_index) {
            current_index = $(this).index();
          }
          space_width_flag = false;
          current_index = current_index;
        }
      });
    var prevScroll =
      $(this).closest(".has-arrows").find(".nav-tabs").scrollLeft() -
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs li")
        .eq(current_index)
        .outerWidth(true);
    $(this).closest(".has-arrows").find(".next-link").removeClass("disable");
    if (prevScroll > 0) {
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs")
        .animate({ scrollLeft: prevScroll }, 500);
      $(this).removeClass("disable");
    } else {
      $(this)
        .closest(".has-arrows")
        .find(".nav-tabs")
        .animate({ scrollLeft: 0 }, 500);
      $(this).addClass("disable");
    }
  });
  // Scrollable tabbing
  // on textbox focus ------------------------------------
  $(".fl-w .form-control")
    .on("focus", function () {
      let _this = $(this);
      _this.siblings(".fl").addClass("active focus");
    })
    .on("blur", function () {
      let _this = $(this);
      _this.siblings(".fl").removeClass("focus");
      if (_this.val().length > 0) {
        _this.siblings(".fl").addClass("active");
      } else {
        _this.siblings(".fl").removeClass("active");
      }
    });

  // on textbox value exist ------------------------------------
  if ($(".fl-w .form-control").length > 0) {
    for (let i = 0; i < $(".fl-w .form-control").length; i++) {
      if ($(".fl-w .form-control").eq(i).val().length > 0) {
        $(".fl-w .form-control").eq(i).siblings(".fl").addClass("active");
      }
    }
  }

  $(document).delegate(".drawer-btn", "click", function () {
    var _this = $(this).attr("data-drawer-btn");
    $("body").addClass("drawer-open");
    $(".drawer-main[data-drawer-wrapper='" + _this + "']").addClass("open");
    $("body").removeClass("summary-drawer-open");
  });

  $(document).delegate(".second-level-drawer-btn", "click", function () {
    var _this = $(this).attr("data-drawer-btn");
    $("body").addClass("second-level-drawer-open");
    $(".drawer-main[data-drawer-wrapper='" + _this + "']").addClass(
      "secondary-open"
    );
  });

  $(document).delegate(".third-level-drawer-btn", "click", function () {
    var _this = $(this).attr("data-drawer-btn");
    $("body").addClass("third-level-drawer-open");
    $(".drawer-main[data-drawer-wrapper='" + _this + "']").addClass(
      "third-level-open"
    );
  });

  $(".drawer-close").click(function () {
    $("body").removeClass("drawer-open");
    $(".drawer-main").removeClass("open");
  });

  $(".second-level-drawer-close").click(function () {
    $("body").removeClass("second-level-drawer-open");
    $(".drawer-main").removeClass("secondary-open");
  });

  $(".third-level-drawer-close").click(function () {
    $("body").removeClass("third-level-drawer-open");
    $(".drawer-main").removeClass("third-level-open");
  });

  //End property details drawer 13-01-25

  // 22-01-25
  $(".list-radio-group .form-check-input").on("change", function () {
    $(this)
      .closest(".list-radio-group")
      .find(".form-check-wrapper")
      .removeClass("selected-radio");
    $(this).closest(".form-check-wrapper").addClass("selected-radio");
  });
  // End 22-01-25

  // image upload file 5-2-25
  $(".image-upload-wrapper .image-upload").change(function (event) {
    const file = event.target.files[0];
    const wrapper = $(this).closest(".image-upload-wrapper");
    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Now use the wrapper reference here
        wrapper
          .find(".image-uploaded-layout .thumb")
          .html('<img src="' + e.target.result + '" alt="Image">');
      };
      reader.readAsDataURL(file);
    }
    wrapper.find(".image-uploaded-layout").removeClass("d-none");
    wrapper.find(".image-upload-checkbox").addClass("d-none");
  });
  $(".image-upload-wrapper .image-uploaded-layout .btn-delete").click(function (
    event
  ) {
    console.log($(this));
    $(this)
      .closest(".image-upload-wrapper")
      .find(".image-uploaded-layout")
      .addClass("d-none");
    $(this)
      .closest(".image-upload-wrapper")
      .find(".image-upload-checkbox")
      .removeClass("d-none");
  });
  // end image upload file 5-2-25

  // all functions here -------
  $(".primary-market-table-wrapper .slide-arrow").on("click", function () {
    $("html, body").toggleClass("toggle-events");
  });

  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
