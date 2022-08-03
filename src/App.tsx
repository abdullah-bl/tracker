import Index from "./pages";
import { useEffect } from "react";
import Loading from "./components/loading";
import { useStore } from "./stores";

function App() {
  const { isLoading, init, error, isError } = useStore((state) => state);

  useEffect(() => {
    init();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error {JSON.stringify(error, null, 2)}</div>;
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <Index />
    </div>
  );
}

export default App;
