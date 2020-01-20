import express from 'express';
import userRoute from './user.route';
import tripsRoute from './trip.route';
import searchRoute from './search.route';
import userSettings from './user.settings.route';
import notificationRoute from './notification.route';
import comment from './comment.routes';
import tripRequest from './trip-requests.route';
import accomodationRoute from './accommodation.route';
import locationRoute from './locations.route';

const Router = express.Router();
Router.use('/auth', userRoute);
Router.use('/trips', tripsRoute);
Router.use('/users', userSettings);
Router.use('/notifications', notificationRoute);
Router.use('/accommodations', accomodationRoute);
Router.use('/locations', locationRoute);
Router.use('/trip-requests', comment, tripRequest, searchRoute);

export default Router;
