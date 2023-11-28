import TopicsList from '@/components/TopicsList'
export default function Home() {
  return (
    <div>
            <h1 className="text-3xl font-bold">WebDev Topics</h1> 
      <p className="mb-4">MongoDB CRUD Example</p>
      <p className="mb-2">Next-auth 인증</p>
      <TopicsList />
    </div>
  )
}
