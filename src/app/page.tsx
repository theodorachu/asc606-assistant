import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        PWC Revenue Guide Assistant
      </h1>
      <div className="flex-1">
        <Chat />
      </div>
    </main>
  );
}