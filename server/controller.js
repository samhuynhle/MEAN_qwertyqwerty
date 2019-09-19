const Main = require('./models.js');
const path = require('path');

module.exports = {
    reroute: (req, res)=>{
        console.log("User has been rerouted to '/' and Angular is served.")
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    },
    find_all: (req, res)=>{
        console.log("We are at find_all of the Main instances.")
        Main.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    find_one: (req, res)=>{
        console.log(`We are at find_one of the Main instances. The id given 
        through the route via req.params.id is: ${req.params.id}.`)
        Main.findOne({_id: req.params.id})
            .then((data) => {
                res.json(data)
                console.log(`This object has been served: ${data}`)
            })
            .catch(err => res.json(err));
    },
    find_all_dependents: (req, res)=>{
        console.log(`We are at find_all_dependents.`)
        console.log(`We are finding all the dependents for Object with id: ${req.params.id}`)
        Main.findOne({_id: req.params.id})
            .then((data) => {
                var list = data['dependents']
                list.sort((b, a) => parseFloat(a.number) - parseFloat(b.number));
                console.log(data['dependents'])
                // sorted_dependents = _.sortBy(data['dependents'], 'number')
                res.json(list)
            })
            .catch(err => res.json(err));
    },
    create: (req, res)=>{
        console.log("We are at create.")
        Main.create(req.body)
            .then((data) => {
                res.json(data)
                console.log(`This object has been created: ${data}`)
            })
            .catch(err => res.json(err));
    },
    update: (req, res)=>{
        console.log(`We are at update. This is the id of the
        Main instance we are updating: ${req.params.id}`)
        console.log(req.body);
        Main.updateOne(
            {_id: req.body._id},
            {$set: req.body},
            // {runValidators: true})
        )
            .then((data) => {
                res.json(data)
                console.log(`This object has been updated: ${data}`)
            })
            .catch(err => res.json(err));
    },
    new_review: (req, res)=>{
        console.log(`We are at new_review. This is the id of the
        Main instance we are updating: ${req.params.id}`)
        Main.update(
            {_id: req.params.id},
            {$push: {dependents: req.body}},
            {runValidators: true})
            .then((data) => {
                res.json(data)
                console.log(`This object has been updated: ${data}`)
            })
            .catch(err => res.json(err));
    },
    // update_dependents: (req, res) => {
    //     console.log("We are here at update-dependents")
    //     console.log(`Main object id from route: ${req.params.main_id}`)
    //     console.log(`dependent object id form route: ${req.params.dependent_id}`)
    //     console.log(`This is the information from req.body:`)
    //     console.log(req.body)
    //     Main.update(
    //         {_id: req.params.main_id, "dependents._id": req.params.dependent_id},
    //         {"$set": {"dependents.$.name": req.body.name, "dependents.$.number": req.body.number}},
    //         {runValidators: true}
    //     )
    //         .then((data)=> {
    //             res.json(data)
    //             console.log(`This object has been updated: ${data}`)
    //         })
    //         .catch(err => res.json(err))
    // },
    delete: (req, res)=>{
        console.log(`We are here at delete`)
        console.log(`Main object id from route: ${req.params.main_id}`)
        Main.findOneAndRemove({_id: req.params.id})
            .then((data) => {
                res.json(data)
                console.log(`This object has been deleted: ${data}`)
            })
            .catch(err => res.json(err));
    }
}