const Header = (props) => {
  
  return (
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
}

const Parts = (props) => {
  
  return (
    <>
      <p>{props.part1} {props.exercises1} </p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <Parts part1={props.part1} exercises1={props.exercises1} />
      <Parts part1={props.part2} exercises1={props.exercises2}/>
      <Parts part1={props.part3} exercises1={props.exercises3}/>
    </>
  )
}

const Total = (props) => {
  console.log(props);
  
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const title = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={title} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}

export default App