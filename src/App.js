import * as React from "react";

import { Admin, Resource } from 'react-admin';
import dataProvider from "./data/AppDataProvider";

import { UserList, UserShow } from './resources/User/Read.js';
import { UserCreate, UserEdit } from './resources/User/Write.js';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="user"
      options={{ label: 'User' }}
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      show={UserShow}
    />
  </Admin>
);

export default App;
