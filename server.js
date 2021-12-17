const express = require('express');
const path = require('path')
const morgan = require('morgan')
const { syncAndSeed, models: { Flower }} = require('./db')
const app = express()


// Logging middleware
app.use(morgan('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static middleware
//app.use(express.static(path.join(__dirname, '..', '/public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/flowers', async(req,res,next) => {
    try{
        res.send(await Flower.findAll())
    }
    catch(ex){
        next(ex)
    }
})

app.get('/api/flowers/:flowerid', async(req, res, next) => {
    try{
        res.send(await Flower.findAll({
            where: {
                flowerId: req.params.flowerid
            }
        }))
    }
    catch(ex){
        next(ex)
    }
})


const init = async()=> {
    try {
      await syncAndSeed();
      const port = process.env.PORT || 4040;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex){
      console.log(ex);
    }
};
  
init();