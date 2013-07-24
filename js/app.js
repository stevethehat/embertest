this.App = Ember.Application.create();

App.store = DS.Store.create({
  revision: 11,
  adapter: DS.LSAdapter.create(
    {
      namespace: 'timetracker'
    }
  )
});

App.Task = DS.Model.extend(
  {
    title: DS.attr('string'),
    url: '/timetracker/tasks'  
  }
);

App.Router.map(function(){
  this.route('tasks' );
  this.route('task', { path: '/tasks/:task_id' } );
  this.route('new', { path: '/tasks/new' } );
  /*
  this.resource('tasks',
    function(){
      this.resource('task', { path: ':task_id' } );
      this.route('new', { path: 'new' } );
    }
  );
  */
});

App.TasksRoute = Ember.Route.extend({
  model: function() {
    return App.Task.find();
  },
  setupController: function(controller){
    alert('in setup controller');

    controller.new = function(){
      //this.set('content', App.Task.createRecord( { title: 'new task ' + Date.now() } ) );
      App.Task.createRecord( { title: 'new task ' + Date.now() } ) ;
      App.store.commit();
      //this.get('target.router').transitionTo('tasks.index');    

      alert('are we here????');
    }
  }
  /*,
  events:{
    new: function(){
      this.set('content', App.Task.createRecord( { title: 'new task ' + Date.now() } ) );
      App.store.commit();
      this.get('target.router').transitionTo('tasks.index');    

      alert('new in tasks object');
    }
  }
  */
});

/*
App.TasksController =  Ember.ObjectController.extend(
  {
    new: function(){ alert('here 1 in controller')},
    events: {
      new: function(){ alert('here 2 in controller')},   
    }
  }
);
*/

/*
App.TasksNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.newRecord();
  }
});

App.TasksNewController = Ember.ObjectController.extend({
  newRecord: function() {
    alert('new record');
    this.set('content', App.Task.createRecord( { title: 'new task ' + Date.now() } ) );
    this.get('store').commit();
    this.get('target.router').transitionTo('tasks.index');    
  }
});
*/

/*
App.Store.reopen({
  url:'/timetracker/tasks'  
});
*/


//App.Task.createRecord( { title:  } );
//App.store.commit();

/*
App.Task.reopenClass({
  allContributors: [],
  all: function(){
    this.allContributors = [];
    $.ajax({
      url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
      dataType: 'jsonp',
      context: this,
      success: function(response){
        response.data.forEach(function(contributor){
          this.allContributors.addObject(App.Contributor.create(contributor))
        }, this)
      }
    })
    return this.allContributors;
  }
});
*/

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('title', "The is the index controller");
  }
});
