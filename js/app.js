App = Ember.Application.create();

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  if (input == undefined)
    return "";
  return new Handlebars.SafeString(showdown.makeHtml(input));
});