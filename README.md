This boilerplate is an integration of [React Admin](https://marmelab.com/react-admin/), enhanced by using [Hapify](https://docs.hapify.io/) as a code generator.

## Installation

Clone this repository and run `npm install`.

## Definition of the data models of your project

To define the data models for your project, run `npm run edit`.
This will start the Hapify data model management console.
To learn more about data model management, please refer to the [Hapify documentation](https://docs.hapify.io/getting-started/existing-boilerplate/step-2-edit-models/).

## Code generation

Run `npm run generate` to generate the code from the data models.

## Start the application

Run `npm start` and go to http://localhost:3000/

## Back-end

This boilerplate has no back-end. It uses [IndexedDB](https://developer.mozilla.org/fr/docs/Web/API/IndexedDB_API) (via [Dexie](https://dexie.org/)) to store the data.
If you want to use this boilerplate for your project, you will have to connect it to your back-end by defining your own [dataProvider](https://marmelab.com/react-admin/DataProviders.html) and [authProvider](https://marmelab.com/react-admin/DataProviders.html).
