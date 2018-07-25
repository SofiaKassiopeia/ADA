var memoryArray  = [
    "img/ada.jpg",
    "img/hop.jpg",
    "img/hop.jpg",
    "img/mae.jpg",
    "img/mae.jpg",
    "img/ada.jpg",
    "img/mar.jpg",
    "img/mar.jpg",
    "img/ch.jpg",
    "img/ch.jpg",
    "img/cs.png",
    "img/cs.png"
]

    var id =$(this).attr("id");

    $("#0").on('click', function(){
    $("#0").attr("src", desordenadas[0]);
    });
    
    $("#1").on('click', function(){
    $("#1").attr("src", desordenadas[1]);
        });
    
    $("#2").on('click', function(){
    $("#2").attr("src", desordenadas[2]);
        });

    $("#3").on('click', function(){
    $("#3").attr("src", desordenadas[3]);
        });

    $("#4").on('click', function(){
    $("#4").attr("src", desordenadas[4]);
        });

    $("#5").on('click', function(){
    $("#5").attr("src", desordenadas[5]);
    });
    $("#6").on('click', function(){
    $("#6").attr("src", desordenadas[6]);
    });

    $("#7").on('click', function(){
    $("#7").attr("src", desordenadas[7]);
        });
                
    $("#8").on('click', function(){
    $("#8").attr("src", desordenadas[8]);
        });
    
    $("#9").on('click', function(){
    $("#9").attr("src", desordenadas[9]);
        });

    $("#10").on('click', function(){
    $("#10").attr("src", desordenadas[10]);
        });

    $("#11").on('click', function(){
    $("#11").attr("src", desordenadas[11]);
        });
        
        
var desordenadas= shuffle(memoryArray)
console.log(memoryArray)

        
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j]
        a[j] = x
    }
        return a;
}
        function clickHandlers(){
            $('.card').on('click', function(){
                $(this).html('<p>'+$(this).data('cardValue')+'</p>').addClass('selected');
                memoryArray.checkMatch();
            });  
        }

     
          
       
         function checkMatch(){
        if($('.selected').length === 2){
            if($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')){
                $('.selected').each(function(){
                    $(this).animate({opacity: 0}).removeClass('unmatched');
                });
                $('.selected').each(function(){
            $(this).removeClass('selected');
            });
            memoryArray.checkWin();
            }  else {
                //flip cards back over
                setTimeout(function(){
                $('.selected').each(function() {
                $(this).html('').removeClass('selected');
                });
                }, 1000);
        }
        //remove selected card
    }

    } 
    function checkWin(){
        if($('.unmatched').length === 0){
            $('.container').html('<h1>You won!</h1>');
        }
    }

