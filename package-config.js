//// Client and Server import and configure some packages. 

//// Configure and startup DataGrater. 
// import { Rooms      } from './imports/api/rooms/define-rooms.js';
// import { Messages   } from './imports/api/messages/define-messages.js';
import { DataGrater } from 'meteor/oopish:datagrater'
DataGrater({
  enabled: true,
  // collections: [
  //   { name:'Rooms'   , instance:Rooms   , fields:['abc'] }, // `instance` only works on client!
  //   { name:'Messages', instance:Messages, fields:[] }, // `instance` only works on client!
  // ],
});
