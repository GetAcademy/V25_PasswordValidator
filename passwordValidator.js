function validatePassword() {
    return {
        isValidLength: true, // true hvis passordet er mellom 8 og 32 tegn
        hasUppercaseLetters: true, // true hvis det er minst en stor bokstav
        hasLowercaseLetters: true, // true hvis det er minst en liten bokstav
        hasDigit: true, // true hvis det er minst ett tall
        hasSpecialCharacter: true, // true hvis det er minst ett spesielttegn (! # ¤ % & etc)
        isValid: true // true hvis alle over er true
    }
}

function isDigit(character) {
    return character >= '0' && character <= '9';
}

function isLetter(character) { 
	return character.toLowerCase() != character.toUpperCase(); 
}