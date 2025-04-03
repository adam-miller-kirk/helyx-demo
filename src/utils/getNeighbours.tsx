export function getNeighborIndices(
  cellX: number,
  cellY: number,
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
    const neighbourX = cellX + dx;
    const neighbourY = cellY + dy;

    // check if neighbour position is in grid bounds
    if (
      neighbourX >= 0 &&
      neighbourX < cols &&
      neighbourY >= 0 &&
      neighbourY < rows
    ) {
      // if in bounds calculate and push neightbour Index  (3 * 12 + 3 = 39)
      neighbors.push(neighbourY * cols + neighbourX);
    }
  });

  return neighbors;
}
