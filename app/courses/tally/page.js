import CoursePage from '@/components/CoursePage';

export default function TallyPage() {
  return (
    <CoursePage
      badge="Accounting Course"
      title="TallyPrime"
      subtitle="Complete Accounting Software Training"
      description="Master TallyPrime with GST compliance"
      duration="2 Months"
      level="Beginner to Advanced"
      features={[
        'TallyPrime Fundamentals',
        'Voucher Entry & Management',
        'GST Implementation',
        'Inventory Management',
        'Financial Reports',
        'Practical Projects'
      ]}
      bgGradient="from-yellow-600 to-orange-600"
    />
  );
}