USE coguis_servicos;

DELIMITER $$

CREATE PROCEDURE sp_cadastrar_servico(
    IN p_nome VARCHAR(100),
    IN p_descricao VARCHAR(255),
    IN p_categoria VARCHAR(100),
    IN p_preco DECIMAL(10,2)
)
BEGIN

    INSERT INTO servicos (
        nome,
        descricao,
        categoria,
        preco
    )
    VALUES (
        p_nome,
        p_descricao,
        p_categoria,
        p_preco
    );

    SELECT LAST_INSERT_ID() AS id;

END $$

DELIMITER ;

CALL sp_cadastrar_servico(
    'Instalação de Antivírus',
    'Instalação e configuração de solução antivírus',
    'Segurança',
    60.00
);