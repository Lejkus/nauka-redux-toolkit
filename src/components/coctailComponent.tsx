import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteOne } from '../coctailSlice';
import { useAppDispatch } from '../hooks';

export default function CoctailComponent({ coctail }: { coctail: any }) {
  const dispatch = useAppDispatch()

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#1a1a1a' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={coctail.strDrinkThumb}
      />
      <CardContent >
        <Typography sx={{ color: 'white' }} gutterBottom variant="h5" component="div">
          {coctail.strDrink}
        </Typography>
        <Typography sx={{ color: 'white' }} variant="body2" color="text.secondary">
          {coctail.strInstructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { dispatch(deleteOne(coctail)) }}>Delete</Button>

      </CardActions>
    </Card>
  );
}
