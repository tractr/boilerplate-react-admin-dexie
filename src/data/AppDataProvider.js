import dexieDataProvider from './DexieDataProvider';

export default dexieDataProvider(
  'ReactAdmin', 1,
  {
    user: "++id,name,&email,role,banned",
  }
);
