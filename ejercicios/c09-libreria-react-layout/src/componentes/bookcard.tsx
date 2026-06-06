import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import type { BookCardProps } from '../types/libro';


export function BookCard({ titulo, autor, anio, imgSrc }: BookCardProps) {
  //useState 
  const [likes, setLikes] = useState(0);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgSrc} style={{ height: '220px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{titulo}</Card.Title>
        <Card.Text className="text-muted small mb-1">{autor}</Card.Text>
        <Card.Text className="text-muted small"> Año: {anio}</Card.Text>
        
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Button variant="outline-dark" size="sm">Ver más</Button>
          <Button 
            variant="outline-danger" 
            size="sm" 
            onClick={() => setLikes(likes + 1)}
          >
            ❤️ {likes}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}