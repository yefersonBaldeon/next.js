const express = require('express');

const router=express.Router()



const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');

function routerApi(app) {



    app.use("/api/v1",router)

    router.use('/products', productsRouter);
    // app.use('/users', usersRouter);

}

module.exports = routerApi;

