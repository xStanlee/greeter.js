(function(global, $='') {
    
    // 'new' an instance of object
    var greeter = function(firstName, lastName, language) {
        return new greeter.init(firstName, lastName, language);
    }
    
    // hidden within the scope of the IIFE and never directly accessible. Encapsulated
    var supportedLangs = ['en', 'es', 'fr', 'ru', 'it', 'jp', 'pl', 'de', 'pt', 'kr', 'ar', 'dn', 'sw', 'gr', 'sv'];
    
    var greetings = {
        en: 'Hello',
        en: 'Hola',
        fr: 'Bonjour',
        ru: 'Privet',
        it: 'Ciao',
        jp: 'Yā, Yō',
        pl: 'Cześć',
        de: 'Hallo',
        pt: 'Oi',
        kr: 'Anyoung',
        ar: 'Ahlan',
        dn: 'Halløj',
        sw: 'Hujambo',
        gr: 'Yassou',
        sv: 'Tjena'
    }
    
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        fr: 'Salut',
        ru: 'Zdravstvuyte',
        it: 'Salve',
        jp: 'Konnichiwa',
        pl: 'Dzień dobry',
        de: 'Guten Tag',
        pt: 'Olá',
        kr: 'Anyoung haseyo',
        ar: 'Asalaam alaikum',
        dn: 'Goddag',
        sw: 'Shikamoo',
        gr: 'Yassas',
        sv: 'God dag'
    }
    
    var logMessages = {
        en: 'Register in'
    }
    
    greeter.prototype = {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Unrecognized language";
            }
        },
        
        greeting() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },
        
        formalGreeting() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        setMessage(formal) {
            var msg;
            
            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            return msg;
        },
        
        greet(formal) {
            var msg = this.setMessage(formal);
            
            if(console) {
                console.log(msg);
            }
            
            return this;
        },
        
        log() {
            if(logMessages[this.language] === -1) { this.language = 'en'}
            if(console){console.log(logMessages[this.language] + ': ' + this.fullName());}
            
            return this;
        },
        
        setLang(lang) {
            this.language = lang;
            this.validate();
            
            return this;
        },
        
        // working only with jQuery lib.
        HTMLGreeting(selector, formal) {
            if (!$) { throw 'jQuery not loaded! Pass as 2nd parameter and link to HTML flie.' };
            if (!selector) { throw 'Missing jQuery selector.' };
            
            var msg = setMessage(formal);
            
            // inject the message in the chosen place in the DOM. To the DOM Element
            $(selector).html(msg);
            
            // make chainable
            return this;                     
        }
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'. Used return new instance pattern.
    greeter.init = function(firstName, lastName, language) {
        
        var self = this;
        
        self.firstName = firstName || 'John',
        self.lastName = lastName || 'Smith',
        self.language = language || 'en'
    }
    
    // trick borrowed from jQuery so we do not need to use the new keyword
    greeter.init.prototype = greeter.prototype;
    
    // attach our greeter to the global object, and provide a shorthand 'G$' for ease our poor fingers.
    global.greeter = global.G$ = greeter;
    
})(window); //as 2nd parameter you can use add jQuery object.
            //usage -> g = G$(firstname, lastname, language)
