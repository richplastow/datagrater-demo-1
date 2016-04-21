//// Define the Messages collection. 
import { Mongo        } from 'meteor/mongo';
// import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class MessagesCollection extends Mongo.Collection {
}

export const Messages = new MessagesCollection('Messages');

// Messages.schema = new SimpleSchema({
//   text:      { type:String },
//   createdAt: { type:Number, defaultValue:0 },
//   roomId:    { type:String, regEx:SimpleSchema.RegEx.Id, optional:true },
// });