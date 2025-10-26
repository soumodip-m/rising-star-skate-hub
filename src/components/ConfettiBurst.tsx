import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  color: string;
  rotation: number;
}

export default function ConfettiBurst() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showConfetti) return null;

  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--accent))',
    'hsl(var(--secondary))',
    '#FFD700',
    '#FF69B4',
    '#00CED1',
    '#FF6347',
    '#98FB98',
  ];

  const confettiPieces: ConfettiPiece[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDuration: 2 + Math.random() * 2,
    animationDelay: Math.random() * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            top: '-10px',
            width: '10px',
            height: '10px',
            backgroundColor: piece.color,
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.animationDelay}s`,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}
