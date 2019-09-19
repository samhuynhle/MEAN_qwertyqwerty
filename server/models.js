const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb://localhost/qwertydb',
    {useNewUrlParser: true}
);

var DependentSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Your name is required!"],
        minlength: [3, "Name must be at least 3 characters!"]
    },
    number: {
        type: Number,
        required: [true, "A number is required!"],
        min: [1, "Number must be greater than 1!"],
        max: [5, "Number must be lower than 5"]
    },
    description: {
        type: String,
        require: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters!"]
    },
})

// var AddittionalDependentSchema = mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "Name is required!"],
//         minlength: [5, "Name must be at least 5 characters!"]
//     },
//     number: {
//         type: Number,
//         required: [true, "A number is required!"],
//         min: [0.01, "Number must be greater than 0.01!"]
//     }
// }, {timestamps: true});

var MainSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters!"],
        unique: true
    },
    cuisine: {
        type: String,
        require: [true, "Cuisine is required!"],
        minlength: [3, "Cuisine must be at least 3 characters!"]
    },
    // image_url: {
    //     type: String,
    //     default: "https://www.modvellumclinical.com/wp-content/uploads/no-product-image.png"
    // },
    dependents: [DependentSchema],
    // addittionaldependents: [AddittionalDependentSchema]
}, {timestamps:{ createdAt: 'created_at', updatedAt: 'updated_at'}
})

MainSchema.plugin(uniqueValidator, { message: 'Restaurant already listed!' })

var Main = mongoose.model('Main', MainSchema);

module.exports = Main;