import CoursePage from '@/components/CoursePage';

export default function JavaPage() {
  return (
    <CoursePage
      badge="Programming Course"
      title="Java Programming"
      subtitle="Learn Object-Oriented Programming"
      description="Master Java from basics to advanced concepts"
      duration="3 Months"
      level="Beginner to Advanced"
      features={[
        'Core Java Fundamentals',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Exception Handling',
        'Collections Framework',
        'Project Development'
      ]}
      bgGradient="from-orange-600 to-red-600"
    />
  );
}