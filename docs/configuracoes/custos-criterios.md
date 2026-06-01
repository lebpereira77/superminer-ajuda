---
id: custos-criterios
title: Custos e critérios de aprovação
sidebar_position: 1
---

# Custos e critérios de aprovação

Esta é a configuração mais importante do Super Miner. Os valores aqui definem o que é considerado um produto "Aprovado", "Em Atenção" ou "Reprovado" em todas as suas minerações.

Acesse em **Configurações → Custos e Critérios**.

## Custos operacionais

Estes valores são somados automaticamente em cada análise de produto:

### Simples Nacional (%)
O percentual de imposto da sua empresa no regime Simples Nacional. Este valor é descontado do lucro bruto.

- **Padrão**: 4%
- **Como ajustar**: Use a alíquota efetiva do seu CNAE no Simples Nacional. Em dúvida, consulte seu contador.

### Prep Center (R$/unidade)
Custo fixo por unidade enviada ao Prep Center antes do envio para a Amazon.

- **Padrão**: R$ 2,00
- **Como ajustar**: Coloque o valor que seu Prep Center cobra por unidade preparada. Se você mesmo faz o prep, pode usar 0.

## Critérios de aprovação

### Lucro mínimo (%)
A margem de lucro mínima para um produto ser classificado como Aprovado.

- **Padrão**: 12%
- **Interpretação**: Um produto com 12% de margem significa que, de cada R$ 100 vendidos, R$ 12 são lucro após todos os custos (FBA, impostos, prep)
- **Recomendado para iniciantes**: 10–15% como mínimo

### ROI mínimo (%)
O retorno mínimo sobre o investimento para aprovação.

- **Padrão**: 25%
- **Interpretação**: ROI de 25% significa que para cada R$ 100 investidos (custo do produto), você lucra R$ 25
- **Recomendado**: 20–30% dependendo do seu capital de giro

### Demanda mínima mensal
Quantidade mínima de unidades vendidas por mês na Amazon para o produto ser aprovado.

- **Padrão**: 100 unidades/mês
- **Interpretação**: Produtos vendendo menos que isso têm risco de encalhe
- **Como calibrar**: Considere seu prazo de reposição e lote mínimo do fornecedor. Se você compra 50 unidades por pedido, o produto precisa vender pelo menos essas 50 unidades por mês para ter giro mensal.

## Como esses valores afetam a mineração

Toda vez que você inicia uma nova mineração, os critérios vigentes em Configurações são usados para classificar os produtos. Se você mudar os critérios depois que a sessão rodou, os resultados **não** são recalculados automaticamente.

Para reaplicar novos critérios a uma sessão existente, você precisará rodar a sessão novamente.

## Recomendações por perfil

| Perfil | Margem mínima | ROI mínimo | Demanda mínima |
|---|---|---|---|
| Iniciante (capital limitado) | 15% | 30% | 50 un/mês |
| Intermediário | 12% | 25% | 100 un/mês |
| Volume alto / capital disponível | 8% | 15% | 200 un/mês |

:::warning Cuidado com critérios muito flexíveis
Baixar demais os critérios pode fazer muitos produtos "aprovados" aparecerem, mas o risco de encalhe e margem insuficiente aumenta. Comece conservador e ajuste conforme ganha experiência.
:::
