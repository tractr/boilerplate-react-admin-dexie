import * as React from "react";

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {PostCreate, PostEdit, PostList, PostShow} from './resources/Post';

const App = () => (
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
    </Admin>
);

export default App;
