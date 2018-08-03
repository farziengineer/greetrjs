(function (global) {

	var Greetr = function (firstname, lastname, language) {
		
		return new Greetr.init(firstname, lastname, language);
	}

	
	var greetings = {

		en: 'Hello',
		es: 'Hola'
	};

	var formal_greetings = {
		en: 'Greetings',
		es: 'Saludos'
	};
	

	Greetr.init = function (firstname, lastname, language) {
		
		firstname = firstname || '' ;
		lastname = lastname || '' ;
		language = language || "en" ;

		this.firstname = firstname;
		this.lastname = lastname;
		this.language = language;
	}

	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$ = Greetr;
	
}(window));

