const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
app.use(express.json())

    app.get('/say', (req, res ) => {

        const word = req.query.keyword;

        const url = 'https://lfogkotg7oug3ce7ooeuwqy4f40eswnc.lambda-url.us-east-2.on.aws/'

        axios.get(url, {
            params: {
                word
              }
          })
            .then(function (response) {
                res.send(response.data)
            });
       
        });

        app.listen(port, () => {
            console.log(`Example app listening on http://localhost:${port}`) });
        