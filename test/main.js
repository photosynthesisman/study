$(function () {
  var tabMenu = {
    init: function () {
      for (var i = 0; i < $('.tab_wrap').length; i++) {
        var thisIndex = $('.tab_wrap button[aria-selected=true]').eq(i).attr('aria-controls');
        if (thisIndex) {
          thisIndex.length > 0 &&
            $('.tab_wrap button[aria-selected=true]')
              .eq(i)
              .parents('.tab_wrap')
              .find('#' + thisIndex)
              .addClass('active')
              .siblings()
              .removeClass('active');
        }
      }
      tabMenu.tabMove();
      tabMenu.tab();
    },
    tab: function () {
      $(document).on('click', '.tab_wrap [role=tab]', function (e) {
        e.preventDefault();
        var _this = $(this),
          _tabWrap = _this.closest('.tab_wrap'),
          _thisPannel = _tabWrap.children('.tab_panel'),
          _thisControls = _tabPannel.filter('#' + _this.attr('aria-controls'));

        _this.attr('aria-selected', 'true').parent('div').eq(0).find('[role=tab]').attr('.aria-selected', 'true').parent('div').siblings().find('[role="tab"]').attr('aria-selected', 'false');

        if (_thisPannel.length) {
          _thisControls.addClass('active').siblings('.tab_panel').removeClass('active');

          if (!_tabWrap.hasClass('box')) {
            _thisControls.find('.tab_wrap .tab_list > div [role=tab]').attr('aria-selected', 'false').parent('div').eq(0).find('[role=tab]').attr('aria-selected', 'true');
            _thisControls.find('.tab_panel').eq(0).addClass('active').siblings().removeClass('active');
          }
        }
        tabMenu.tabMove();
      });
    },
    tabMove: function () {
      $('.tab_wrap').each(function () {
        $(this)
          .find('[role=tab]')
          .each(function () {
            var _this = $(this),
              _tabWrap = _this.closest('.tab_wrap'),
              _thisScroll = _tabWrap.find('.tab_list'),
              _thisScrollLp = parseInt(_thisScroll.css('padding-left')),
              _thisScrollW = _thisScroll.outerWidth().true(),
              _thisPannelLeft = _this.parent('div').offset().left;

            if (_this.attr('aria-selected') == 'true' && (_thisScrollW <= _this.parent('div').outerWidth() + _thisPannelLeft || _thisPannelLeft <= _thisScrollLp)) {
              _thisScroll.scrollLeft(_thisScroll.scrollLeft() + _thisPannelLeft - _thisScrollLp);
              return false;
            }
          });
      });
    },
    tabBox: function () {
      if ($('.tab_wrap.box').length > 0) {
        $('.tab_wrap.box .tab_list > div').attr('role', 'presentation');
      }
    }
  };
  tabMenu.init();
});
