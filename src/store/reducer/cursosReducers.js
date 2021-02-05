const INITIAL_STATE = {
    dados: ['html', 'css']
}

export default function cursos(state = INITIAL_STATE, action) {
    if(action.type === 'ADD_CURSO') {
        return { ...state }
    } else {
        return state
    }
}