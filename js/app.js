App = Ember.Application.create();

App.Router.map(function(){
	this.resource("markdown");
});

App.MarkdownRoute = Ember.Route.extend({
  model: function() {
  }
})

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  if (input == undefined)
    return "";
	return new Handlebars.SafeString(showdown.makeHtml(input));
});