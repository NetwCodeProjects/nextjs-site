import { Metadata } from 'next';
import Header from '../components/HeaderDark';

export const metadata: Metadata = {
  title: 'Signup',
  description: 'Signup Page',
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      <nav></nav>
 
      {children}
    </section>
  );
}