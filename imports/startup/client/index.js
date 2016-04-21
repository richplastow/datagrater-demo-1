//// Client startup through a single entry point. 

//// Set up all routes in the app. 
import './routes.js';

//// Configure and startup DataGrater. 
import { DataGrater } from 'meteor/oopish:datagrater'
DataGrater('@todo CLIENT CONFIG');
