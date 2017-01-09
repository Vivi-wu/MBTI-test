(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['choice'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<li>\n	<label><input type=\"radio\" name=\""
    + alias2(alias1((depths[1] != null ? depths[1].prefix : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\"true\">"
    + alias2(((helper = (helper = helpers.A || (depth0 != null ? depth0.A : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"A","hash":{},"data":data}) : helper)))
    + "</label>\n	<label><input type=\"radio\" name=\""
    + alias2(alias1((depths[1] != null ? depths[1].prefix : depths[1]), depth0))
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" value=\"false\">"
    + alias2(((helper = (helper = helpers.B || (depth0 != null ? depth0.B : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"B","hash":{},"data":data}) : helper)))
    + "</label>\n</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.choice : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();