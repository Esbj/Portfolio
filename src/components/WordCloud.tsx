import { useEffect, useState } from 'react';
import cloud, { Word } from 'd3-cloud';

type Props = {
  words: Word[]
}
const WordCloud = ({ words: data }: Props) => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const layout = cloud()
      .size([500, 250])
      .words(data)
      .padding(5)
      .rotate(0)
      .font("Roboto")
      .fontSize((d) => d.size as number)
      .on("end", (w) => setWords(w));

    layout.start();
  }, [data]);

  return (
    <svg width={500} height={500}>
      {words.map((d, i) => (
        <text key={i} textAnchor="middle" transform={`translate(${d.x}, ${d.y}) rotate(${d.rotate})`} style={{ fontSize: d.size }}>
          {d.text}
        </text>
      ))}
    </svg>
  );
};

export default WordCloud;
