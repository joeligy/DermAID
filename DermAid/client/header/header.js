Template.header.events({
	'click a': function(event, self) {
		self.$('.dermaid-menu').children().removeClass('active');
		self.$(event.target).addClass('active');
	}
});