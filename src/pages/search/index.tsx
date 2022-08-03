import { useEffect, useRef, useState } from "react";
import { useStore } from "../../stores";
import { FixedSizeList as List } from "react-window";

export default function Search() {
  const { employees } = useStore((state) => state);
  const [filtered, setFiltered] = useState<any[]>(employees);

  useEffect(() => {
    setFiltered(employees);
  }, [employees]);

  const onSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    const search = ev.target.value;
    const filtered = employees.filter((employee) => {
      return employee?.employee_name
        ?.toLowerCase()
        .includes(search.toLowerCase());
    });
    setFiltered(filtered);
  };

  const Column = ({ index, style }: { index: number; style: any }) => (
    <div className="p-2 border-b" style={style}>
      {filtered[index].employee_name}
    </div>
  );

  return (
    <div className="flex flex-col relative h-screen">
      <div className="flex justify-center items-center w-full py-4 p-2">
        <input
          onChange={onSearch}
          aria-label="search"
          type={"search"}
          className="w-full md:w-1/2 lg:w-1/3 rounded-full px-3 py-2 text-black dark:bg-gray-200 text-center"
          placeholder="Search..."
          autoFocus
        />
      </div>
      <div className=" container mx-auto ">
        <List
          direction="rtl"
          height={window.innerHeight}
          width={"100%"}
          itemCount={filtered.length}
          className="flex flex-col gap-2 justify-center items-center w-full h-full"
          itemSize={50}
          overscanCount={10}
        >
          {Column}
        </List>
      </div>
    </div>
  );
}
