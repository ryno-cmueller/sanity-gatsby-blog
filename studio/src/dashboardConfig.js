export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ff7bca16d5c4a012983c22e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yxqrdt4v',
                  apiId: '8c126786-57fe-4e84-bb4a-49e4c9f45982'
                },
                {
                  buildHookId: '5ff7bca13b92b301130c8411',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gp3ru8zq',
                  apiId: 'd96b9b55-dfe4-41ff-95c5-b4a6c01a7676'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryno-cmueller/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gp3ru8zq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
