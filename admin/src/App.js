import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { UserList } from './users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:3345')}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;