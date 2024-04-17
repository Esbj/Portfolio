import WordCloud from "./WordCloud"
import words from "../data/words"
const Technologies = () => {
  return (
    <section>
      <h2>Technologies</h2>
      <WordCloud words={words} />
    </section>
  )
}
export default Technologies