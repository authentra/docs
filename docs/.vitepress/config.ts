import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Authentra",
  description: "Authentication made simple",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/what-is-authentra' },
    ],

    sidebar: {
      '/guide/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/authentra/authentra' }
    ],
    search: {
      provider: 'local',
    }
  }
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is Authentra', link: '/guide/what-is-authentra' },
        { text: 'Getting Started', link: '/guide/getting-started'}
      ]
    }
  ]
}
