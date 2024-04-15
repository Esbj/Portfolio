import Navigation from "./components/Navigation"
import Start from "./components/Start"
import Technologies from "./components/Technologies"

function App() {
  const Divider = () => {
    return (
      <div className="divider divider-primary"></div>
    )
  }

  return (
    <>
      <Navigation />
      <main className="container mx-auto">
        <Start />
        <Divider />
        <Technologies />
      </main>
    </>
  )
}

export default App
