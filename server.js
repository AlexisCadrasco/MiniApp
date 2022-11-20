let express = require('express'); //Llamar a Express
let bodyParser = require('body-parser')

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

let port = process.env.PORT || 9890 // Establecemos el puerto de escucha



app.get('/', (req,res)=>{
  res.json({ mensaje: '¡Hola Mundo!'})
});

app.post('/login',(req,res)=>{
    let user = req.body.user;
    let pass = req.body.pass;
    if(user === 'victor' && pass === '12345'){
        res.json({mensaje: 'Bienvenido a la aplicación ' + user});
    }else{
        res.json({mensaje: 'Usuario o password incorrecto.'});
    }
    
  });



//Iniciar nuestro server
app.listen(port);
console.log('API escuchando en el puerto ' + port);
