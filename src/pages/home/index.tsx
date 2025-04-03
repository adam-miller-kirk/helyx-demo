import "./index.css";
import { useEffect, useState, FC } from "react";
import { numberGenerator } from "../../utils/random";
import GridItem from "../../components/cell/index";
import { getNeighborIndices } from "../../utils/getNeighbours";

const Home: FC = () => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(0);
  const [grid, setGrid] = useState<any[]>([]);

  const gridX = 12;
  const gridY = 12;

  useEffect(() => {
    let newGrid = [];

    for (let y = 0; y < gridY; y++) {
      for (let x = 0; x < gridX; x++) {
        const types = ["Dirt", "Tree", "Fire"];
        let state;
        if (x === 0 && y === 0) {
          state = "Dirt";
        } else {
          state = types[numberGenerator(3)];
        }

        newGrid.push({ x, y, state, col: gridX, rows: gridY });
      }
    }

    setGrid(newGrid);
    setLoading(false);
  }, []);

  const nextStage = (e: any) => {
    e.preventDefault();
    setTime(time + 1);
    const newGrid = [...grid];
    const nextGrid = [...newGrid];

    grid.forEach((cell, index) => {
      if (cell.state === "Fire") {
        const neighbors = getNeighborIndices(cell.x, cell.y, gridX, gridY);

        neighbors.forEach((nIndex) => {
          const neighbor = newGrid[nIndex];

          if (neighbor.state === "Tree" && numberGenerator(3) === 0) {
            nextGrid[nIndex] = { ...neighbor, state: "Fire" };
          }
        });

        if (numberGenerator(5) === 0) {
          nextGrid[index] = { ...cell, state: "Dirt" };
        }
      }

      if (cell.state === "Dirt" && numberGenerator(10) === 0) {
        nextGrid[index] = { ...cell, state: "Tree" };
      }
    });

    setGrid(nextGrid);
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <h1>Home Page</h1>
      </div>
      <div className="cardBody">
        {loading ? (
          <p>Loading</p>
        ) : (
          <>
            <button
              className="bg-blue-400 text-white mr-2 p-2"
              onClick={(e) => nextStage(e)}
            >
              Next Stage
            </button>
            {time}
            <div className="flex justify-center items-center w-full ">
              <div className={`grid grid-cols-12 gap-4 mt-4 w-200`}>
                {grid.map((item, index) => (
                  <GridItem key={index} state={item.state} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
