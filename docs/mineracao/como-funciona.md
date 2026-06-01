---
id: como-funciona
title: Como funciona a mineração
sidebar_position: 1
---

# Como funciona a mineração de produtos

A mineração é o processo central do Super Miner: ele pega cada produto do catálogo do seu fornecedor, encontra o produto equivalente na Amazon e calcula se vale a pena comprá-lo para revenda FBA.

## O processo em detalhes

### Etapa 1 — Descoberta de produtos

O Super Miner lê cada produto do catálogo do fornecedor e busca o produto correspondente na Amazon. Para isso, usa até três estratégias em sequência:

1. **Busca por código de barras (EAN)** — Se o catálogo tem o EAN do produto, a busca é direta e precisa
2. **Matching por IA** — Se não há EAN, a inteligência artificial analisa o nome e a descrição do produto para encontrar o melhor match na Amazon
3. **Matching textual** — Fallback de similaridade de texto para casos onde a IA não consegue resolver

### Etapa 2 — Análise de viabilidade

Para cada produto encontrado na Amazon, o sistema calcula:

- **Preço de custo**: valor do fornecedor
- **Preço de venda**: preço atual do Buybox na Amazon
- **Taxas FBA**: armazenagem, fulfillment e comissão da Amazon
- **Impostos**: Simples Nacional configurado na sua conta
- **Prep Center**: custo de preparação por unidade (se configurado)
- **Margem de lucro** e **ROI** resultantes
- **Demanda mensal**: estimativa de unidades vendidas por mês

### Etapa 3 — Classificação

Com base nos seus critérios configurados (margem mínima, ROI mínimo, demanda mínima), cada produto recebe uma classificação:

| Classificação | Significado |
|---|---|
| ✅ **Aprovado** | Atende a todos os critérios — bom candidato para compra |
| ⚠️ **Atenção** | Atende alguns critérios mas não todos — analise com cuidado |
| ❌ **Reprovado** | Não atende aos critérios mínimos |

## O papel dos matches manuais

Em alguns casos, o Super Miner não consegue ter certeza de qual produto na Amazon corresponde ao do catálogo. Esses casos vão para a **fila de revisão manual**, onde você confirma ou corrige o match antes da análise de viabilidade.

Isso garante que você não pague por análises de produtos errados.

## Tempo de processamento

O tempo depende do tamanho do catálogo e da complexidade dos produtos:

- Catálogos de até 500 produtos: ~5–15 minutos
- Catálogos de 500–2.000 produtos: ~15–45 minutos
- Catálogos maiores: pode levar mais de uma hora

Você pode fechar o navegador durante o processamento — a sessão continua rodando no servidor e você acessa os resultados depois.

:::tip Pause e retome
Se precisar parar no meio, use o botão **Pausar** na tela de mineração. A sessão salva exatamente onde parou e você pode retomar depois sem perder progresso.
:::
