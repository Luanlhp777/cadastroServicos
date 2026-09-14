USE coguis_servicos;

DELIMITER $$

CREATE PROCEDURE sp_atualizar_servico(
    IN p_id INT,
    IN p_nome VARCHAR(100),
    IN p_descricao VARCHAR(255),
    IN p_categoria VARCHAR(100),
    IN p_preco DECIMAL(10,2)
)
BEGIN

    UPDATE servicos
    SET
        nome = p_nome,
        descricao = p_descricao,
        categoria = p_categoria,
        preco = p_preco
    WHERE id = p_id;

    SELECT ROW_COUNT() AS linhasAfetadas;

END $$

DELIMITER ;

CALL sp_atualizar_servico(
    8,
    'Instalação e Configuração de Antivírus',
    'Instalação, configuração e atualização de solução antivírus',
    'Segurança',
    70.00
);

SELECT *
FROM servicos
WHERE id = 8;