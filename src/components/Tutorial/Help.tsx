export default function Help() {
  return (
    <span>
      <span className="font-bold">Frequency Assignment Problem</span> involves
      assigning different frequencies to nearby transmitters to prevent
      interference. <span className="font-bold">It's like graph coloring</span>,
      where transmitters are nodes, frequencies are colors, and the goal is to
      minimize colors while ensuring no connected nodes share the same one.
    </span>
  );
}
