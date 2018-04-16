$(function(){
    // 导航切换
    // $(".listbox li").click(function(){
    //     // $(".listbox li .active").removeClass("active")
    //     $(this).addClass("active");
    // });

    $('.listbox li').each(function(k,v){
        $(this).click(function(){
            $('iframe').css('display','none').eq(k).css("display","block");

            $('.listbox li').removeClass("active").eq(k).addClass("active");
        })
    });


    $('.listnone').click(function(){
        $('.leftlist').toggle();
    });

    $('.title').click(function(){
        var $ul = $(this).next('ul');
        $('dd').find('ul').slideUp();
        if($ul.is(':visible')){
            $(this).next('ul').slideUp();
        }else{
            $(this).next('ul').slideDown();
        }
    });
})
