//// Ensure the Messages collection works as expected. 
import { Meteor   } from 'meteor/meteor';
import { chai     } from 'meteor/practicalmeteor:chai';
import { Messages } from './define-messages.js';

////
if (Meteor.isServer) {
  require('./server/publications.js');

  describe('messages', function () {

    it('runs an obviously-true test', function () {
      chai.assert.equal(123, 123);
    });

    it('leaves createdAt on update', function () {
      const createdAt = new Date(new Date() - 1000);
      const messageId = Messages.insert({
        roomId:    123,
        text:      'the original text',
        createdAt: createdAt,
      });

      Messages.update(messageId, { $set: { text:'some new text' } });

      const message = Messages.findOne(messageId);
      chai.assert.equal(message.text, 'some new text');
      chai.assert.equal(message.createdAt.getTime(), createdAt.getTime());
    });

  });
}
