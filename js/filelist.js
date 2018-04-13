$(document).ready(function () {

    $('.f-details').mouseover(function (event) {
        event.stopPropagation();
        /* 鼠标进入事件 */
        $(this).addClass("act").css({ 'background': '#f8fbfd', 'border':'1px solid #b8d6fb'});

    })

        .mouseout(function (event) {
            /* 鼠标离开事件 */
            event.stopPropagation();
            $(this).toggleClass("act").css({ 'background': '', 'border': '1px solid white' });
        });
}); 