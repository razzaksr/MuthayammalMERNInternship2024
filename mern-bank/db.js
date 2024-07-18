const { default: mongoose } = require('mongoose')
const uri = "mongodb+srv://razak:mohamed@cluster0.ptmlylq.mongodb.net/muthayammal?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri,clientOptions)