function validatePassword(password) {
    return {
        isValidLength: true, // true hvis passordet er mellom 8 og 32 tegn
        hasUppercaseLetter: true, // true hvis det er minst en stor bokstav
        hasLowercaseLetter: true, // true hvis det er minst en liten bokstav
        hasDigit: true, // true hvis det er minst ett tall
        hasSpecialCharacter: true // true hvis det er minst ett spesielttegn (! # ¤ % & etc)        
    }
}

function isDigit(character) {
    return character >= '0' && character <= '9';
}

function isLetter(character) { 
	return character.toLowerCase() != character.toUpperCase(); 
}