$(document).ready(function(){
    //navにマウスオーバー時に文字色変更
    $('.nav li a').each(function() {
        if($(this).hasClass("not-frame-nav")){
            $(this).hover(
                function(){
                    $(this).stop().animate({'color': '#F8DD00'},300);
                },
                function(){
                    $(this).stop().animate({'color': '#010101'},300);
                }
            )
        } else{
            $(this).hover(
                function(){
                    $(this).stop().animate({'background-color': '#F8DD00', 'color': '#FFF', 'border-color': '#111'},200);
                },
                function(){
                    $(this).stop().animate({'background-color': '#FFF', 'color': '#111', 'border-color': '#111'},200);
                }
        )};
    });



    //フェードイン
    $('.section_title').addClass("scrollanime slide-left") //セクションタイトルをフェードイン要素に変更

    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () { //scrollanimeクラス要素にフェードインを追加
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100) {
                if($(this).hasClass("slow-fadein")){
                    $(this).addClass("slowFadein") //slow-fadeinクラスなら遅い変化
                } else {
                    $(this).addClass("fadeInDown")
                };
            };
        });
    });


});
