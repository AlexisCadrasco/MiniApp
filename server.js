let express = require('express'); //Llamar a Express
let bodyParser = require('body-parser')
let cors = require('cors')//Control de acceso HTTP

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())

let port = process.env.PORT || 9890 // Establecemos el puerto de escucha

app.get('/', (req,res)=>{
  res.json({ mensaje: '¡Hola Mundo!'})
});

app.post('/login',(req,res)=>{
    let user = req.body.user;
    console.log(user);
    let pass = req.body.pass;
    console.log(pass);
    if(user === 'victor' && pass === '12345'){
        res.json({mensaje: 'OK'});
    }else{
        res.json({mensaje: 'FAIL'});
    }
    
  });

 app.get('/clients',(req,res)=>{
  const arr = ['Juan Perez','Ernesto García', 'Pilar Hernandez', 'Pedro Marquez']
  res.json({clients: arr});
 });

 app.get('/products',(req,res)=>{
  const arr = ['Televisor','Nevera', 'Portatil', 'Tablet']
  res.json({products: arr});
 })

//Iniciar nuestro server
app.listen(port);
console.log('API escuchando en el puerto ' + port);
