import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <p id='myName'> Cole Lybbert</p>
        <nav>
          <ul className='navLinks'>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </nav>
        <a className='cta' href='#'><button>Contact</button></a>
      </header>

      <div id='body'>
        <div id='bodyCard1' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>

        <div id='bodyCard2' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>

        <div id='bodyCard3' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>

        <div id='bodyCard4' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>

        <div id='bodyCard5' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>

        <div id='bodyCard6' className='bodyCards'>
          <img src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
          <p>The Polite Cat</p>
          <p>My face when someone expects me to be excited about something that I'm not excited about.</p>
          <a><button>Button</button></a>
        </div>
      </div>

    </>
  )
}

export default App
