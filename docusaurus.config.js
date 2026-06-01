// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Super Miner — Central de Ajuda',
  tagline: 'Encontre produtos lucrativos na Amazon com inteligência artificial',
  favicon: 'img/favicon.ico',

  url: 'https://ajuda.superminer.com.br',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Super Miner',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ajudaSidebar',
            position: 'left',
            label: 'Central de Ajuda',
          },
          {
            href: 'https://superminer.com.br/v2',
            label: 'Acessar o Super Miner',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ajuda',
            items: [
              { label: 'Primeiros Passos', to: '/docs/primeiros-passos/criando-conta' },
              { label: 'Como Minerar', to: '/docs/mineracao/como-funciona' },
              { label: 'Perguntas Frequentes', to: '/docs/faq' },
            ],
          },
          {
            title: 'Super Miner',
            items: [
              { label: 'Acessar a plataforma', href: 'https://superminer.com.br/v2' },
              { label: 'Suporte via WhatsApp', href: 'https://wa.me/5512988968626' },
            ],
          },
        ],
        copyright: 'Super Miner. Todos os direitos reservados.',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
