import {
	GET_LIST,
	GET_ONE,
	GET_MANY,
	GET_MANY_REFERENCE,
	CREATE,
	UPDATE,
	DELETE,
} from 'react-admin';
import Dexie from 'dexie';

export default (databaseName, databaseVersion, databaseStores) => {
	const db = new Dexie(databaseName);
	db.version(databaseVersion).stores(databaseStores);

	/**
	 * @param {string} type Request type, e.g GET_LIST
	 * @param {string} resource Resource name, e.g. "posts"
	 * @param {Object} payload Request parameters. Depends on the request type
	 * @returns {Promise} the Promise for response
	 */
	return async function (type, resource, params) {
		await db.open();
		const collection = db.table(resource);

		switch (type) {
			case DELETE:
				return await remove(collection, params);
			case GET_ONE:
				return await one(collection, params);
			case CREATE:
				return await add(collection, params);
			case UPDATE:
				return await update(collection, params);
			case GET_LIST:
				return await list(collection, params);
			case GET_MANY:
			case GET_MANY_REFERENCE:
				return await many(collection, params);
			default:
				return null;
		}
	};
};

async function remove(collection, params) {
	const data = await collection.delete(parseInt(params.id));
	return { data };
}

async function one(collection, params) {
	const data = await collection.get(parseInt(params.id));
	return { data };
}

async function add(collection, params) {
	params.data.id = await collection.add(params.data);
	return params;
}

async function update(collection, params) {
	await collection.update(params.data.id, params.data);
	return params;
}

async function list(collection, params) {
	let query = collection;
	convertBooleans(params.filter);

	// Filtering
	if (Object.keys(params.filter).length > 0) {
		query = query.where(params.filter);
	}
	// Sort
	else if (params.sort) {
		const { field, order } = params.sort;
		query = query.orderBy(field);
		if (order.toLowerCase() === 'desc') {
			query = query.reverse();
		}
	}

	// Count
	const count = await query.count();

	// Pagination
	if (params.pagination) {
		const { page, perPage } = params.pagination;
		const offset = page > 1 ? (page - 1) * perPage : 0;
		query = query.offset(offset).limit(perPage);
	}

	const data = await query.toArray();

	return {
		data: data,
		total: count,
		page: params.pagination ? params.pagination.page : 1,
		totalCount: count,
	};
}

async function many(collection, params) {
	const count = await collection.count();
	const data = await collection.toArray();

	return {
		data: data,
		total: count,
		page: 0,
		totalCount: count,
	};
}

function convertBooleans(data) {
	Object.keys(data).forEach((key) => {
		if (typeof data[key] === 'boolean') {
			data[key] = data[key] ? 1 : 0;
		}
	});
}
