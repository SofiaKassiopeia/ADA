var BoxAbierta = "";
var ImgAbierta = "";
var Contador = 0;
var ImgEncontrado = 0;

var Cards = "#cards";

var ImgSource = [
    "img/ada.jpg",
    "img/hop.jpg",
    "img/mae.jpg",
    "img/mar.jpg",
    "img/ch.jpg",
    "img/cs.png",
];

$(".extra").hide();

function Menu() {
			e.preventDefault();
			if($('.player-name').val() !== '') {
				app.player = $('.player-name').val();
				app.clickHandlers();
				app.startTime = new Date();
				console.log(app.startTime);
			} else {
				$('input[type=text]').addClass('shake');
				setTimeout(function() { $('input[type=text]').removeClass('shake'); }, 500);
				$(".extra").show();
				return false;
			}
			$('.menu').fadeOut();
		}

function RandomFunction(ValorMax, ValorMin) {
		return Math.round(Math.random() * (ValorMax - ValorMin) + ValorMin);
	}
	
function Shuffle() {
	var AllImg = $(Cards).children();
	var ThisImg = $(Cards + " div:first-child");
	var ArrayImg = new Array();

	for (var i = 0; i < AllImg.length; i++) {
		ArrayImg[i] = $("#" + ThisImg.attr("id") + " img").attr("src");
		ThisImg = ThisImg.next();
	}
	
		ThisImg = $(Cards + " div:first-child");
	
	for (var z = 0; z < AllImg.length; z++) {
	var RandomNumber = RandomFunction(0, ArrayImg.length - 1);

		$("#" + ThisImg.attr("id") + " img").attr("src", ArrayImg[RandomNumber]);
		ArrayImg.splice(RandomNumber, 1);
		ThisImg = ThisImg.next();
	}
}

function ResetGame() {
	Shuffle();
	$(Cards + " div img").hide();
	$(Cards + " div").css("visibility", "visible");
	Contador = 0;
	$("#success").remove();
	$("#Contador").html("" + Contador);
	$("#cards").show();
	BoxAbierta = "";
	ImgAbierta = "";
	ImgEncontrado = 0;
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Cards + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');

		if (ImgAbierta == "") {
			BoxAbierta = id;
			ImgAbierta = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Cards + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgAbierta != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxAbierta + " img").slideUp('fast');
					BoxAbierta = "";
					ImgAbierta = "";
				}, 400);
			} else {
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + BoxAbierta + " img").parent().css("visibility", "hidden");
				ImgEncontrado++;
				BoxAbierta = "";
				ImgAbierta = "";
			}
			setTimeout(function() {
				$(Cards + " div").bind("click", OpenCard)
			}, 400);
		}
		Contador++;
		$("#Contador").html("" + Contador);

		if (ImgEncontrado == ImgSource.length) {
			$("#Contador").prepend('<span id="success">Encontraste todas las parejas con </span>');
		}else if(
			Contador == 24){
			$("#Contador").prepend('<span id="success">Que pena, ya tienes mas que </span>');
			$("#cards").hide();
			}
	}
}

$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Cards).append("<div id=card" + y + i + "><img src=" + val + " />");
	});
}
	$(Cards + " div").click(OpenCard);
	Shuffle();
});