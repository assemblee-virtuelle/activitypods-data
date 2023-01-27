module.exports = [
  {
    path: '/',
    readOnly: true
  },
  {
    path: '/trusted-apps',
    acceptedTypes: ['apods:TrustedApps'],
    readOnly: true
  },
  {
    path: '/pod-providers',
    acceptedTypes: ['apods:PodProviders'],
    readOnly: true
  }
];
