//// The Messages_show_page template shows a particular Message document. 
import './messages-show-page.html';
import { Template   } from 'meteor/templating'; //@todo is this needed here?
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Rooms      } from '../../api/rooms/define-rooms.js';
import { Messages   } from '../../api/messages/define-messages.js';

//// Define helpers for the Rooms_show_page Template. 
Template.Messages_show_page.helpers({

  message() {
    return Messages.findOne( FlowRouter.getParam('_id') );
  },

  room() {
    const message = Messages.findOne( FlowRouter.getParam('_id') );
    return Rooms.findOne(message.roomId);
  },

});
