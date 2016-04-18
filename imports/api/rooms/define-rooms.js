//// Define the Rooms collection. 
import { Mongo } from 'meteor/mongo';

class RoomsCollection extends Mongo.Collection {
}

export const Rooms = new RoomsCollection('Rooms');
