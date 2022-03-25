import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'kovpdudq',
  dataset: 'production',
  apiVersion: '2022-03-24',
  token:
    'skdZYBfs0wQQ3Bf4RASrMibSPbrWhnzHjSDprYviLmPnduLglKDXZVk0SQHWuoJBmePnyuCNFg99lYJzN9NxMGNCExSFag2390M78sDfeOlBAC1RUBZfn0qyPKg0HxvSFqrwDtMuURiGQehihRsfdeknQSYmIRamYHLoXV0PqMngaBpBDx2c',
  useCdn: false,
})