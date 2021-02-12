export function sample(state = { gihan: 'test' }, action) {
	switch (action.type) {
		case 'sample.action':
			state = {
				...state,
			};

			break;
	}
	return state;
}
