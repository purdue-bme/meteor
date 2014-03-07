Package.describe({
  summary: "Dictionary data structure allowing non-string keys",
  version: '1.0.0',
  internal: true
});

Package.on_use(function (api) {
  api.export('IdMap');
  api.use(['underscore', 'json', 'ejson']);
  api.add_files([ 'id-map.js' ]);
});

