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
];
var desordenadas= shuffle(memoryArray)
console.log(memoryArray)


    //$('.click').click(function(){
    //$(".back").flip();
    var id =$(this).attr("id");
    //$(this).attr("id", memoryArray[0]); //change the attribute

    console.log(id) 

    //});


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
        
        
        
        function newGame(){
            mezclar(memoryArray);
        }
        
        
        
           
        
        //function match(){
        
        
        //objeto: si la imagen clickeada tiene tal atributo
        
          //var banderita = true;
        /*
            var primerClick= (desordenadas).on(‘click’);
            ;
        
            var segundoClick= $(‘img’, ‘src’).on(‘click’);
        
           console.log(primerClick);
        
        
            if(banderita){
        
                primerClick === segundoClick;
                banderita = false; //resetea el valor de banderita
        
                console.log(“It’s a Match!“)
            }else{
        
                primerClick !== segundoClick;
                banderita = true; // si es distinto (es como un switch)
        
                console.log(“NO!“)
            }
        
        }
        
        */
        
        $('img').on('click', function(){
            console.log('img'.val)
        
            var primerClick= $('src',this).on('click');
            var segundoClick= $('src', this). on('click');
        
            var banderita = true
        
            console.log(primerClick);
        
             if(primerClick === segundoClick && banderita){
        
                 console.log('match');
             }else {
        
                 console.log('NO')
        
             }
        })
        
        
        var imgSrc = $(this).attr('src')//    mono.png
        
        var segundoClick = $(this).attr('src');
        
        
        
        
           
        
            //}
        /*
            if()
        
                $(‘#img1’).on(‘click’, function(){
                     banderita= true
               $(‘#img1’).attr(“src”, desordenadas[0]);
               });
        }
        */
        
        
        
        /*
        stefi  
        
        $(‘img’).on(‘click’, function(e){
            var id = e.target.id;
            console.log(id);
            $(‘#’+id).attr(‘src’,desordenadas[0])
        })
        
        */
    
  


function guardar (){
var guarda2Pics = [];
$(this).data("id")

}


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

/*if (count < 2) {
    count++;
    clicked.classList.add('selected');
  }*/

/*
.on click {src="bla.jpg"
anterior = this
second click
 = $(this)
if(primer==true){
    anterior=$(this)
    primer=false
}else{
    actual=$(this) //match ok / error
    primer=true
}

var primer // guarda imagen del primer y segundo click y compara si so iguales
*/