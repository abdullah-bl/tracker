import { Link, Outlet, useLocation } from "react-router-dom";
import SplitView from "../../components/splitView";

export default function Settings() {
  return (
    <div className="w-screen h-screen mx-auto p-2" dir="ltr">
      <SplitView list={<List />}>
        <Outlet />
      </SplitView>
    </div>
  );
}

const List = () => {
  const { pathname } = useLocation();
  return (
    <>
      <li
        className={` w-full rounded-lg p-1 text-center ${
          pathname.endsWith("/settings") ? "bg-slate-200 dark:bg-slate-800" : ""
        } `}
      >
        <Link to="/settings">Details</Link>
      </li>
      <li
        className={` w-full rounded-lg p-1 text-center ${
          pathname.endsWith("/import") ? "bg-slate-200 dark:bg-slate-800" : ""
        } `}
      >
        <Link to="/settings/import">Import</Link>
      </li>
      <li
        className={` w-full rounded-lg p-1 text-center ${
          pathname.endsWith("/export") ? "bg-slate-200 dark:bg-slate-800" : ""
        } `}
      >
        <Link to="/settings/export">Export</Link>
      </li>
    </>
  );
};
