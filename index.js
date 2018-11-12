var prompt = require('prompt');
var jsonfile = require('jsonfile')

prompt.start();

function savejson(obj){
  jsonfile.writeFile('data.json', obj, {spaces: 2}, function (err) {
    console.error(err)
    promp()
  })
}

function loopw(obj, words, index){
    console.log(words[index])
    if(obj[words[index]]){
        if(index == words.length - 1) {
          savejson(obj)
        } else {
          loopw(obj, words, ++index)
        }
    } else {

      prompt.get(['w'], function (err, result) {

        if(result.w == "O") {
          obj[words[index]] = true
        }

        if(index == words.length - 1) {
          savejson(obj)
        } else {
          loopw(obj, words, ++index)
        }

      })

    }
}


function promp() {
  prompt.get(['word'], function (err, result) {
     console.log('word: ' + result.word);
     result.word = result.word.toLowerCase();
     var words = result.word.split(' ')

     // read file
      jsonfile.readFile('data.json', function(err, obj) {
        console.log(obj)

        loopw(obj, words, 0)
        // words.forEach(function(v,i,a){
        //   console.log(v)
        //   if(obj[v]){
        //
        //   } else {
        //
        //     prompt.get(['w'], function (err, result) {
        //
        //       if(result.w == "O") {
        //         obj[v] = true
        //       }
        //
        //     })
        //
        //   }
        // })
      })


  });
}

promp();
