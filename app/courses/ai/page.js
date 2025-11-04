import CoursePage from '@/components/CoursePage';

export default function AIPage() {
  return (
    <CoursePage
      badge="Emerging Technology"
      title="Artificial Intelligence"
      subtitle="Introduction to AI & Machine Learning"
      description="Learn AI fundamentals and practical applications"
      duration="3 Months"
      level="Intermediate"
      features={[
        'AI Fundamentals',
        'Machine Learning Basics',
        'Python for AI',
        'Data Analysis',
        'Neural Networks Introduction',
        'Real-world AI Projects'
      ]}
      bgGradient="from-purple-600 to-blue-600"
    />
  );
}