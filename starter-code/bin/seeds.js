const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');

const dbName = 'celebDB';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );
Celeb.collection.drop()

const celebs = [
{
    name: 'F. Franco',
    occupation: 'Matarrojos',
    catchPhrase: 'Esto del coronavirus os pasa por desenterrarme',
    image: "./img/franco.jpeg"
},
{
    name: 'Fraga',
    occupation: 'Conductor',
    catchPhrase: 'Un canhonazo y punto',
    image: '../img/fraga.jpg'
},
{
    name: 'Marta Sanchez',
    occupation: 'Cantgh...',
    catchPhrase: 'Es un sueño, no podía pensar que iba a revolucionar el país de esta manera',
    image: '/img/marta.jpeg'
}];

Celeb.create(celebs, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebs.length} celebs`)
    mongoose.connection.close();
  });