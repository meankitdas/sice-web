import CoursePage from '@/components/CoursePage';

export default function ScratchPage() {
  return (
    <CoursePage
      badge="Kids Programming"
      title="Scratch Programming"
      subtitle="Visual Programming for Kids"
      description="Fun and easy way to learn coding for children"
      duration="1 Month"
      level="Kids & Beginners"
      features={[
        'Visual Block-Based Programming',
        'Game Development',
        'Animation Creation',
        'Interactive Stories',
        'Logic & Problem Solving',
        'Fun Learning Experience'
      ]}
      bgGradient="from-pink-500 to-orange-500"
    />
  );
}