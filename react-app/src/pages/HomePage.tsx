import './HomePage.css'
import ReactHowler from 'react-howler'
import audioFile from './../welcome.mp3'
import { useState } from 'react'

function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="HomePage">
      <h2>Welcome to the Command App</h2>
      <p>
        This is app to store your daily used commands. <br />
        <br />
        For example you can add commands for apps you use. I mean software like
        npm, webpack, docker, powershel or even your programming language or
        even math xd if you want.
        <br /> Filter them by name, description or app.
        <br />
        You can also make lists of commands for your specific projects and
        needs.
      </p>
      <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <ReactHowler src={audioFile} playing={isPlaying} />
      </div>
    </div>
  )
}

export default HomePage
