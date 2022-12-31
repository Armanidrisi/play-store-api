const googlePlay = require('google-play-scraper');
const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
  const json = {status:false,msg:'No Parameters Found'}
  res.json(json)
})
app.get('/api/app/:appId', (req, res) => {
  const appId = req.params.appId;
  googlePlay.app({appId: appId}).then(data => {
    res.json(data);
  }).catch(error => {
    res.status(500).send(error);
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
