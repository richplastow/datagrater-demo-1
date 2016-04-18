//// Define publications for the Rooms collection. 
import { Meteor } from 'meteor/meteor';
import { Rooms  } from '../define-rooms.js';

Meteor.publish('rooms', function rooms() {
  return Rooms.find({}, {});
});
