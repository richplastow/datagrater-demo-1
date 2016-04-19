//// The Rooms_show_page template shows a particular Room document. 
import './rooms-show-page.html';
import { Template   } from 'meteor/templating'; //@todo is this needed here?
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Rooms      } from '../../api/rooms/define-rooms.js';
import { Messages   } from '../../api/messages/define-messages.js';

//// Define helpers for the Rooms_show_page Template. 
Template.Rooms_show_page.helpers({

  messages() {
    return Messages.find({ roomId: FlowRouter.getParam('_id') });
  },

  room() {
    return Rooms.findOne( FlowRouter.getParam('_id') );
  },

});
