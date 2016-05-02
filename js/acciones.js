//JavaScript
	
$(document).ready(function(e){
	$('#principal1'). height($('#page1').height());//calcular el alto de la pantalla del dispositivo 	
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('hie','audio/selva/HIE.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('jir','audio/selva/JIR.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('leo','audio/selva/LEO.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('lep','audio/selva/LEP.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('mon','audio/selva/MON.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('oso','audio/selva/OSO.mp3',function(){},function(e){alert('Error '+e);});
		//REPRODUCIR LAS NOTAS
		
		$('.animalin').bind('touchstart',function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
		
		$('.animalin').bind('touchend',function(){$(this).removeClass('tocada');});
		
   
	
	},false); //deviceready
});//ready