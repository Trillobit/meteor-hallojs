Package.describe({
  name: 'tibit:hallo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Trillobit/meteor-hallojs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.1.7');
  api.addFiles('tibit_hallo.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tibit:hallo');
  api.addFiles('tibit_hallo-tests.js');
});
