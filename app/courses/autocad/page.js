import CoursePage from '@/components/CoursePage';

export default function AutoCADPage() {
  return (
    <CoursePage
      badge="Design Course"
      title="AutoCAD"
      subtitle="Professional 2D & 3D Drafting"
      description="Master AutoCAD for engineering and architectural design"
      duration="2 Months"
      level="Beginner to Advanced"
      features={[
        '2D Drawing & Drafting',
        '3D Modeling Basics',
        'Technical Drawing',
        'Architectural Plans',
        'Mechanical Design',
        'Industry Projects'
      ]}
      bgGradient="from-red-600 to-pink-600"
    />
  );
}