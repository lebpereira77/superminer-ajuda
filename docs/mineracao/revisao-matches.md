---
id: revisao-matches
title: Revisão de matches
sidebar_position: 3
---

# Revisão de matches

Durante a mineração, nem sempre o sistema tem certeza de qual produto na Amazon corresponde ao do catálogo. Quando o grau de confiança é baixo, o produto vai para a **fila de revisão manual** — e você decide.

## Por que existe revisão manual?

Imagine um produto no catálogo chamado "Shampoo Hidratante 300ml". Na Amazon, existem dezenas de shampoos hidratantes de 300ml de marcas diferentes. O sistema identifica os candidatos mais prováveis, mas não tem certeza suficiente para decidir sozinho — então passa para você.

Isso protege a qualidade da análise: você não paga por dados de um produto errado.

## Como revisar

### 1. Acesse a tela de Revisão

No menu lateral, clique em **Revisão** (ou acesse diretamente pela sessão de mineração). A tela mostra os produtos que aguardam sua confirmação.

### 2. Para cada produto

Você verá:
- **Produto do fornecedor**: nome, imagem (se disponível), preço
- **Candidatos na Amazon**: as opções que o sistema encontrou, com imagens e preços

Para confirmar um match:
- Clique em **Aprovar** no candidato correto

Para rejeitar todos os candidatos:
- Clique em **Nenhum desses** — o produto não será analisado

Para buscar manualmente:
- Clique em **Buscar por imagem** — isso abre o Google Lens para você encontrar o produto certo na Amazon
- Cole o ASIN encontrado no campo de busca e confirme

### 3. Os produtos confirmados entram na análise

Após sua confirmação, o Super Miner continua a análise de viabilidade para esses produtos.

## Quando a fila de revisão aparece?

A fila cresce durante a mineração. Você pode revisar enquanto a sessão ainda está em andamento — não precisa esperar terminar.

## Dicas

- **Priorize produtos de alto valor**: Se o catálogo tem muitos itens, foque primeiro nos produtos mais caros — o potencial de margem é maior
- **Use a imagem como referência**: Confira sempre a imagem do produto do fornecedor versus o candidato na Amazon — nome parecido não garante que é o mesmo produto
- **Desconfie de preços muito diferentes**: Se o candidato da Amazon tem um preço muito acima ou abaixo do produto do fornecedor, provavelmente é um match errado

:::warning Match errado = análise inválida
Confirmar um match incorreto gera uma análise de viabilidade para o produto errado. Dedique atenção à revisão — ela é rápida e faz grande diferença na qualidade dos resultados.
:::
