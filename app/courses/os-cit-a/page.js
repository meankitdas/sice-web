import CoursePage from '@/components/CoursePage';

export default function OSCITAPage() {
  return (
    <CoursePage
      badge="OKCL Certified"
      title="OS-CIT 'A' Course"
      subtitle="Advanced Certificate in Information Technology"
      description="Advanced level IT course by OKCL"
      duration="6 Months"
      level="Intermediate"
      features={[
        'Advanced MS Office',
        'Programming Basics',
        'Database Management',
        'Web Technologies',
        'Networking Fundamentals',
        'Advanced Certificate'
      ]}
      bgGradient="from-green-600 to-blue-600"
    />
  );
}