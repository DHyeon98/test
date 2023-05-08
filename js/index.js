$(function() {
    // 메뉴 호버시 서브메뉴 나타남
    $('.main_menu').hover(function() {
        let this_sub = $(this.childNodes[3]);
        $('.main_menu > a').css('color', '#aaaaaa');
        $(this.children).css('color', '#05A4BC');
        timeoutId = setTimeout(function() {
            this_sub.fadeIn(300);
        }, 500);
    },
    function() {
        let this_sub = $(this.childNodes[3]);
        $('.main_menu > a').css('color', '#212121');
        $(this.children).css('color', '#212121');
        clearTimeout(timeoutId);
        this_sub.fadeOut(300);
    })

    // 서브메뉴 텍스트 호버시 라인 애니메이션
    $('.sub_menu_text').hover(function() {
        let this_hover = $(this.childNodes[3]);
        timeoutId = setTimeout(function() {
            this_hover.animate({
                width: '100%'
            }, 200)
        }, 300);
    }, function() {
        clearTimeout(timeoutId);
        $(this.childNodes[3]).animate({
            width: '0px'
        }, 200)
    })

    // 버튼 클릭시 해당 차트로 변함
    // 금일 단말유형별 개통 건수
    $('.opening').hide();
    $('#today_opening').show();
    $('.situation_btn').click(function() {
        if($('#today_opening').is(':visible') == false) {
            $('.situation_btn').addClass('on');
            $('.situation_btn').removeClass('off');
            $('.circulation_btn').removeClass('on');
            $('.circulation_btn').addClass('off');
            $('.opening').hide();
            $('#today_opening').show();
        }
    })
    $('.circulation_btn').click(function() {
        if($('#circulation_opening').is(':visible') == false) {
            $('.circulation_btn').addClass('on');
            $('.circulation_btn').removeClass('off');
            $('.situation_btn').removeClass('on');
            $('.situation_btn').addClass('off');
            $('.opening').hide();
            $('#circulation_opening').show();
        }
    })

    // 장기미사용 단말
    $('.unused').hide();
    $('#category_chart').show();
    $('.category_btn').click(function() {
        if($('#category_chart').is(':visible') == false) {
            $('.unused_btn').removeClass('on');
            $('.unused_btn').addClass('off');
            $('.category_btn').addClass('on');
            $('.category_btn').removeClass('off');
            $('.unused').hide();
            $('#category_chart').show();
        }
    })
    $('.period_btn').click(function() {
        if($('#period_chart').is(':visible') == false) {
            $('.unused_btn').removeClass('on');
            $('.unused_btn').addClass('off');
            $('.period_btn').addClass('on');
            $('.period_btn').removeClass('off');
            $('.unused').hide();
            $('#period_chart').show();
        }
    })
    $('.region_btn').click(function() {
        if($('#region_opening').is(':visible') == false) {
            $('.unused_btn').removeClass('on');
            $('.unused_btn').addClass('off');
            $('.region_btn').addClass('on');
            $('.region_btn').removeClass('off');
            $('.unused').hide();
            $('#region_chart').show();
        }
    })
})