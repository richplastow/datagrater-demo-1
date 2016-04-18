//// The main app layout. 
import './app-body.html';
import { Template } from 'meteor/templating';

//// @todo. 
Template.App_body.onCreated(function appBodyOnCreated() {
  this.subscribe('messages');
  this.subscribe('rooms');
});

//// Define helpers for the App_body Template. 
Template.App_body.helpers({
  //@todo
});

//// Define events for the App_body Template. 
Template.App_body.events({
  'click #menu a'(event, instance) {
    //@todo
  },
});
