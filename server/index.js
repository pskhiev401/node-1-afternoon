const express = require ('express');
    app = express ();
    port = 3000;
    bodyParser = require ('body-parser');
    mc = require(__dirname+'/controllers/messages_controller');

app.use(bodyParser.json() );
app.use( express.static(__dirname+'/../public/build') );

const messagesBaseURL = '/api/messages' //created const to keep our app.post organized
app.post(messagesBaseURL, mc.create);
app.get(messagesBaseURL, mc.read);
app.put(`${messagesBaseURL}/:id`, mc.update);
app.delete(`${messagesBaseURL}/:id`, mc.delete);
    


app.listen(port, () => { 
    console.log(`Server listening on port ${port}`); })
