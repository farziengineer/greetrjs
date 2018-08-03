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

	Greetr.prototype = {

		full_name: function () {

			return this.firstname + ' ' + this.lastname ; 
		},

		validate: function () {
			if(this.language !== 'es' and this.language !== 'en'){
				throw "Invalid language";
			}
		},

		greeting: function () {
			return greetings[this.language] + ' ' this.firstname + ' ' this.lastname;
		},

		formal_greeting: function() {
			return formal_greetings[this.language] + ' ' + this.firstname + ' ' + this.lastname ;
		}
	}


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

