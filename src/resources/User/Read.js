import * as React from 'react';
import {
	Show,
	SimpleShowLayout,
	Datagrid,
	List,
	NumberField,
	TextField,
	EmailField,
	BooleanField,
	DateField,
} from 'react-admin';
import { UserFilter } from './Filter.js';

export const UserList = (props) => (
	<List {...props} filters={<UserFilter />}>
		<Datagrid rowClick="edit">
			<NumberField sortable={false} source="id" label="Id" />
			<TextField source="name" label="Name" />
			<EmailField source="email" label="Email" />
			<TextField sortable={false} source="role" label="Role" />
			<BooleanField sortable={false} source="banned" label="Banned" />
		</Datagrid>
	</List>
);
export const UserShow = (props) => (
	<Show {...props}>
		<SimpleShowLayout>
			<NumberField sortable={false} source="id" label="Id" />
			<TextField source="name" label="Name" />
			<EmailField source="email" label="Email" />
			<TextField sortable={false} source="role" label="Role" />
			<BooleanField sortable={false} source="banned" label="Banned" />
			<DateField
				sortable={false}
				source="lastConnectedAt"
				label="Last Connected At"
			/>
		</SimpleShowLayout>
	</Show>
);
