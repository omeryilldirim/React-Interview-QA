import Question from "./Question";


const InterviewAccord = ({data}) => {
  return (
    <div className="row">
        {data.map((q) => <Question data={q} key={q.id}/>)}
    </div>
  )
}

export default InterviewAccord