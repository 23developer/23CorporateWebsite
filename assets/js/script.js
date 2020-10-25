$(document).ready(function(){
    
    
    // membersにOther membersボタンを実装
    $('.see_more_button').on('click',function() {
        $('.see_more_button').addClass("hide_contents");
        $('.member').each(function() {
            if($(this).hasClass("hide_contents")) {
                $(this).removeClass("hide_contents");
            }
        });
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
        
        
        // スマホの時のみドロワーメニュー有効化
        $('.drawer').drawer();
        $('.drawer-menu li').on('click', function() {
            $('.drawer').drawer('close');
        });
        
        
        //formの内容をGoogleformへajax送信
        $("#googleforme").submit(function() {
            var name = $("#name").val();
            var email = $("#email").val();
            var msg = $("#msg").val();

            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScTYYAUyyrIaRm7lbWuf0p2ZtT6wxdRUiWQJ6Jfm-cgxPiPkA/formResponse",
                data: {"entry.698167586": name, "entry.393581839": email, "entry.1369150218": msg},
                type: "POST",
                dtaatype: "xml",
                statuscode: {
                    0: function() {
                        alert("送信が完了しました。");
                        window.location().href="https://google.com";
                    },
                    200: function() {
                        alert("error");
                        window.location().href="https://google.com";
                    }
                }
            });
            event.preventDefault();
        });


        // navにマウスオーバー時に文字色変更
        $('.hover-contents').each(function() {
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
    });
    