import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className='loading-container'>
      <p>Cargando...</p>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export { TodosLoading }