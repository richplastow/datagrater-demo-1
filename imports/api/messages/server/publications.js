//// Define publications for the Messages collection. 
import { Meteor   } from 'meteor/meteor';
import { Messages } from '../define-messages.js';

Meteor.publish('messages', function messages() {
  return Messages.find({}, {});
});

