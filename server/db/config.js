const {MongoClient} = require('mongodb');
const uri =
    'mongodb+srv://archo_yana:Valyan0_DeL1very@valyanodelivery.ficpv.mongodb.net/valyano_delivery?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = client;
