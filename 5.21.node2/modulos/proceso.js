exports.signo = function(m,d){

    let day = parseInt(d);
    
    if(isNaN(day)||day>31){ return "Ingrese un dia valido";}else{

	switch(m){

		case '1': 
			if( day >= 20){

				return "Acuarius";
			
			}else{

				return "Capricorn";
			}

		break;

		case '2': 
			if( day >= 18){

				return "Pisces";
			
			}else{

				return "Acuarius";
			}

		break;

		case '3': 
			if( day >= 20){

				return "Aries";
			
			}else{

				return "Pisces";
			}

		break;

		case '4': 
			if( day >= 19){

				return "Taurus";
			
			}else{

				return "Aries";
			}

		break;

		case '5': 
			if( day >= 20){

				return "Gemini";
			
			}else{

				return "Taurus";
			}

		break;

		case '6': 
			if( day >= 20){

				return "Cancer";
			
			}else{

				return "Gemini";
			}

		break;

		case '7': 
			if( day >= 22){

				return "Leo";
			
			}else{

				return "Cancer";
			}

		break;

		case '8': 
			if( day >= 22){

				return "virgo";
			
			}else{

				return "Leo";
			}

		break;

		case '9': 
			if( day >= 22){

				return "Libra";
			
			}else{

				return "Virgo";
			}

		break;

		case '10': 
			if( day >= 22){

				return "Scorpio";
			
			}else{

				return "Libra";
			}

		break;

		case '11': 
			if( day >= 21){

				return "Sagittarius";
			
			}else{

				return "Scorpio";
			}

		break;

		case '12': 
			if( day >= 21){

				return "Capricorn";
			
			}else{

				return "Sagittarius";
			}

        break;
        
        default: 
        return "ningun signo, mes invalido";

        break;

	}
}

}

/*Aries Horoscope Dates (March 21-April 19)

Taurus Horoscope Dates (April 20-May 20)

Gemini Horoscope Dates May 21-June 20)

Cancer Horoscope Dates June 21-July 22)

Leo Horoscope Dates (July 23-August 22)

Virgo Horoscope Dates (August 23-September 22)

Libra Horoscope Dates (September 23-October 22)

Scorpio Horoscope Dates (October 23-November 21)

Sagittarius Horoscope Dates (November 22-December 21)

Capricorn Horoscope Dates (December 22-January 19)

Aquarius Horoscope Dates (January 20 to February 18)

Pisces Horoscope Dates (February 19 to March 20)*/