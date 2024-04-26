__path = process.cwd();

var http = require("http");
var express = require('express'),
    cors = require('cors'),
    path = require('path')
    secure = require('ssl-express-www');

const PORT = 25722;
const app = express();

app.enable('trust proxy')
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/summary', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/summary.html'));
});

app.get('/rules', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/rules.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/game.html'));
});


try {
http.createServer(app).listen(PORT, () => {
console.log(`\nServidor em execução http://localhost:` + PORT);
});
} catch {
    console.error(`\nErro a ( ${PORT} ) se encontra indisponível.\n`);
    process.exit();
}

module.exports = app