import Navigation from "./components/Navigation"
import Start from "./components/Start"

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
      </main>
    </>
  )
}

export default App
