$(document).ready(function(){
    $(".admonition-title").addClass("collapsible active");
    $(".admonition-title").attr("fold", "False");
    $(".admonition").css({"overflow": "hidden"});
    $(".admonition-title").click(function(){
        if ($(this).attr("fold") == "False"){
            height = $(this).height() + 12;
            $(this).parent().css({"height": height});
            $(this).attr("fold", "True");
            $(this).removeClass('active');
        } else {
            $(this).parent().css({"height": "inherit"});
            $(this).attr("fold", "False");
            $(this).addClass('active');
        }
    });
    $(".wy-breadcrumbs").append("<button id=\"fold_switch\" fold=\"False\">折叠全部注释（Fold all admonitions）</button>");
    $("#fold_switch").click(function(){
        if ($(this).attr("fold") == "False"){
            $(".admonition-title").attr("fold", "False");
            $(".admonition-title").click();
            $(this).attr("fold", "True");
            $(this).text("展开全部注释（Expand all admonitions）");
        } else {
            $(".admonition-title").attr("fold", "True");
            $(".admonition-title").click();
            $(this).attr("fold", "False");
            $(this).text("折叠全部注释（Fold all admonitions）");            
        }
    });
    pangu.spacingElementByClassName('wy-nav-content');
    pangu.spacingElementByClassName('wy-nav-side');
    if (window.location.pathname.includes('zh_hans/')) {
        $('.wy-menu').children().slice(12, 36).remove();   
        $('.wy-side-nav-search > a').attr('href', '/zh_hans');   
        $('.wy-nav-top > a').attr('href', '/zh_hans');   
    } else if (window.location.pathname.includes('zh_hant/')) {
        $('.wy-menu').children().slice(0, 12).remove();
        $('.wy-menu').children().slice(12, 24).remove();
        $('.wy-side-nav-search > a').text('簡單粗暴 TensorFlow 2').attr('href', '/zh_hant');
        $('.wy-nav-top > a').text('簡單粗暴 TensorFlow 2').attr('href', '/zh_hant');
    } else if (window.location.pathname.includes('en/')) {
        $('.wy-menu').children().slice(0, 24).remove();
        $('.wy-side-nav-search > a').text('A Concise Handbook of TensorFlow 2').attr('href', '/en');
        $('.wy-nav-top > a').text('A Concise Handbook of TensorFlow 2').attr('href', '/en');
    } else if (window.location.pathname == "/" || window.location.pathname == "/index.html" ) {
        $('.wy-menu').children().remove(); 
        $('.wy-menu').append('<ul><li class="toctree-l1"><a class="reference internal" href="/zh_hans">简体中文版</a></li><li class="toctree-l1"><a class="reference internal" href="/zh_hant">繁體中文版</a></li><li class="toctree-l1"><a class="reference internal" href="/en">English version</a></li></ul>');
    } else if (window.location.pathname.includes('zh/') && !(location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
        window.location.href = window.location.href.replace('zh/', 'zh_hans/');
    }
});