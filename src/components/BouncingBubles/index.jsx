import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

// TODO: feature BouncingBalls
const BouncingBalls = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const createBall = () => {
      const newBall = {
        id: balls.length + 1,
        startLeft: Math.floor(Math.random() * (window.innerWidth - 50)),
        startTop: Math.floor(Math.random() * (window.innerHeight - 50)),
        endLeft: Math.floor(Math.random() * (window.innerWidth - 50)),
        endTop: Math.floor(Math.random() * (window.innerHeight - 50)),
        xSpeed: Math.floor(Math.random() * 10) + 1,
        ySpeed: Math.floor(Math.random() * 10) + 1,
        isMovingToEnd: true,
      };
      setBalls(balls => [...balls, newBall]);
    };

    const interval = setInterval(() => {
      if (balls.length < 50) {
        createBall();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [balls]);

  useEffect(() => {
    const moveBalls = () => {
      setBalls(balls =>
        balls.map(ball => {
          const { startLeft, startTop, endLeft, endTop, xSpeed, ySpeed, isMovingToEnd } = ball;
          let newLeft, newTop, newXSpeed, newYSpeed, newIsMovingToEnd;
    
          if (isMovingToEnd) {
            newLeft = ball.left + xSpeed;
            newTop = ball.top + ySpeed;
            newXSpeed = newLeft > endLeft || newLeft < startLeft ? -xSpeed : xSpeed;
            newYSpeed = newTop > endTop || newTop < startTop ? -ySpeed : ySpeed;
            newIsMovingToEnd = newLeft > endLeft && newTop > endTop;
          } else {
            newLeft = ball.left - xSpeed;
            newTop = ball.top - ySpeed;
            newXSpeed = newLeft > endLeft || newLeft < startLeft ? -xSpeed : xSpeed;
            newYSpeed = newTop > endTop || newTop < startTop ? -ySpeed : ySpeed;
            newIsMovingToEnd = newLeft < startLeft && newTop < startTop;
          }
    
          return {
            ...ball,
            left: newLeft,
            top: newTop,
            xSpeed: newXSpeed,
            ySpeed: newYSpeed,
            isMovingToEnd: newIsMovingToEnd,
          };
        })
      );
    };
    

    const interval = setInterval(() => {
      moveBalls();
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bouncingBalls}>
      {balls.map(ball => (
        <div key={ball.id} className={styles.ball} style={{ left: ball.left, top: ball.top }} />
      ))}
    </div>
  );
};

export default BouncingBalls;
