import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'
export default function Profile() {
    const navigate = useNavigate();  
    const person = useSelector((store) => store.person)
 
    return (
        <>
      <Card className='profile' sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={person.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Имя: {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          О себе: {person.about}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Почта: {person.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {
              navigate(`/myposts`);
            }} size="small">Посмотреть мои посты</Button>
                  </CardActions>
      </Card>
     
      </>
    );
  }