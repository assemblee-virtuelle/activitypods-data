const anonReadPermission = {
  anon: {
    read: true
  }
};

module.exports = [
  {
    path: '/',
    readOnly: true,
    permissions: anonReadPermission,
    newResourcesPermissions: anonReadPermission
  },
  {
    path: '/trusted-apps',
    readOnly: true,
    permissions: anonReadPermission,
    newResourcesPermissions: anonReadPermission
  },
  {
    path: '/pod-providers',
    readOnly: true,
    permissions: anonReadPermission,
    newResourcesPermissions: anonReadPermission
  }
];
