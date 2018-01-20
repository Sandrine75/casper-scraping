var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('https://deercoders.com');


casper.then(function(){
    var email = this.evaluate(function () {
        return document.querySelector('#email').innerHTML;
    });

    this.captureSelector('email.png', '#email');

    this.echo(email);
});

casper.run();