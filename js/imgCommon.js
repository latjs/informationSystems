// 删除
$(function () {
    $('.i_uls li .dele').each(function (k) {
        $(this).click(function () {
            $('.i_uls li').eq(k).remove();
        });
    });
});