// import React,{useState,useEffect} from 'react'
// import Axios from 'axios'
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { findByLabelText } from '@testing-library/react';
// import './Card.scss'

// const useStyles = makeStyles({
//     root: {
//       maxWidth: "30%",
      
      
//     },
   
//   });

// function ProjectCard() {
//     const classes = useStyles();

    //     const [data,setData] = useState([]);
    //     useEffect(()=>{
    //         Axios.get('https://api.github.com/users/SabinGt/repos?per_page=3').then((response)=>{
    //             setData(response.data)
    //         })
    //     })
//   return (<>
// <div className='works'><h2 id="projects">PROJECTS</h2>
//         <h3 className="subtitle">Projects I have Recently Worked On</h3>
//         </div>
//     <div className="top">
    
//         {data.map((data)=>{
//             return(
//                 <div className='bottom'>
               
//                 <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {data.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {data.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//                 </div>
                
                
//             )
            
//         })}
        
      
//     </div>
//     </> )
// }

// export default ProjectCard