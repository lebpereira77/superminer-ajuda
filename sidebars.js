// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ajudaSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Primeiros Passos',
      collapsed: false,
      items: [
        'primeiros-passos/criando-conta',
        'primeiros-passos/configuracao-inicial',
        'primeiros-passos/painel-principal',
      ],
    },
    {
      type: 'category',
      label: '📦 Fornecedores e Catálogos',
      collapsed: false,
      items: [
        'fornecedores/cadastrando-fornecedor',
        'fornecedores/importando-catalogo',
      ],
    },
    {
      type: 'category',
      label: '⛏️ Mineração de Produtos',
      collapsed: false,
      items: [
        'mineracao/como-funciona',
        'mineracao/iniciando-sessao',
        'mineracao/revisao-matches',
        'mineracao/interpretando-resultados',
      ],
    },
    {
      type: 'category',
      label: '🔍 Super Filter',
      collapsed: false,
      items: [
        'filtro-amazon/usando-filtro',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configurações',
      collapsed: false,
      items: [
        'configuracoes/custos-criterios',
        'configuracoes/tarifas-fba',
      ],
    },
    'faq',
  ],
};

module.exports = sidebars;
