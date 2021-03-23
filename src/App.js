import * as React from "react";

import { Admin, Resource } from 'react-admin';
import dataProvider from "./data/AppDataProvider";

import {PostCreate, PostEdit, PostList, PostShow} from './resources/Post';

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} />
    </Admin>
);

export default App;
