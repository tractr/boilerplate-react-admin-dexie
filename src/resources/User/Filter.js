import * as React from 'react';
import {
	Filter,
	TextInput,
	AutocompleteInput,
	NullableBooleanInput,
} from 'react-admin';

export const UserFilter = (props) => (
	<Filter {...props}>
		<TextInput resettable source="name" label="Name" />
		<TextInput resettable source="email" label="Email" />
		<AutocompleteInput
			choices={[
				{ id: 'admin', name: 'admin' },
				{ id: 'user', name: 'user' },
			]}
			source="role"
			label="Role"
		/>
		<NullableBooleanInput source="banned" label="Banned" />
	</Filter>
);
