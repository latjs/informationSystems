$(function(){
    // 删除节点
    $('table tr td:last-child img').each(function(k){
        $(this).click(function(){
            $('table tr td:last-child img').eq(k).parents('tr').empty();
        })
    })
})