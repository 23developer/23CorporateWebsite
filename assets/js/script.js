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


    // SNSアイコンにホバー時、準備中メッセージ表示
    $('#sns-setting-up-message').hide()
    $('.sns-icon').hover(
        function() {
            $('#sns-setting-up-message').show();
        }, function() {
            $('#sns-setting-up-message').hide();
        }
    );
    

    // ドロワーメニュー有効化
    $('.drawer').drawer();
    $('.drawer-menu li').on('click', function() {
        $('.drawer').drawer('close');
    });


    // formの内容をGoogleformへajax送信
    // $('#ajax').on('click',function(){
    //     // var name = 

    //     $.ajax({
    //         url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScTYYAUyyrIaRm7lbWuf0p2ZtT6wxdRUiWQJ6Jfm-cgxPiPkA/formResponse',
    //         type: 'POST',
    //         data: {
    //             "entry.698167586": "asd",
    //             "entry.393581839": "a@a",
    //             "entry.1369150218": "as"
    //         },
    //         dataType: "xml",    
    //     }).done(function(data) {
    //         alert("ok");
    //     }).fail(function(XMLHttpRequest, textStatus, errorThorown) {
    //         alert("error");
    //     })
    // });
});
