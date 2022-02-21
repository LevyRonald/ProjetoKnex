const knex = require('../db/conexao');
class CaixaController{

    constructor(){
        this.conexao = knex;
    }

    async create(req, res){
        const {
            iddoproduto,
            iddousuario,
            quantidadeproduto
          } = req.body;
          const caixa = await this.conexao('caixa').insert({
            iddoproduto,
            iddousuario,
            quantidadeproduto
          }).debug()
          return res.status(201).json(caixa)
        }

        async patch(req, res){
          const {
              id,
              iddoproduto,
              iddousuario,
              quantidadeproduto
            } = req.body;
            const caixa = await this.conexao('caixa').where('id', id).update({
              iddoproduto,
              iddousuario,
              quantidadeproduto
            }).debug()
            return res.status(201).json(caixa)
          }

          async put(req, res){
            const {
                id,
                iddoproduto,
                iddousuario,
                quantidadeproduto
              } = req.body;
              const caixa = await this.conexao('caixa').where('id', id).update({
                iddoproduto,
                iddousuario,
                quantidadeproduto
              }).debug()
              return res.status(201).json(caixa)
            }
  

        async getAll(req, res) {
          const caixa = await this.conexao('caixa').debug();
          return res.status(200).json(caixa);
        }
      
        async deleteOne(req, res) {
          const { id } = req.body;
          const caixa = await this.conexao('caixa').del().where('id', id).debug();
          return res.status(200).json(caixa);
        }
    }

module.exports = CaixaController;