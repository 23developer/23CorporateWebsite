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
                    $(this).stop().animate({'background-color': 'transparent', 'color': '#111', 'border-color': '#111'},200);
                }
        )};
    });


    // フェードイン
    $('.section_title').addClass("scrollanime slide-left") // セクションタイトルを左からフェードイン
    $('.bold_sentence').addClass("scrollanime") // bold-sentenceクラスをフェードイン

    // 画面スクロール時
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () { // scrollanimeクラス要素にフェードインを追加
            const targetPosition = $(this).offset().top;
            if(scrollAmount + wHeight - 100 > targetPosition && targetPosition > scrollAmount) { // 要素が画面内にあるか判定
                if($(this).hasClass("slow-fadein")){
                    $(this).addClass("slowFadein") // slow-fadeinクラスなら遅い変化
                } else {
                    $(this).addClass("fadeInDown")
                };
            };
        });
    });

    // リロード時(画面ストローク時と同じ処理だからできればまとめたい)
    $(window).on("load",function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () { // scrollanimeクラス要素にフェードインを追加
            const targetPosition = $(this).offset().top;
            if(scrollAmount + wHeight - 100 > targetPosition && targetPosition > scrollAmount) { // 要素が画面内にあるか判定
                if($(this).hasClass("slow-fadein")){
                    $(this).addClass("slowFadein") // slow-fadeinクラスなら遅い変化
                } else {
                    $(this).addClass("fadeInDown")
                };
            };
        });
    });

});
