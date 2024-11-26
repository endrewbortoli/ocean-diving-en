import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CardWithAnimatedText = ({ coordinates }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [showCoordinates, setShowCoordinates] = useState(false);

  useEffect(() => {
    const texts = [
      "Recebendo dados das missões...",
      "GPS atualizado e pontos das missões ativos",
      "Selecione a missão para começar a sua jornada!",
    ];

    if (lineIndex < texts.length) {
      if (!isErasing) {
        if (charIndex < texts[lineIndex].length) {
          const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + texts[lineIndex][charIndex]);
            setCharIndex(charIndex + 1);
          }, 30);
          return () => clearTimeout(timeout);
        } else {
          if (lineIndex === 0) {
            const eraseTimeout = setTimeout(() => {
              setIsErasing(true);
            }, 600);
            return () => clearTimeout(eraseTimeout);
          } else if (lineIndex === 1) {
            const showCoordsTimeout = setTimeout(() => {
              setShowCoordinates(true);
              setIsErasing(true);
            }, 600);
            return () => clearTimeout(showCoordsTimeout);
          }
        }
      } else {
        const eraseTimeout = setTimeout(() => {
          setDisplayedText("");
          setIsErasing(false);
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(eraseTimeout);
      }
    }
  }, [lineIndex, charIndex, isErasing]);

  return (
    <div className="card" style={{ position: 'relative', width: '100%', height: '100%' }}>


      {/* Texto principal - canto inferior esquerdo */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '2px',
          color: 'white',
          fontWeight: 'bold',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '12px',
          borderRadius: '4px',
        }}
      >
        <p
          style={{
            fontSize: '32px',
            marginBottom: '8px',
          }}
        >
          STATUS
        </p>
        <motion.p
          key={lineIndex}
          style={{
            fontSize: '18px',
            marginBottom: '12px',
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
        </motion.p>

        {showCoordinates && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {coordinates.map((coord, index) => (
              <motion.p
                key={index}
                style={{
                  color: 'red',
                  fontSize: '16px',
                  whiteSpace: 'nowrap',
                  fontFamily: 'monospace',
                  margin: '6px 0',
                }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.25 }}
              >
                {coord}
              </motion.p>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CardWithAnimatedText;
