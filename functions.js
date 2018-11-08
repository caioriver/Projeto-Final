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

// Slide Tela Cheia
$(window).load(function() {    
	var theWindow = $(window),
	    $bg = $("#bg"),
	    aspectRatio = $bg.width() / $bg.height();    			    		
	function resizeBg() {	
		if((theWindow.width()/theWindow.height())<aspectRatio){
		    $bg.removeClass().addClass('bgheight');
		}else{
		    $bg.removeClass().addClass('bgwidth');
		}				
	}                   			
	theWindow.resize(resizeBg).trigger("resize");
});
