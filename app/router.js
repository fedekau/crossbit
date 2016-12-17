import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('exercises', function() {
    this.route('register', { path: 'register/:exercise_id' });
  });
});

export default Router;
