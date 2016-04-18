//// Set up all routes in the app. 
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//// Load the layouts and pages. 
import '../../ui/layouts';
import '../../ui/pages';

//// The 'App_home' template is the app’s front-page. 
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

//// The 'App_notFound' template is for unknown routes and missing data-views. 
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

//// The 'Messages_show_page' template shows a particular Message document. 
FlowRouter.route('/messages/:_id', {
  name: 'Messages.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Messages_show_page' });
  },
});

//// The 'Rooms_show_page' template shows a particular Room document. 
FlowRouter.route('/rooms/:_id', {
  name: 'Rooms.show',
  action() {
    BlazeLayout.render('App_body', { main: 'Rooms_show_page' });
  },
});
