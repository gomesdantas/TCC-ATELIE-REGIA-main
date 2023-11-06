import { con } from './connection.js';

export async function inserircadastrousuario(cadastro) {
    
    const comando= 
    
    `INSERT INTO tb_cadastrocliente(nm_cliente, ds_emailcliente, ds_senhacliente, bt_termos)
    values(?, ?, ?, ?) `;

    const [resposta] = await con.query(comando, [cadastro.nome, cadastro.email, cadastro.senha, cadastro.termos]);
    cadastro.id = resposta.insertId;

    return cadastro;

}