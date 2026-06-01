---
id: faq
title: Perguntas Frequentes
sidebar_position: 7
---

# Perguntas Frequentes

## Conta e Acesso

### Como faço para criar uma conta?

O Super Miner está em Beta fechado — o acesso é por convite. Se você recebeu um convite, siga as instruções em [Criando sua conta](./primeiros-passos/criando-conta). Se ainda não tem acesso, entre em contato pelo WhatsApp.

### Esqueci minha senha. O que faço?

No momento, a recuperação de senha é feita pelo suporte. Envie uma mensagem pelo WhatsApp informando o e-mail cadastrado.

### Posso usar o Super Miner em qualquer navegador?

Sim. O Super Miner funciona em Chrome, Firefox, Edge e Safari. Recomendamos Chrome ou Edge para a melhor experiência.

---

## Fornecedores e Catálogos

### Quais formatos de catálogo são aceitos?

PDF, Excel (.xlsx), CSV e URL de site. Veja detalhes em [Importando um catálogo](./fornecedores/importando-catalogo).

### Por que alguns produtos não foram extraídos do catálogo?

PDFs escaneados (imagens de texto) ou arquivos com layout muito complexo podem ter dificuldades de extração. Se isso acontecer, tente reprocessar o catálogo com uma instrução adicional descrevendo o conteúdo. Se o problema persistir, entre em contato com o suporte.

### Posso ter mais de um catálogo por fornecedor?

Sim. Você pode ter quantos catálogos quiser por fornecedor — por exemplo, um catálogo por mês ou por linha de produto.

### O que acontece se eu deletar um catálogo?

A exclusão remove o catálogo e todos os dados de produtos extraídos. Sessões de mineração que já usaram esse catálogo não são afetadas — os resultados são preservados.

---

## Mineração

### A mineração parou no meio — perdi o progresso?

Não. Se a sessão foi pausada, interrompida por queda de conexão ou encerramento do navegador, o progresso é salvo. Acesse a sessão no Painel Principal e clique em **Retomar**.

### Por que nenhum produto foi aprovado na minha mineração?

As principais causas são:

1. **Critérios muito restritivos** — Verifique em Configurações se a margem mínima, ROI ou demanda estão muito altos para o tipo de produto do catálogo
2. **Token de acesso expirado** — Se a busca não encontrou produtos na Amazon, o token de integração pode ter expirado. Atualize pelo bookmarklet
3. **Catálogo com dados ruins** — Produtos com nomes genéricos ou sem informações suficientes têm dificuldade de match na Amazon

### Por que tem tantos produtos na fila de revisão manual?

Catálogos com produtos de nicho, nomes muito genéricos ou sem código de barras (EAN) geram mais incerteza no matching. Isso é normal — a revisão manual garante a qualidade dos resultados.

### Posso rodar duas minerações ao mesmo tempo?

Sim, mas pode haver lentidão dependendo do tamanho dos catálogos.

### Os resultados de uma sessão expiram?

Não. Os resultados ficam salvos indefinidamente na sua conta. Você pode acessar sessões antigas a qualquer momento pelo Painel Principal.

---

## Resultados e Análise

### O que significa um ROI de 30%?

Significa que para cada R$ 100 investidos na compra do produto, você lucra R$ 30 após todos os custos (FBA, impostos, prep center). O capital total retorna + 30% de lucro.

### Por que o preço Buybox pode estar diferente do preço real na Amazon hoje?

O banco de dados é atualizado periodicamente. Em momentos de alta volatilidade de preços, pode haver defasagem. Antes de fechar uma compra grande, valide o preço atual diretamente na Amazon.

### Posso confiar nos dados de demanda?

Os dados de demanda são estimativas baseadas no histórico de vendas. São altamente confiáveis para tendências e volumes médios, mas podem variar em produtos sazonais ou com histórico curto de vendas.

### Como exporto os resultados?

Na tela de Resultados, clique em **Exportar** e escolha entre Excel ou PDF. Para exportar apenas os aprovados, aplique o filtro antes de exportar.

---

## Super Filter

### Qual a diferença entre o Super Filter e a mineração?

A mineração parte do catálogo do fornecedor e busca os produtos equivalentes na Amazon. O Super Filter faz o inverso: você define características (preço, demanda, concorrência) e o sistema mostra produtos da Amazon que se encaixam. São ferramentas complementares.

### O banco de dados do Super Filter é em tempo real?

Não exatamente. O banco é atualizado com frequência, mas não é tempo real. Para dados muito recentes de um produto específico, verifique diretamente na Amazon.

---

## Configurações

### Se eu mudar os critérios de aprovação, as sessões antigas são recalculadas?

Não. Os novos critérios valem apenas para novas sessões de mineração.

### Qual a diferença entre Margem e ROI?

- **Margem** = Lucro / Preço de venda. Ex: produto vendido a R$ 100, lucro de R$ 15 → margem de 15%
- **ROI** = Lucro / Custo de compra. Ex: produto comprado a R$ 60, lucro de R$ 15 → ROI de 25%

O ROI é mais relevante para avaliar o retorno do capital investido. A margem é mais útil para comparar produtos com preços diferentes.

---

## Suporte

### Como entro em contato com o suporte?

Pelo WhatsApp. O número está disponível no rodapé desta página. O atendimento é feito pelo time do Super Miner diretamente.

### Encontrei um erro ou comportamento inesperado. O que devo fazer?

Descreva o problema com o máximo de detalhes pelo WhatsApp: o que você estava fazendo, qual erro apareceu (tire um print se possível) e qual sessão ou catálogo estava usando.
