Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'upload'});

Router.route('/results', {name: 'results'});

Router.route('/information/rosacea', {name: 'rosacea'});

Router.route('/information/keratosis', {name: 'keratosis'});

Router.route('/information/solarDamage', {name: 'solarDamage'});

Router.route('/information/acne', {name: 'acne'});

Router.route('/information/psoriasis', {name: 'psoriasis'});

Router.route('/information/moles', {name: 'moles'});