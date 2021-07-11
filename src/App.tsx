import { useState } from "react";
import UserList from "./Components/UserList";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="p-5">
      <button
        className="text-white rounded-lg px-4 py-2 bg-gray-900"
        onClick={() => setPage(page + 1)}
      >
        Go to next page
      </button>
      <div className="flex justify-around m-5 text-gray-700 underline text-2xl font-bold text-strt">
        <h2>Name</h2>
        <h2>Gender</h2>
        <h2>Email</h2>
      </div>
      <UserList page={page} />
    </div>
  );
}

export default App;
