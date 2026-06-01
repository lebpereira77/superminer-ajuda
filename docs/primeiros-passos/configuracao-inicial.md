---
id: configuracao-inicial
title: Configuração inicial
sidebar_position: 2
---

# Configuração inicial

Quando você faz login pela primeira vez, o Super Miner exibe um **assistente de configuração** com três etapas. Este assistente garante que todas as integrações necessárias estejam funcionando antes de você começar a minerar.

## Etapa 1 — Dados de produto

O Super Miner precisa de acesso a um banco de dados de produtos para buscar os itens que aparecem nos catálogos dos seus fornecedores. Esta integração já vem pré-configurada — você só precisará atualizar o token de acesso periodicamente.

**Como atualizar o token:**

Na barra de ferramentas dos favoritos do seu navegador haverá um botão chamado **"Atualizar Token Super Miner"**. Quando seu acesso expirar:

1. Acesse a fonte de dados no seu navegador
2. Clique no bookmarklet nos favoritos
3. Faça qualquer busca na página
4. O token será capturado e enviado ao Super Miner automaticamente

:::tip Token com validade de 24h
O token de acesso expira a cada 24 horas. Se a mineração retornar zero produtos encontrados, provavelmente o token precisa ser atualizado.
:::

## Etapa 2 — Histórico de preços

Esta integração fornece o histórico de preços dos produtos na Amazon: quanto custavam nos últimos 90 dias, quantas unidades são vendidas por mês, e como o preço está se comportando (estável, em queda ou em alta).

Sem esta integração, a mineração não consegue calcular a demanda real dos produtos.

## Etapa 3 — Integração Amazon (opcional)

Permite buscar produtos da Amazon diretamente pelo código de barras (EAN) do fornecedor, aumentando a precisão do cruzamento entre o catálogo e os produtos listados na Amazon.

Esta etapa é opcional. Se você não tiver as credenciais agora, pode pular e configurar depois em **Configurações → APIs**.

## Depois da configuração

Ao concluir o assistente, você será levado ao **Painel Principal**. A partir daí, o próximo passo é [cadastrar seu primeiro fornecedor](../fornecedores/cadastrando-fornecedor).

:::info As integrações já estão ativas
As integrações do Super Miner são compartilhadas — você não precisa criar contas em serviços externos. O sistema já está integrado e pronto para uso.
:::
