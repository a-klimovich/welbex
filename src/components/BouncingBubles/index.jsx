import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

// TODO: feature BouncingBalls
const BouncingBalls = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const createBall = () => {
      const newBall = {
        id: balls.length + 1,
        left: Math.floor(Math.random() * (window.innerWidth - 50)),
        top: Math.floor(Math.random() * (window.innerHeight - 50)),
        xSpeed: Math.floor(Math.random() * 10) + 1,
        ySpeed: Math.floor(Math.random() * 10) + 1,
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
        balls.map(ball => ({
          ...ball,
          left: ball.left + ball.xSpeed,
          top: ball.top + ball.ySpeed,
          xSpeed: ball.left + ball.xSpeed > window.innerWidth - 50 || ball.left + ball.xSpeed < 0 ? -ball.xSpeed : ball.xSpeed,
          ySpeed: ball.top + ball.ySpeed > window.innerHeight - 50 || ball.top + ball.ySpeed < 0 ? -ball.ySpeed : ball.ySpeed,
        }))
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
