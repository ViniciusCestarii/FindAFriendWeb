interface SubTopicProps {
  topic: string
}

const SubTopic = ({ topic }: SubTopicProps) => {
  return (
    <div className="flex items-center space-x-2 font-title ml-3">
      <div className="w-2 h-2 bg-white/80 rounded-full" />
      <h3>{topic}</h3>
    </div>
  )
}

export default SubTopic
