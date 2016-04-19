//// Server startup through a single entry point. 

//// If the app loads with an empty db, fill it with a starting set of data. 
import './fixtures.js';

//// Define all methods and publications. 
import './register-api.js';

//// Configure and startup DataGrater. 
import { DataGrater } from 'meteor/oopish:datagrater'
DataGrater();
