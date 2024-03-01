import { useEffect, useState } from "react";
import {
  CustomTable,
  TDefaultTableProps,
} from "./components/table/default-table";

interface Actor {
  actorId: number;
  firstName: string;
  lastName: string;
  lastUpdate: string;
  //filmActors?: any;
}

function App() {
  const [actors, setActors] = useState<Actor[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    populateActorData(page, 10);
  }, [page]);

  const actorTableHeaders: TDefaultTableProps["headers"] = [
    { id: "actorId", headerNode: "Actor ID" },
    { id: "firstName", headerNode: "First Name" },
    { id: "lastName", headerNode: "Last Name" },
    { id: "lastUpdate", headerNode: "Last Update" },
  ];
  const actorTableData: TDefaultTableProps["data"] = actors?.map((actor) => [
    { id: actor.actorId.toString(), dataNode: actor.actorId },
    { id: actor.firstName, dataNode: actor.firstName },
    { id: actor.lastName, dataNode: actor.lastName },
    { id: actor.lastUpdate, dataNode: actor.lastUpdate },
  ]);

  const actorsTable = !actors.length ? (
    <p>
      <em>
        Loading... Please refresh once the ASP.NET backend has started. See{" "}
        <a href="https://aka.ms/jspsintegrationreact">
          https://aka.ms/jspsintegrationreact
        </a>{" "}
        for more details.
      </em>
    </p>
  ) : (
    <CustomTable
      className="p-10"
      headers={actorTableHeaders}
      data={actorTableData}
      paginator={{
        page,
        total: Math.ceil(count / 10),
        onPageChange: setPage,
      }}
    />
  );

  return (
    <div className="dark w-full h-full flex items-center justify-center bg-gray-700">
      {/* <h1 id="tabelLabel">Weather forecast</h1> */}
      {/* <p>This component demonstrates fetching data from the server.</p> */}
      {/* {contents} */}
      <div className="max-w-[800px]">{actorsTable}</div>
    </div>
  );
  async function populateActorData(page: number, pageSize: number = 10) {
    const response = await fetch(`api/actor?p=${page}&ps=${pageSize}`);
    const data = await response.json();
    const actors = data?.actors;
    setActors(actors);
    setCount(data?.count);
  }
}

export default App;
