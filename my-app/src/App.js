import './App.css'
import Movie from './components/Movie'

const App = () => {
  // let title = 'The Fellowship of the Ring'
  // let hours = '2:'
  // let minutes = '58'
  // let poster =
  //   'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'

  const fellowship = {
    title: 'The Fellowship of the Ring',
    hours: '2:',
    minutes: 58,
    poster:
      'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    href: 'https://www.imdb.com/title/tt0120737/'
  }

  const theTwoTowers = {
    title: 'The Two Towers',
    hours: '2:',
    minutes: 59,
    poster:
      '	https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg',
    href: 'https://www.imdb.com/title/tt0167261/'
  }

  const returnOfTheKing = {
    title: 'The Return of the King',
    hours: '3:',
    minutes: 21,
    poster:
      'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    href: 'https://www.imdb.com/title/tt0167260/'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings</h1>
      </header>
      <main>
        <Movie
          title={fellowship.title}
          hours={fellowship.hours}
          minutes={fellowship.minutes}
          poster={fellowship.poster}
          href={fellowship.href}
        />
        <Movie
          title={theTwoTowers.title}
          hours={theTwoTowers.hours}
          minutes={theTwoTowers.minutes}
          poster={theTwoTowers.poster}
          href={theTwoTowers.href}
        />
        <Movie
          title={returnOfTheKing.title}
          hours={returnOfTheKing.hours}
          minutes={returnOfTheKing.minutes}
          poster={returnOfTheKing.poster}
          href={returnOfTheKing.href}
        />
      </main>
    </div>
  )
}

export default App
