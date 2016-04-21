//// If the app loads with an empty db, fill it with a starting set of data. 
import { Meteor   } from 'meteor/meteor';
import { Messages } from '../../api/messages/define-messages.js';
import { Rooms    } from '../../api/rooms/define-rooms.js';

Meteor.startup( () => {
  // Messages.remove({});
  // Rooms.remove({});
  if (
      0 !== Messages.find().count()
   || 0 !== Rooms.find().count()
  ) { return; }

  let timestamp = (new Date()).getTime();

  ([
    { name:'Lounge' , secretInfo:'Admin only!', messages:['Hi!', 'Relaxing!'] },
    { name:'Kitchen', secretInfo:123          , messages:['Hi!', 'Cooking!'] },
  ]).forEach( (room) => {
    const roomId = Rooms.insert({
      name:       room.name,
      secretInfo: room.secretInfo,
    });
    room.messages.forEach( (text) => {
      Messages.insert({
        roomId:    roomId,
        text:      text,
        createdAt: new Date(timestamp),
      });
    });
    timestamp += 1; // ensure unique timestamp
  });

});
