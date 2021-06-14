export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c6edf85cb350ff506c6e60',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-bdyxyhhj',
                  apiId: '5994b29e-1c3d-4898-bf58-a876753d7790'
                },
                {
                  buildHookId: '60c6edf98dffd027bb5950a0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-n2m4if21',
                  apiId: '5d0d75e6-11bd-4669-8fd2-1cf478f18c18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Harsha9030/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-n2m4if21.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
