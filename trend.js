var express = require('express')
var jsonfile = require('jsonfile')
var app = express()

function get_trend_terms(str, res){
  var words = str.split(' ')
  jsonfile.readFile('data.json', function(err, obj) {
    var trends = [];
    words.forEach(function(v,i,a){
      if(obj[v]) {

      } else {
        trends.push(v)
      }
    })
     console.log(trends);
     res.send(trends);
  })
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log(req.query.sentence)

  get_trend_terms(req.query.sentence, res)
})

app.listen(3000, function(){
  console.log('listening on port 3000...')
})
