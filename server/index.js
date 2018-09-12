const express = require ('express'),
    app = express (),
    port = 3000,
    bodyParser = require ('body-parser');
    mc = require(__dirname+'/controllers/messages_controller');


app.use(bodyParser.json() );

app.listen(port, () => { 
    console.log(`Sever listening on port ${port}`)}
);

app.post('./api/messages', mc.create);
app.get()
app.put()
app.delete()
