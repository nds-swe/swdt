module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: [
        'getting-started',
        'expectations',
        'guiding-thread',
      ],
    },
    {
      type: 'category',
      label: 'Theory',
      items: [
        'theory/devops',
        'theory/principles',
      ],
    },
    {
      type: 'category',
      label: 'Techniques',
      items: [
        'techniques/continuous-integration',
        'techniques/c4-modeling',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'tools/curl',
        'tools/docker',
        'tools/github-actions',
        'tools/postman',
        'tools/plantuml',
        'tools/spring',
      ],
    },
    {
      type: 'category',
      label: 'Tasks',
      items: [
        'tasks/about-tasks',
        'tasks/client-server',
        'tasks/spring-starter',
        'tasks/c4-exman',
        {
          type: 'category',
          label: 'Bites',
          items: [
            'tasks/bites/c4-model'
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ExMan',
      items: [
        'exman/suite'
      ],
    },
    {
      type: 'category',
      label: 'Help',
      items: [
        'help/faq',
        'help/books',
        'help/repositories',
      ],
    },
  ],
};
