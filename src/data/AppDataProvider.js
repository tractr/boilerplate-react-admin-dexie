import dexieDataProvider from './DexieDataProvider';

export default dexieDataProvider(
    'ReactAdmin', 1,
    {
        "posts": "++id,title,published_at,category,commentable"
    }
);
