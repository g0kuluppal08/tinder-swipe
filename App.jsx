import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import "./index.css";


const Card = ({ image, color, index }) => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const [swipeStatus, setSwipeStatus] = React.useState('✔️');

  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: color,
    boxShadow: '5px 10px 18px #888888',
    borderRadius: 10,
    width: 150,
    height: 200,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    top: `${index * -225}px`,
  };

  return (
    <motion.div
      center
      drag='x'
      x={motionValue}
      rotate={rotateValue}
      opacity={opacityValue}
      dragConstraints={{ left: -1000, right: 1000 }}
      style={style}
      onDragEnd={(event, info) => {
        if (Math.abs(info.point.x) <= 150) {
          motionValue.set(0); // Reset the card position if not swiped enough
        } else {
          setSwipeStatus(prev => (prev === '❌' ? '✔️' : '❌')); // Toggle between ❌ and ✔️
        }
        setTimeout(() => {
          setSwipeStatus(null); // Reset swipe status after a delay
        }, 500);
      }}
    >
      {swipeStatus && (
        <div style={{ position: 'absolute', top: 10, right: 10, color: swipeStatus === '❌' ? 'red' : 'green', fontSize: 30 }}>
          {swipeStatus}
        </div>
      )}
    </motion.div>
  );
};

function App() {
  const cards = [
  
    {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEV7AAD/3rprAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==',
      color: '#7B0000',
    },
     {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX/mA8wxRS0AAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==',
      color: '#FF980F',
    },
        {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAEsCAMAAABgwwj8AAAAD1BMVEU97ZY97Zg97ZQ/7Jg/7JUmaQP2AAACbElEQVR4nO3TQWqAQABD0Wi9/5mrnqCLQH2QPzC6/EySnOeZn+s8j+O4/z7MbXfc1/35tuejd92S7/k01yv48dd8eBW/r5k38uO/Jf7CeV6I6IWIPhCiz5gMUWdMzItOtAsU/cbUxeloFFEn+o2pi9PRKKJO9BtTF6ejUUSd6DemLk5Ho4g60W9MXZyORhF1ot+YujgdjSLqRL8xdXE6GkXUiX5j6uJ0NIqoE/3G1MXpaBRRJ/qNqYvT0SiiTvQbUxeno1FEneg3pi5OR6OIOtFvTF2cjkYRdaLfmLo4HY0i6kS/MXVxOhpF1Il+Y+ridDSKqBP9xtTF6WgUUSf6jamL09Eook70G1MXp6NRRJ3oN6YuTkejiDrRb0xdnI5GEXWi35i6OB2NIupEvzF1cToaRdSJfmPq4nQ0iqgT/cbUxeloFFEn+o2pi9PRKKJO9BtTF6ejUUSd6DemLk5Ho4g60W9MXZyORhF1ot+YujgdjSLqRL8xdXE6GkXUiX5j6uJ0NIqoE/3G1MXpaBRRJ/qNqYvT0SiiTvQbUxeno1FEneg3pi5OR6OIOtFvTF2cjkYRdaLfmLo4HY0i6kS/MXVxOhpF1Il+Y+ridDSKqBP9xtTF6WgUUSf6jamL09Eook70G1MXp6NRRJ3oN6YuTkejiDrRb0xdnI5GEXWi35i6OB2NIupEvzF1cToaRdSJfmPq4nQ0iqgT/cbUxeloFFEn+o2pi9PRKKJO9BtTF6ejUUSd6DemLk5Ho4g60W9MXZyORhF1ot+YujgdjSLqRL8xdXE6GkXUiX5j6uJ0NIqoE/3G1MXpaBRRJPpfzCwFK6Wr5HcAAAAASUVORK5CYII=',
      color: '#3DED97',
    },
      {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEVVzP+HQKZOAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg==',
      color: '#55ccff',
    },

  ];

  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '100px auto 0' }}>
        {cards.map((card, index) => (
          <Card key={index} image={card.image} color={card.color} index={index} />
        ))}
      </div>
    </div>
  );
}
export default App;