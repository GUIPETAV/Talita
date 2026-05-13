import { LucideIcon } from 'lucide-react';
import { ExperienceCard } from './ExperienceCard';

interface Experience {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

interface ExperienceGroupProps {
  title: string;
  experiences: Experience[];
  activeCardId: number | null;
  completedCardIds: Set<number>;
  onSelect: (id: number, title: string, description: string) => void;
  onComplete: (id: number) => void;
}

export function ExperienceGroup({
  title,
  experiences,
  activeCardId,
  completedCardIds,
  onSelect,
  onComplete,
}: ExperienceGroupProps) {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2
          className="text-3xl mb-2"
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#d4a574',
            fontWeight: 400,
          }}
        >
          {title}
        </h2>
        <div className="w-24 h-px bg-primary/30 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            title={experience.title}
            description={experience.description}
            icon={experience.icon}
            number={experience.id}
            isActive={activeCardId === experience.id}
            isCompleted={completedCardIds.has(experience.id)}
            isBlocked={activeCardId !== null && activeCardId !== experience.id}
            onSelect={() => onSelect(experience.id, experience.title, experience.description)}
            onComplete={() => onComplete(experience.id)}
          />
        ))}
      </div>
    </section>
  );
}
