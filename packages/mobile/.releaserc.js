module.exports = {
  branch: 'master',
  plugins: [
    [
      '@qiwi/semrel-metabranch',
      {
        publish: {
          action: 'push',
          branch: 'gh-pages',
          from: './styleguide/lib',
          to: './mobile',
          message: 'update pijma-mobile docs',
        }
      }
    ],
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false
      }
    ],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.gitTag} [skip ci]\\n\\n${nextRelease.notes}'
      }
    ]
  ]
}
