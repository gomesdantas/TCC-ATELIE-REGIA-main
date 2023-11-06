import { inserircadastrousuario } from '../Repository/CadastroRepository.js'; 

import { Router } from "express";

const server = Router();

server.post('/cadastro/usuario', async (req, resp) => {
    try {
      const usuarioParaCadastrar = req.body;


      if(!usuarioParaCadastrar || usuarioParaCadastrar.length === 0)
      throw new Error('É preciso preencher todos os campos!')

      if(!usuarioParaCadastrar.nome || usuarioParaCadastrar.nome === undefined)
        throw new Error('Campo nome é obrigatório!')

        if(!usuarioParaCadastrar.email || usuarioParaCadastrar.email === undefined)
        throw new Error('Campo email é obrigatório!')
      
        if(!usuarioParaCadastrar.senha || usuarioParaCadastrar.senha === undefined)
        throw new Error('Campo senha é obrigatório!')


      const usuarioCadastrado = await inserircadastrousuario(usuarioParaCadastrar);
  
      resp.send(usuarioCadastrado);
      
    } catch (err) {
      resp.status(400).send({
        erro: err.message
      });
    }
  });

export default server;
