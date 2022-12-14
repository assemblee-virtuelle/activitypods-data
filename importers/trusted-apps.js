const path = require('path');
const urlJoin = require('url-join');
const { ImporterMixin } = require('@semapps/importer');
const CONFIG = require('../config/config');

module.exports = {
  name: 'importers.trusted-apps',
  mixins: [ImporterMixin],
  settings: {
    source: {
      getAllFull: path.resolve(__dirname, './files/trusted-apps.json'),
      fieldsMapping: {
        slug: 'domainName'
      },
    },
    dest: {
      containerUri: urlJoin(CONFIG.HOME_URL, 'trusted-apps')
    }
  },
  methods: {
    transform(data) {
      return({
        '@type': 'apods:TrustedApps',
        'apods:domainName': data.domainName,
        'apods:name': data.name,
        'apods:description': data.description,
        'apods:logo': data.logo,
        'apods:locales': data.locales,
        'apods:handledTypes': data.handledTypes,
      });
    },
  }
};
