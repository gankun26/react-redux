import { useSelector, useDispatch } from 'react-redux'


export default function Lista() {
    const cursos = useSelector(state => state.cursos.data)
    const alunos = useSelector(state => state.alunos.data)
    
    /// ACTION START
    const dispatch = useDispatch()
    
    function adicionar() {
        dispatch({ type: 'add-curso', titulo: 'Node Javascript' })
    }

    /// ACTION END
    
    return (
        <>
            <ul>
                {cursos.map(item => <li>{item}</li>)}
            </ul>

            <ul>
                {alunos.map(item => <li>{item}</li>)}
            </ul>
            
            <button onClick={adicionar}>Adicionar curso</button>
            <button onClick={()=> dispatch({type: 'add-aluno', nome: 'Camila'})}>Adicionar aluno</button>
        </>
    )
}