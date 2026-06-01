---
id: importando-catalogo
title: Importando um catálogo
sidebar_position: 2
---

# Importando um catálogo

O catálogo é a lista de produtos de um fornecedor. O Super Miner aceita quatro formatos diferentes e extrai automaticamente os dados de produto (nome, código, preço) usando inteligência artificial.

## Formatos suportados

| Formato | Quando usar |
|---|---|
| **PDF** | Catálogos enviados por e-mail ou gerados pelo fornecedor |
| **Excel (.xlsx)** | Planilhas com lista de produtos |
| **CSV** | Arquivos exportados de sistemas de gestão |
| **URL do site** | Quando o fornecedor tem um site com lista de produtos |

## Como importar

### Passo 1 — Abra o fornecedor

Na tela de Fornecedores, clique no fornecedor desejado para abrir seus detalhes.

### Passo 2 — Adicione um catálogo

Clique em **Novo Catálogo** e escolha o tipo:

- **Arquivo**: Selecione o PDF, Excel ou CSV do seu computador
- **URL**: Cole o endereço do site do fornecedor

### Passo 3 — Aguarde o processamento

O Super Miner extrai os dados automaticamente. Dependendo do tamanho do catálogo, isso pode levar de alguns segundos a alguns minutos. Uma barra de progresso mostrará o andamento.

### Passo 4 — Valide os produtos extraídos

Após o processamento, uma tela de **validação** mostrará os produtos extraídos. Revise a lista:

- Confira se os nomes, preços e códigos foram extraídos corretamente
- Corrija manualmente qualquer dado que esteja errado
- Remova produtos duplicados ou irrelevantes
- Clique em **Confirmar** para salvar o catálogo

:::warning Por que validar é importante?
A qualidade da extração depende do formato do arquivo. PDFs com layout complexo ou imagens podem ter erros. A validação é sua chance de corrigir antes da análise.
:::

## Status do catálogo

Após a confirmação, o catálogo aparecerá na lista com um dos seguintes status:

| Status | Significado |
|---|---|
| **Processando** | A extração ainda está em andamento |
| **Concluído** | Pronto para mineração |
| **Erro** | Falha na extração — tente reprocessar |

## Reprocessar um catálogo

Se a extração não ficou boa, você pode reprocessar o catálogo: clique no ícone de reprocessamento ao lado do catálogo. O sistema tentará extrair os dados novamente.

Você também pode adicionar um **contexto** ao catálogo antes de reprocessar — por exemplo: *"Produtos de beleza e cosmética, preços em reais, coluna A é o SKU"*. Isso ajuda a IA a interpretar melhor o arquivo.

## Dicas para melhores resultados

- **PDFs**: Prefira PDFs gerados digitalmente (não escaneados)
- **Excel/CSV**: Certifique-se de que a primeira linha tem os cabeçalhos das colunas
- **Sites**: Funciona melhor em sites com lista de produtos estruturada (tabelas ou cards)
- **Tamanho**: Catálogos muito grandes (mais de 5.000 produtos) podem demorar mais para processar
