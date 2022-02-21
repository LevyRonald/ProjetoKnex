const express = require('express');
const UsuariosControllers = require('./controllers/usuarios.controller');
const produtosControllers = require('./controllers/produtos.Controllers');
const caixaControllers = require('./controllers/caixa.Controller');
const routes = express();
const usuariosController = new UsuariosControllers();
const produtosController = new produtosControllers();
const caixaController = new caixaControllers();

routes.get('/', (req, res) => {
  return res.status(200).json("Hello world!!")
})

routes.post('/usuarios', (req, res) => {
  usuariosController.create(req, res)
});

routes.get('/usuarios', (req, res) => {
  usuariosController.getAll(req, res)
});

routes.delete('/usuarios', (req, res) => {
  usuariosController.deleteOne(req, res)
});

routes.get('/usuarios/one', (req, res) => {
  usuariosController.getOne(req, res)
});

routes.put('/usuarios', (req, res) => {
  usuariosController.put(req, res)
});

routes.post('/produtos', (req, res) => {
  produtosController.create(req, res)
});

routes.get('/produtos', (req, res) => {
  produtosController.getAll(req, res)
});

routes.delete('/produtos', (req, res) => {
    produtosController.deleteOne(req, res)
  });
  
routes.get('/produtos/one', (req, res) => {
    produtosController.getOne(req, res)
  });

  routes.post('/caixa', (req, res) => {
    caixaController.create(req, res)
  });
  
  routes.get('/caixa', (req, res) => {
    caixaController.getAll(req, res)
  });
  
  routes.delete('/caixa', (req, res) => {
      caixaController.deleteOne(req, res)
    });

module.exports = routes;