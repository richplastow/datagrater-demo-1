//// The App_home template is the app’s front-page. 
import { Template } from 'meteor/templating';
import { Messages } from '../../api/messages/define-messages.js';
import { Rooms    } from '../../api/rooms/define-rooms.js';
import './app-home.html';

//// Define helpers for the App_home Template. 
Template.App_home.helpers({
  messages() {
    return Messages.find({ });
  },
  rooms() {
    return Rooms.find({ });
  },
});
