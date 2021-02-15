export function application(
    state = {
        author: 'Gihan Primesha',
        description: 'Hapi js react boilerplate',
    },
    action
) {
    switch (action.type) {
        case 'sample.action':
            state = {
                ...state,
            };

            break;
    }
    return state;
}
