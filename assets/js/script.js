$(document).ready(function(){
    //navのマウスオーバー時の処理
    $(".nav").on("mouseover",function(){
        $("#typo").css({
            color: "#4dc0b2",
            backgroundColor: "#ffc042"
        });
    });

    //マウスアウトしたときに元の色に戻る
    $("#typo").on("mouseout",function(){
        $("#typo").css({
            color: "",
            backgroundColor: ""
        });
    });



    $('.section_title').addClass("scrollanime slide-left")

    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100) {
                if($(this).hasClass("slow-fadein")){
                    $(this).addClass("slowFadein")
                } else {
                    $(this).addClass("fadeInDown")
                }
            }
        })
    })


});
