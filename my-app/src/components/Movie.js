const Movie = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        Runtime: {props.hours}
        {props.minutes}
      </p>
      <a href={props.href} target="_blank">
        <img src={props.poster} alt={props.title} />
      </a>
    </div>
  )
}

export default Movie
