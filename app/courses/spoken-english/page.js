import CoursePage from '@/components/CoursePage';

export default function SpokenEnglishPage() {
  return (
    <CoursePage
      badge="Language Course"
      title="Spoken English"
      subtitle="Improve Your English Communication Skills"
      description="Master spoken English with confidence-building sessions"
      duration="3 Months"
      level="Beginner to Advanced"
      features={[
        'Grammar Fundamentals',
        'Vocabulary Building',
        'Pronunciation Practice',
        'Conversation Skills',
        'Public Speaking',
        'Interview Preparation',
        'Personality Development',
        'Group Discussions'
      ]}
      bgGradient="from-indigo-600 to-purple-600"
    />
  );
}