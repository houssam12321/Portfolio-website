// components/TimelineStep.tsx
interface TimelineStepProps {
  title: string;
  description: string;
  institution: string;
  year: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ title,institution, year }) => (
  <div className="md:w-1/2 p-6 bg-gradient-to-r bg-slate-500 to-indigo-500 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
  <h3 className="text-xl font-semibold mb-2 text-gray-100 dark:text-white">{title}</h3>
  <p className="text-sm text-gray-100 dark:text-gray-400">{institution}</p>

  <p className="text-xs text-gray-200 dark:text-gray-500 mt-2">{year}</p>
</div>

);

export default TimelineStep;
