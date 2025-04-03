const GridItem = ({ state }: { state: string }) => {
  let icon = "❓";

  if (state === "Dirt") icon = "🌱";
  if (state === "Tree") icon = "🌳";
  if (state === "Fire") icon = "🔥";

  return <p>{icon}</p>;
};

export default GridItem;
