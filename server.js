const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
app.use(express.json())

    app.get('/hello', (req, res ) => {

        const name = req.query.name;
        // const body = {
        //     name: name
        //   }

        const url = 'https://lfogkotg7oug3ce7ooeuwqy4f40eswnc.lambda-url.us-east-2.on.aws/'

        axios.get(url, {
            params: {
                name: name
              }
          })
            .then(function (response) {
                res.send(response.data)
            });
       
        });

        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`) });
        