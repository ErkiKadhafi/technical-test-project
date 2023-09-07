export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white p-5 rounded-xl h-full">{children}</div>;
}
