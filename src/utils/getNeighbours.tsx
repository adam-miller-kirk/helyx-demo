export function getNeighborIndices(
  x: number,
  y: number,
  cols: number,
  rows: number
) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const neighbors: number[] = [];

  directions.forEach(([dx, dy]) => {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
      neighbors.push(ny * cols + nx); // Index in flat array
    }
  });

  return neighbors;
}
