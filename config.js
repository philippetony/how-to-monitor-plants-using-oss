const config = {
  colors: 'zenika',
  fonts: 'heron',
  transition: 'hSlide',
  controllers: {
    fullscreen: true,
    focus: true,
    swiper: true,
    markdown: true,
    preload: true,
    pagenum: true,
    progressbar: true,
    consoleNotes: {
      clear: true
    }
  },
  modules: {
    // highlightjs: 'gradient-dark'
  },
  scenes: [

    {
      blocks: [
        {
          textVar: 'title',
          scale: 3.5,
          type: 'text',
          text: `<h1><small>Libérez votre </small><br/>
          prise de notes<br/>
          <small>découvrez le combo </small><br/>
          <b>Joplin</b> <small>+</small> <b>Mermaid</b></h1>
          `
        }
      ],
      colorVar: 'sec',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: `## Pourquoi *prendre des notes* ?
          - Remplace des notes papier
          - Notes personnelles / compte-rendu de réunion
          - Notes en cours de développement (brouillons ?)
          - Tips & tricks techniques (urls, méthodes)
          - Journal de travail
          - Mémoire "externe"
          `
        }
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: `## Pourquoi prendre des notes *électroniques* (vs. sur papier) ?
          
### Electronique :
- Indexé
- Partageable facilement (notes lisibles facilement ;) )
- Images
- Horodatage
- Plus rapide

### Papier
- Pas de batterie
- Dessins / Schémas
- Sketchs / MindMap
- Facilement sécurisable
          `
        }
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: `## Etat des lieux des logiciels de prise de notes
Les plus connus : 
- Microsoft OneNote (Desktop Windows/MAC, Web via 365, Mobile, Payant)
- Evernote (Mobile, Freemium)
- Google Keep (Mobile, Web, Free)
          `
        },
        {
          type: 'solid'
        }
      ],
      colorVar: 'main',
      notes: `OneNote (2003, 2007, 2010, 2013, 2016, 2020), open format
EverNote lancé en 2000, sur mobile d'abord, web en 2008-2011
Google Keep (2013)
      `
    },
    {
      blocks: [
        {
          type: 'solid'
        },
        {
          textVar: 'title',
          type: 'text',
          text: `## Petit tour de Joplin

          `
        },
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: `## Multi-device & multi-platform
- Packaging unifié (mono-repo) avec clients : 
  - Windows
  - Linux
  - (MacOs (via HomeBrew))
  - cli (npm)
  - Mobile :
    - iOS
    - Android
          `
        }
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          type: 'solid'
        },
        {
          textVar: 'title',
          type: 'text',
          text: `##Synchronisation & Chiffrage
Synchronisation des notes avec plusieurs services cloud :

`

        }
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '<h2>Extensible & Under the box</h2>'
        },
        {
          type: 'solid'
        },
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          type: 'solid'
        },
        {
          textVar: 'title',
          type: 'text',
          text: '## Focus sur **MermaidJS**'
        },
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      blocks: [
        {
          textVar: 'title',
          type: 'text',
          text: '# <b>Live</b> Démo'
        },
        {
          type: 'solid'
        },
      ],
      colorVar: 'main',
      notes: 'TODO'
    },
    {
      layout: "cols",
      blocks: [
        {
          type: 'text',
          colors: 'default',
          text: `## Les Plus
          * Open-source
          * Synchronisation multi-device
          * Multi-plateforme (Windows, macOS, Linux, Mobile, npm)
          `
        },
        {
          type: 'text',
          colors: 'hedy',
          text: `## Les Moins
          * Pas de synchronisation Google Drive
          * Pas d'autocomplétion sur les plugins
          * `
        },

      ],
      colorVar: 'main',
      notes: 'TODO'
    },

    // {
    //   blocks: [
    //     {
    //       textVar: 'text',
    //       type: 'text',
    //       step: 'li',
    //       responsive: true,
    //       text: `<h1>Scene 3</h1>
    //       <ul>
    //         <li>Item 1</li>
    //         <li>Item 2</li>
    //       </ul>`
    //     },
    //     {
    //       type: 'image',
    //       url: 'https://images.unsplash.com/photo-1562797807-aa9baed9a414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    //     }
    //   ],
    //   notes: 'TODO'
    // },
    //     {
    //       blocks: [
    //         {
    //           type: 'text',
    //           text: `## This block:
    // \`\`\`js
    // {
    //   type: 'text',
    //   text: '## This block:'
    // }
    // \`\`\`

    // <small>(in remote demo, highlightjs is not loaded because its weight)</small>
    // `,
    //           textVar: 'title'
    //         }
    //       ],
    //       colorVar: 'main'
    //     },
    //     {
    //       blocks: [
    //         {
    //           type: 'text',
    //           textVar: 'title',
    //           text: `# Go ahead
    // ## it\'s your **turn!**

    // Just edit <mark>config.js</mark>`
    //         }
    //       ]
    //     }
  ]
}
