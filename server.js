// Server-side js
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){


      if(params['student'] == 'd4'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        function d4Roll() {
          let max = 4;
          let result = Math.floor(Math.random() * (max - 1 + 1)) + 1;
          return `you rolled a ${result}`;
        }
        const objToJson = {
          die4Roll: d4Roll()
        }
        res.end(JSON.stringify(objToJson));
      } // student = d4



      else if(params['student']== 'normal'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        function d6Roll() {
          let d6 = Math.ceil(Math.random() * 6);
            if (d6 === 1)
              return 'You rolled a 1.'
            else if (d6 === 2)
              return 'You rolled a 2.'
            else if (d6 === 3)
              return 'You rolled a 3.'
            else if (d6 === 4)
              return 'You rolled a 4.'
            else if (d6 === 5)
              return 'You rolled a 5.'
              else
              return 'You rolled a 6.'
        }
        const objToJson = {
          normalRoll: d6Roll()
        }
        res.end(JSON.stringify(objToJson));
      } //student = normal


      else if(params['student']== 'd8'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        function d8Roll() {
          let d8 = Math.ceil(Math.random() * 9);
          return `You rolled a ${d8}`;
        }
        const objToJson = {
          die8Roll: d8Roll()
        }
        res.end(JSON.stringify(objToJson));
      } //student = d8


        else if(params['student']== 'd10'){
          res.writeHead(200, {'Content-Type': 'application/json'});
            function d10Roll() {
              let rollResult = 1 + Math.floor(Math.random() * 10);
              return `You rolled a ${rollResult}.`
          }
          const objToJson = {
          d10Roll: d10Roll()
          }
        res.end(JSON.stringify(objToJson));
      }


        

      else if(params['student']== 'd12'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        function d12Roll() {
            let rollResult = 1 + Math.floor(Math.random() * 12);
            return `You rolled a ${rollResult}.`
        }
        const objToJson = {
          d12Roll: d12Roll()
        }
        res.end(JSON.stringify(objToJson));
      } 




      else if (params['student'] == 'd20'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        function d20Roll() {
          let d20 = Math.ceil(Math.random() * 20);
          return `You rolled a ${d20}!`
        }
        const objToJson = {
          d20Roll: d20Roll()
        }
        res.end(JSON.stringify(objToJson));
      }







    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
