// APARECER CAIXA DE CONTATOS
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.sidebar-contact').toggleClass('active')
        $('.img-toggle').toggleClass('active')
    });
});

// ANIMAÇÃO DOS TEXTOS DA CAIXA DE CONTATOS
$(".input").focus(function(){
    $(this).parent().addClass("focus");
}).blur(function(){
    if($(this).val()===''){
        $(this).parent().removeClass("focus")
    }
});

// ANIMAÇÃO DOS TEXTOS DA CAIXA DE CONTATOS
$(".entrada").focus(function(){
    $(this).parent().addClass("foco");
}).blur(function(){
    if($(this).val()===''){
        $(this).parent().removeClass("foco")
    }
});