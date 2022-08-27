import express from 'express'
import {engine} from 'express-handlebars'



const app = express()

const port = process.env.port || 3000

app.engine('handlebars',engine())

app.set('view engine', 'handlebars')
app.set('views','./views')
app.use(express.static('public'))

const frases = [
    "Si estás trabajando en algo que te importa de verdad, nadie tiene que empujarte: tu visión te empuja» —Steve Jobs",
    "No tienes que ser grande para empezar. Pero tienes que empezar para poder ser grande» —Zig Ziglar",
    "La felicidad no ocurre por casualidad, sino por elección» —Jim Rohn"
]



app.get('/',(req, res)=>{
    res.render('home')
})

app.get('/about',(req, res)=>{
    let fraseAleatoria = frases[Math.floor(Math.random()*frases.length)]
    res.render('about',{frase:fraseAleatoria})
})



app.use((req,res)=>{
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next)=>{
    console.error(err.mesage)
    res.status(500)
    res.render('500')
})


app.listen(port,()=>{
    console.log(`Express se ha iniciado en el puerto ${port} presione Ctrl+c para terminar`)
})