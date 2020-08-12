Package.describe({
  name: 'igoandsee:agenda-jobs-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('mongo@1.1.17');
  api.use('zimme:collection-timestampable@1.0.9');
  api.mainModule('agenda-jobs-collection.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('igoandsee:agenda-jobs-collection');
  api.mainModule('agenda-jobs-collection-tests.js');
});
