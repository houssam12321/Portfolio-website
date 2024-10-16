// components/CareerTimeline.tsx
import { careerTimeline } from '@/lib/content/career';
import TimelineStep from './TimelineStep';
import { Wrapper } from '@/components';

const CareerTimeline = () => {
  const { title, steps } = careerTimeline;

  return (
    <Wrapper id="career" className="mt-16">
      <h2 className="text-center heading-secondary mb-8">{title}</h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>

        <div className="space-y-12">
          {steps.map(({ id, title, description,institution, year }, index) => (
            <div
              key={id}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } mb-8`}
            >
              <TimelineStep
                title={title}
                description={description}
                institution={institution}
                year={year}
              />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerTimeline;
