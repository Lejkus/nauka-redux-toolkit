import { fetchCoctail } from './coctailSlice'
import { deleteAll } from './coctailSlice'
import { useAppSelector, useAppDispatch } from './hooks'
import CoctailComponent from './components/coctailComponent'

import LoadingButton from '@mui/lab/LoadingButton';


function App() {
  const state = useAppSelector((state) => state.coctail)
  const dispatch = useAppDispatch()

  return (
    <>
      {state.coctails ? state.coctails.map((coctail) => {
        return <CoctailComponent coctail={coctail} />
      }) : <></>}
      {state.loading ? <div>loading...</div> : <></>}

      <LoadingButton sx={{backgroundColor:'#1a1a1a'}} loading variant="outlined">
        ADD
        
      </LoadingButton>

      <button onClick={() => { dispatch(fetchCoctail()) }}>ADD</button>
      <button onClick={() => { dispatch(deleteAll()) }}>DELETE ALL</button>
    </>
  )
}

export default App
