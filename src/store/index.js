import { createStore, combineReducers } from 'redux'

/// PRIMEIRO REDUCER START
const estadoInicial = {
    data : ['html5', 'css3'], 
}


function cursos(state = estadoInicial, action) {
    switch(action.type) {
        case "add-curso":
            return { ...state, data: [...state.data, action.titulo] }
            case "ciclano":
                return "outra coisa"
            default:
            return state
        }
    }

/// PRIMEIRO REDUCER END

/// SEGUNDO REDUCER START
const estadoAlunos = {
    data : ['Alan', 'Matheus'], 
}


function alunos(state = estadoAlunos, action) {
    switch(action.type) {
        case "add-aluno":
            return { ...state, data: [...state.data, action.nome] }
            case "ciclano":
                return "outra coisa"
            default:
                return state
    }
}

/// SEGUNDO REDUCER END

const todosReducers = combineReducers({
    cursos,
    alunos
})

const store = createStore(todosReducers)

export default store