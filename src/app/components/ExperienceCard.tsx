import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Heart, CheckCircle, Lock } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  number: number;
  isActive: boolean;
  isCompleted: boolean;
  isBlocked: boolean;
  onSelect: () => void;
  onComplete: () => void;
}

export function ExperienceCard({
  title,
  description,
  icon: Icon,
  number,
  isActive,
  isCompleted,
  isBlocked,
  onSelect,
  onComplete,
}: ExperienceCardProps) {
  const isFlipped = isActive;

  const handleClick = () => {
    if (isCompleted || isBlocked) return;
    onSelect();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: number * 0.02 }}
      className={`h-80 ${isCompleted || isBlocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        {/* Frente do Card */}
        <div
          className={`absolute w-full h-full rounded-3xl p-6 shadow-md border overflow-hidden transition-all duration-300 ${
            isCompleted
              ? 'bg-green-50 border-green-200 opacity-70'
              : isBlocked
              ? 'bg-card border-primary/10 opacity-40 grayscale'
              : 'bg-card border-primary/20'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-full -mr-12 -mt-12" />

          <div className="relative h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl ${isCompleted ? 'bg-green-100' : 'bg-primary/10'}`}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-green-500" strokeWidth={1.5} />
                ) : (
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                )}
              </div>
              <span
                className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/5"
                style={{ fontFamily: 'Georgia, serif', color: '#9a8777' }}
              >
                {number}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
              <div
                className="text-8xl mb-6"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontWeight: 300,
                  color: isCompleted ? '#86efac' : '#d4a574',
                  opacity: 0.3,
                }}
              >
                {number}
              </div>

              {isCompleted ? (
                <p className="text-xs text-green-500 font-medium" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Concluída ✓
                </p>
              ) : isBlocked ? (
                <Lock className="w-5 h-5 text-muted-foreground/40" />
              ) : (
                <div className="flex gap-1 justify-center">
                  {[1, 2, 3].map((heart) => (
                    <svg key={heart} className="w-4 h-4 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-auto text-center">
              <p
                className="text-xs"
                style={{ fontFamily: 'Georgia, serif', color: '#9a8777', fontStyle: 'italic' }}
              >
                {isCompleted ? 'Experiência vivida' : isBlocked ? 'Indisponível agora' : 'Clique para revelar'}
              </p>
            </div>
          </div>
        </div>

        {/* Verso do Card */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 shadow-md border border-primary/30 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-full flex flex-col justify-between">
            <div className="text-right">
              <span
                className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-card/80"
                style={{ fontFamily: 'Georgia, serif', color: '#9a8777' }}
              >
                {number}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
              <div className="bg-primary/15 p-4 rounded-full mb-4">
                <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>

              <h3
                className="mb-4"
                style={{ fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 500, color: '#6b5444' }}
              >
                {title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'Georgia, serif', color: '#6b5444', fontStyle: 'italic' }}
              >
                {description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span
                  className="text-xs"
                  style={{ fontFamily: 'Georgia, serif', color: '#9a8777', fontStyle: 'italic' }}
                >
                  Uma experiência especial
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onComplete();
              }}
              className="w-full py-3 rounded-2xl border-2 border-green-400 bg-green-50 hover:bg-green-100 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span
                className="text-sm font-medium text-green-600"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Marcar como feito
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
