const controller = require('./controller.js');

module.exports = (app)=>{
    app.get('/qwerty', controller.find_all);
    app.get('/qwerty/:id', controller.find_one);
    app.get('/qwerty/:id/all', controller.find_all_dependents);
    app.post('/qwerty', controller.create);
    app.put('/qwerty/:id', controller.update);
    app.put('/qwerty/:id/review', controller.new_review);
    // app.put('qwerty/:main_id/:dependent_id', controller.update_dependents)
    app.delete('/qwerty/:id', controller.delete);
    app.all("*", controller.reroute);
}