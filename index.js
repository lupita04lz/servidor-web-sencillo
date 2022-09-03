import express from 'express'
import {engine} from 'express-handlebars'
import { getFrase, getFrasePelicula, getFraseGraciosas } from './lib/frases.js'



const app = express()

const port = process.env.port || 3000

app.engine('handlebars',engine())

app.set('view engine', 'handlebars')
app.set('views','./views')
//app.disable('x-power')
app.use(express.static('public'))



app.get('/',(req, res)=>{
    res.render('home')
})


app.get('/motivacionales',(req, res)=>{
    res.render('about',{frase:getFrase()})
})

app.get('/graciosas',(req, res)=>{
    res.render('about',{frase:getFraseGraciosas()})
})

app.get('/peliculas',(req, res)=>{
    res.render('about',{frase:getFrasePelicula()})
})

app.get('/headers',(req,res)=>{
    res.type('text/plain')
    const headers = Object.entries(req.header)
    .map(([key,value])=> `${key}:${value}`)
    res.send(headers.join('\n'))
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