import React from 'react'
import Ratings from "./Ratings";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Cardd = ({movie}) => {
    return (
        <div  style={{width:"70%"}}>
    <Card className="sb">
  <Card.Img className="alop" variant="top" src={movie.cover}/>
  <Card.Body className="de" style={{backgroundColor:"white"}} >
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
            Year : {movie.Year}<br/>  
            <Ratings Rate={movie.Rate} />  
            <Link to={`/movie/${movie.Title.split(" ").join('')}`}><button className="boo">Trailer & Description</button></Link>     
    </Card.Text>
  </Card.Body>
</Card>
</div>

)};


export default Cardd
