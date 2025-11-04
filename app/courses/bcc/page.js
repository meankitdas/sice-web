import CoursePage from '@/components/CoursePage';

export default function BCCCoursePage() {
  return (
    <CoursePage
      badge="NIELIT Certified • Scholarship Available"
      title="BCC Course"
      subtitle="Basic Computer Course"
      description="Start your computer learning journey with BCC"
      duration="60 Hours"
      level="Beginner"
      features={[
        'Computer Fundamentals',
        'Windows Operating System',
        'MS Word - Document Processing',
        'MS Excel - Spreadsheets',
        'MS PowerPoint - Presentations',
        'Internet and Email Basics',
        'Computer Security & Safety',
        'Digital India Initiatives'
      ]}
      bgGradient="from-blue-600 to-red-600"
    />
  );
}