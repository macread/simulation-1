module.exports = {
    inventory: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.get_inventory()
            .then( (products)=> res.status(200).send(products) )
            .catch( ()=> res.status(500).send() );
    },

    product: (req, res, next)=> {
        const connection = req.app.get('db');
        const { name, price, image_url } = req.body;
        connection.create_product([name, price, image_url])
            .then( ()=> res.status(200).send() )
            .catch( (err)=> res.status(500).send() );
    },


    delete: (req, res, next)=> {
        const connection = req.app.get('db');
        console.log(req.params)
        connection.delete_product([req.params.id])
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    getProduct: (req, res, next)=> {
        const connection = req.app.get('db');

        connection.get_product([req.params.id])
            .then( (product)=> res.status(200).send(product) )
            .catch( ()=> res.status(500).send() );
    },

    updateProduct: (req, res, next)=> {
        const connection = req.app.get('db');
        connection.update_product([req.body.name, req.body.price, req.body.image_url, req.params.id])
            .then( ()=> res.status(200).send() )
            .catch( ()=> res.status(500).send() );
    },

    getAll: (req, res, next)=> {
        const connection = req.app.get('db');

        // connection.read_products()
        //     .then( (products)=> res.status(200).send(products) )
        //     .catch( ()=> res.status(500).send() );
    },

  



}