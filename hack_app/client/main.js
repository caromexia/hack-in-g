import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';

import './main.html';

Template.mainScreen.onCreated(function helloOnCreated() {
  	// counter starts at 0
  this.counter = new ReactiveVar(0);
  var self = this;

  self.vars = new ReactiveDict();

  self.vars.setDefault( 'cardScreenClicked' , false);
});

Template.mainScreen.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  clicked:function(){
	 var instance = Template.instance(); //http://docs.meteor.com/#/full/template_instance
	 return  instance.vars.get('cardScreenClicked') //this will return false(default) | true
	}
});

Template.mainScreen.events({
  'click .green'(event, instance) {
    // increment the counter when button is clicked
    console.log("boob");
    instance.vars.set('cardScreenClicked', true);
  },

});
