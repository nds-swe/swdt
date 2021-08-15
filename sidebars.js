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
        'techniques/hexagonal-architecture',
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
        'tasks/architecture',
        'tasks/github-actions',
        'tasks/integration-testing',
        'tasks/strategy-pattern',
        'tasks/database',
        {
          type: 'category',
          label: 'Bites',
          items: [
            'tasks/bites/c4-model',
            'tasks/bites/architecture',
            'tasks/bites/junit',
            'tasks/bites/github-actions',
            'tasks/bites/docker-compose',
            'tasks/bites/rest-assured',
            'tasks/bites/health-checking',
            'tasks/bites/logging',
            'tasks/bites/swagger',
            'tasks/bites/telemetry',
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
