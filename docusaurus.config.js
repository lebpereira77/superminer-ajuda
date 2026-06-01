// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Super Miner — Central de Ajuda',
  tagline: 'Encontre produtos lucrativos na Amazon com inteligência artificial',
  favicon: 'img/favicon.ico',

  url: 'https://ajuda.superminer.com.br',
  baseUrl: '/',

  organizationName: 'lebpereira77',
  projectName: 'superminer-ajuda',

  onBrokenLinks: 'throw',
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
          routeBasePath: '/',
          showLastUpdateTime: false,
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
      image: 'img/social-card.png',
      navbar: {
        title: 'Super Miner',
        logo: {
          alt: 'Super Miner',
          src: 'img/logo.svg',
        },
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
              { label: 'Primeiros Passos', to: '/primeiros-passos/criando-conta' },
              { label: 'Como Minerar', to: '/mineracao/como-funciona' },
              { label: 'Perguntas Frequentes', to: '/faq' },
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
        copyright: `© ${new Date().getFullYear()} Super Miner. Todos os direitos reservados.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: undefined,
    }),
};

export default config;
