import * as React from 'react';
import {
	Create,
	Edit,
	SimpleForm,
	required,
	TextInput,
	PasswordInput,
	AutocompleteInput,
	BooleanInput,
} from 'react-admin';

export const UserCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput validate={required()} source="name" label="Name" />
			<TextInput
				type="email"
				validate={required()}
				source="email"
				label="Email"
			/>
			<PasswordInput
				validate={required()}
				source="password"
				label="Password"
			/>
			<AutocompleteInput
				choices={[
					{ id: 'admin', name: 'admin' },
					{ id: 'user', name: 'user' },
				]}
				validate={required()}
				source="role"
				label="Role"
			/>
			<BooleanInput
				initialValue={false}
				validate={required()}
				source="banned"
				label="Banned"
			/>
		</SimpleForm>
	</Create>
);
export const UserEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput validate={required()} source="name" label="Name" />
			<TextInput
				type="email"
				validate={required()}
				source="email"
				label="Email"
			/>
			<PasswordInput
				validate={required()}
				source="password"
				label="Password"
			/>
			<AutocompleteInput
				choices={[
					{ id: 'admin', name: 'admin' },
					{ id: 'user', name: 'user' },
				]}
				validate={required()}
				source="role"
				label="Role"
			/>
			<BooleanInput
				initialValue={false}
				validate={required()}
				source="banned"
				label="Banned"
			/>
		</SimpleForm>
	</Edit>
);
