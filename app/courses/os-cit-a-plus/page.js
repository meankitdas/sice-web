import CoursePage from '@/components/CoursePage';

export default function OSCITAPlusPage() {
  return (
    <CoursePage
      badge="OKCL Certified"
      title="OS-CIT 'A+' Course"
      subtitle="Professional Certificate in Information Technology"
      description="Professional level IT course with advanced programming by OKCL"
      duration="9 Months"
      level="Advanced"
      features={[
        'Advanced Programming',
        'Software Development',
        'Database Administration',
        'Web Application Development',
        'System Administration',
        'Professional Certificate'
      ]}
      bgGradient="from-green-600 to-blue-600"
    />
  );
}