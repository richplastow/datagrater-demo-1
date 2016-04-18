//// Define the Messages collection. 
import { Mongo } from 'meteor/mongo';

class MessagesCollection extends Mongo.Collection {
}

export const Messages = new MessagesCollection('Messages');
