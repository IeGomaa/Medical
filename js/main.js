$(function(){

    let winH = $(window).height(),
        headH = $("header").innerHeight(),
        SlidH = $(".main-nav").innerHeight();

    $(".home").height(winH - (headH + SlidH));
    $(".image1").height(winH - (headH + SlidH));
    $(".image2").height(winH - (headH + SlidH));

});

$(document).ready(function() {

    ScrollReveal().reveal('.tagline',{ delay: 200 });
    
    $(".fa-cogs").hover(function() {
        $(".see").fadeIn(500)
    },
    function() {
        $(".see").fadeOut(500)
    })

    $(".fa-times").hover(function() {
        $(".hide").fadeIn(500)
    },
    function() {
        $(".hide").fadeOut(500)
    })

    $(".fa-shopping-cart").hover(function() {
        $(".shop").fadeIn(500)
    },
    function() {
        $(".shop").fadeOut(500)
    })

    $(".fa-cogs").click(function() {
        $(".content").animate({"right": "0vw"}),800
        $(".fa-cogs").hide(),
        $(".fa-times").show()
    })

    $(".fa-times").click(function(){
        $(".content").animate({"right": "-17vw"}),800
        $(".fa-times").hide(),
        $(".fa-cogs").show()
    })


    let oneColor = $(".one").css("backgroundColor"),
        twoColor = $(".two").css("backgroundColor"),
        threeColor = $(".three").css("backgroundColor"),
        fourColor = $(".four").css("backgroundColor"),
        fiveColor = $(".five").css("backgroundColor"),
        sixColor = $(".six").css("backgroundColor"),
        sevenColor = $(".seven").css("backgroundColor"),
        eightColor = $(".eight").css("backgroundColor"),
        nineColor = $(".nine").css("backgroundColor"),
        tenColor = $(".ten").css("backgroundColor"),
        eleColor = $(".eleven").css("backgroundColor"),
        tewColor = $(".tewelve").css("backgroundColor"),
        thiColor = $(".thirten").css("backgroundColor"),
        fouColor = $(".fourten").css("backgroundColor"),
        fivColor = $(".fiveten").css("backgroundColor"),
        siColor = $(".sixten").css("backgroundColor"),
        sevColor = $(".seventen").css("backgroundColor"),
        eiColor = $(".eighten").css("backgroundColor");

    $(".one").click(function(){

        $(".to").css({
            "backgroundColor":oneColor,
            "borderColor":oneColor
        })

        $(".for").css({
            "color":oneColor,
            "borderColor":oneColor
        })

        $(".overlay").css({
            "backgroundColor":oneColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":oneColor,
                "borderColor":oneColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":oneColor,
        })

        $(".ibra").css("color",oneColor)


    })
    

    $(".two").click(function(){

        $(".to").css({
            "backgroundColor":twoColor,
            "borderColor":twoColor
        })

        $(".for").css({
            "color":twoColor,
            "borderColor":twoColor
        })

        $(".overlay").css({
            "backgroundColor":twoColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":twoColor,
                "borderColor":twoColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":twoColor,
        })

        $(".ibra").css("color",twoColor)


    })

    $(".three").click(function(){

        $(".to").css({
            "backgroundColor":threeColor,
            "borderColor":threeColor
        })

        $(".for").css({
            "color":threeColor,
            "borderColor":threeColor
        })

        $(".overlay").css({
            "backgroundColor":threeColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":threeColor,
                "borderColor":threeColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })


        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":threeColor,
        })

        $(".ibra").css("color",threeColor)


    })

    $(".four").click(function(){

        $(".to").css({
            "backgroundColor":fourColor,
            "borderColor":fourColor
        })

        $(".for").css({
            "color":fourColor,
            "borderColor":fourColor
        })

        $(".overlay").css({
            "backgroundColor":fourColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":fourColor,
                "borderColor":fourColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":fourColor,
        })

        $(".ibra").css("color",fourColor)

    })

    $(".five").click(function(){

        $(".to").css({
            "backgroundColor":fiveColor,
            "borderColor":fiveColor
        })

        $(".for").css({
            "color":fiveColor,
            "borderColor":fiveColor
        })

        $(".overlay").css({
            "backgroundColor":fiveColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":fiveColor,
                "borderColor":fiveColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":fiveColor,
        })

        $(".ibra").css("color",fiveColor)


    })

    $(".six").click(function(){

        $(".to").css({
            "backgroundColor":sixColor,
            "borderColor":sixColor
        })

        $(".for").css({
            "color":sixColor,
            "borderColor":sixColor
        })

        $(".overlay").css({
            "backgroundColor":sixColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":sixColor,
                "borderColor":sixColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":sixColor,
        })

        $(".ibra").css("color",sixColor)

    })

    $(".seven").click(function(){

        $(".to").css({
            "backgroundColor":sevenColor,
            "borderColor":sevenColor
        })

        $(".for").css({
            "color":sevenColor,
            "borderColor":sevenColor
        })

        $(".overlay").css({
            "backgroundColor":sevenColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":sevenColor,
                "borderColor":sevenColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":sevenColor,
        })

        $(".ibra").css("color",sevenColor)

    })
        
    $(".eight").click(function(){

        $(".to").css({
            "backgroundColor":eightColor,
            "borderColor":eightColor
        })

        $(".for").css({
            "color":eightColor,
            "borderColor":eightColor
        })

        $(".overlay").css({
            "backgroundColor":eightColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":eightColor,
                "borderColor":eightColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":eightColor,
        })

        $(".ibra").css("color",eightColor)

    })
        
    $(".nine").click(function(){

        $(".to").css({
            "backgroundColor":nineColor,
            "borderColor":nineColor
        })

        $(".for").css({
            "color":nineColor,
            "borderColor":nineColor
        })

        $(".overlay").css({
            "backgroundColor":nineColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":nineColor,
                "borderColor":nineColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":nineColor,
        })

        $(".ibra").css("color",nineColor)

    })


    $(".ten").click(function(){

        $(".to").css({
            "backgroundColor":tenColor,
            "borderColor":tenColor
        })

        $(".for").css({
            "color":tenColor,
            "borderColor":tenColor
        })

        $(".overlay").css({
            "backgroundColor":tenColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":tenColor,
                "borderColor":tenColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":tenColor,
        })

        $(".ibra").css("color",tenColor)

    })

    $(".eleven").click(function(){

        $(".to").css({
            "backgroundColor":eleColor,
            "borderColor":eleColor
        })

        $(".for").css({
            "color":eleColor,
            "borderColor":eleColor
        })

        $(".overlay").css({
            "backgroundColor":eleColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":eleColor,
                "borderColor":eleColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":eleColor,
        })

        $(".ibra").css("color",eleColor)

    })


    $(".tewelve").click(function(){

        $(".to").css({
            "backgroundColor":tewColor,
            "borderColor":tewColor
        })

        $(".for").css({
            "color":tewColor,
            "borderColor":tewColor
        })

        $(".overlay").css({
            "backgroundColor":tewColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":tewColor,
                "borderColor":tewColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":tewColor,
        })

        $(".ibra").css("color",tewColor)

    })


    $(".thirten").click(function(){

        $(".to").css({
            "backgroundColor":thiColor,
            "borderColor":thiColor
        })

        $(".for").css({
            "color":thiColor,
            "borderColor":thiColor
        })

        $(".overlay").css({
            "backgroundColor":thiColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":thiColor,
                "borderColor":thiColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":thiColor,
        })

        $(".ibra").css("color",thiColor)

    })


    $(".fourten").click(function(){

        $(".to").css({
            "backgroundColor":fouColor,
            "borderColor":fouColor
        })

        $(".for").css({
            "color":fouColor,
            "borderColor":fouColor
        })

        $(".overlay").css({
            "backgroundColor":fouColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":fouColor,
                "borderColor":fouColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":fouColor,
        })

        $(".ibra").css("color",fouColor)

    })


    $(".fiveten").click(function(){

        $(".to").css({
            "backgroundColor":fivColor,
            "borderColor":fivColor
        })

        $(".for").css({
            "color":fivColor,
            "borderColor":fivColor
        })

        $(".overlay").css({
            "backgroundColor":fivColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":fivColor,
                "borderColor":fivColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":fivColor,
        })

        $(".ibra").css("color",fivColor)

    })


    $(".sixten").click(function(){

        $(".to").css({
            "backgroundColor":siColor,
            "borderColor":siColor
        })

        $(".for").css({
            "color":siColor,
            "borderColor":siColor
        })

        $(".overlay").css({
            "backgroundColor":siColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":siColor,
                "borderColor":siColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":siColor,
        })

        $(".ibra").css("color",siColor)

    })


    $(".seventen").click(function(){

        $(".to").css({
            "backgroundColor":sevColor,
            "borderColor":sevColor
        })

        $(".for").css({
            "color":sevColor,
            "borderColor":sevColor
        })

        $(".overlay").css({
            "backgroundColor":sevColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":sevColor,
                "borderColor":sevColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":sevColor,
        })

        $(".ibra").css("color",sevColor)

    })


    $(".eighten").click(function(){

        $(".to").css({
            "backgroundColor":eiColor,
            "borderColor":eiColor
        })

        $(".for").css({
            "color":eiColor,
            "borderColor":eiColor
        })

        $(".overlay").css({
            "backgroundColor":eiColor,
            "opacity":".6"
        })

        $(".navbar-light .norm").mouseenter(function() {
            $(".navbar-light .norm:hover").css({
                "color":eiColor,
                "borderColor":eiColor
            })
        })

        $(".navbar-light .norm").mouseleave(function() {
            $(".navbar-light .norm").css({
                "color":"rgba(0,0,0,.5)",
                "borderColor":"transparent"
            })
        })

        $(".navbar-light .navbar-nav .active > .nav-link").css({
                "color":eiColor,
        })

        $(".ibra").css("color",eiColor)

    })

})
