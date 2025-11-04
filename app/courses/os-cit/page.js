import CoursePage from '@/components/CoursePage';

export default function OSCITPage() {
  return (
    <CoursePage
      badge="OKCL Certified"
      title="OS-CIT Course"
      subtitle="Odisha State Certificate in Information Technology"
      description="Government recognized IT certification by OKCL"
      duration="3 Months"
      level="Beginner"
      features={[
        'Computer Fundamentals',
        'Operating System Basics',
        'MS Office Suite',
        'Internet & Email',
        'Digital India Services',
        'Government Certificate'
      ]}
      bgGradient="from-green-600 to-blue-600"
    />
  );
}