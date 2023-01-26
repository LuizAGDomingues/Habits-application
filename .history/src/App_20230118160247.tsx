import './styles/global.css'
import logoImage from './assets/logo.svg'

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <img src={logoImage} alt="" />
      </div>
    </div>
  )
}

export default App
