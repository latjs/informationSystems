$(function(){
    // tab切换
    $('.content .menu a').each(function(k){
        $(this).click(function(){
            $('.content .menu a').removeClass('active').eq(k).addClass('active');
            $('.content .hover .hover_box').removeClass('active').eq(k).addClass('active');
        })
    })

    // 删除
    $('table tr td span:last-child').each(function(k){
        $(this).click(function(){
            $('table tr td span:last-child').eq(k).parents('tr').remove();
        })
    })
})