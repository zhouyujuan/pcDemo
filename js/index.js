$(document).ready(function() {
    // 导航的下拉框的显示和隐藏
    // $(".tabpull").hover(function(){
    //  var urlNode = $(this).next("ul");
    //  urlNode.slideToggle();

    // })


    $(".tabpull").hover(function() {
            $(this).children("ul").toggle();

        })
        // 导航选项的字体颜色的变化
    $(".tabpull>a").mouseenter(function() {

        $(this).addClass("tabFirst");
        $(".tabpull .img").css({ "background": "url(../images/nav_selectdown.jpg)", "backgroundSize": "10px 5px" });
    })

    $(".tabpull>a").mouseleave(function() {
        $(".tabFirst").removeClass();
        $(".tabpull .img").css({ "background": "url(../images/nav_down.jpg)", "backgroundSize": "10px 5px" })
    })

    //最新，课程类型，内容类型，难度等级 hover
    $(".RhPullDown").hover(function() {
        $(this).children("ul").toggle();

    })

    //搜索框绑定事件

    $(".tabpull.search .headerSearch").click(function() {
        $(".tabpull.search .showSearch").fadeIn(1000);
    });


    $(".tabpull.search .showSearch .del").click(function() {

        $(".tabpull.search .showSearch").fadeOut(1000);
    })




    // 主题课程展示加载
    $("#contentBodyReal").load("../index/body1.html");

    $(".changeDouble").click(function() {
        $("#contentBodyReal").load("../index/body1.html");
    })

    $(".changeSignal").click(function() {
        $("#contentBodyReal").load("../index/body2.html");
    })


    //最新的刷新
    $(".zuiNew li").each(function(index) {

        $(this).click(function() {
            // alert("1");
            if (index == 0) {
                //刷新当前界面
                window.location.reload();

            } else if (index == 1) {
                window.location.reload();
            }
        })

    })

    // 课程分类
    $(".courseTypeul li").each(function(index) {
        $(this).click(function() {
            // alert("1");
            if (index == 0) {
                //刷新当前界面
                window.location.reload();

            } else if (index == 1) {

                window.location.reload();

            } else if (index == 2) {

                window.location.reload();

            } else if (index == 3) {

                window.location.reload();
            }
        })
    })

    //内容类型
    $(".contentTypeUl li").each(function(index) {
        $(this).click(function() {
            // alert("1");
            if (index == 0) {
                //刷新当前界面
                window.location.reload();

            } else if (index == 1) {

                window.location.reload();

            } else if (index == 2) {

                window.location.reload();

            }
        })
    })

    //难度等级
    $(".lastUlpw li").each(function(index) {
        $(this).click(function() {
            // alert("1");
            if (index == 0) {
                //刷新当前界面
                window.location.reload();
            } else if (index == 1) {
                window.location.reload();
            } else if (index == 2) {
                window.location.reload();
            } else if (index == 3) {
                window.location.reload();
            }
        })
    })

    //返回顶部
    $(window).scroll(function() {

        $(".backTop").css("display", "block");
    })

    $(".backTop").hover(function() {

        $(this).css({ "background": "url(../images/backhover.png) center no-repeat", "backgroundSize": "33px 33px" });
    }, function() {
        $(".backTop").css({ "background": "url(../images/backnormal.png) center no-repeat", "backgroundSize": "33px 33px", "display": "none" });
    })


    $(".backTop").click(function() {

        // $(window).scrollTop(0, 0);
        // animate({scrollTop: '0px'}, 800)
        $('html,body').animate({scrollTop: '0px'}, 800);

    })




})
