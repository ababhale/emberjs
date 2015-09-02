App = Ember.Application.create();

App.Router.map(function() {
	this.route("first", {
		path : "first"
	});

	this.route("customer", {
		path :"customer",
		redirect : function  () {
			console.log("redirect function called");
		}
	});

	this.route("edit-customer", {
		path :"edit-customer"
	});

	this.route("add-customer", {
		path :"add-customer"
	});

	this.route("delete-customer", {
		path :"delete-customer"
	});
});

App.FirstRoute = Ember.Route.extend({
	actions : {
		headerClick : function(){
			alert("Header clicked");
		}
	}
});


App.CustomerRoute = Ember.Route.extend({
	model : function(){
		var customers = JSON.parse(localStorage.getItem("customers"));
		return customers;
	}
}); 

App.CustomerController = Ember.ArrayController.extend({
	actions : {
		headerClick : function(){
			alert("Customer header clicked");
		},
		changeName : function(){
			console.log(this.model);
			//this.vm.firstName = "Babu";
		},

		gotoEditCustomer : function(){
			console.log(this.model);
			console.log(this);
			//this.transitionToRoute("edit-customer");
		}
	}
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
