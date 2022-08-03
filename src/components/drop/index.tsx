import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { handleFile } from "../../utils/file";
import { notification } from "@tauri-apps/api";
import { useStore } from "../../stores";
import { processExcelFile } from "../../utils/handleFiles";

export default function Drop() {
  const { setEmployees, setIsLoading } = useStore((state) => state);
  const ref = useRef<HTMLInputElement>(null);

  const onChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    // Do something with the files
    setIsLoading();
    const start = Date.now();
    const file = ev?.target?.files?.[0];
    if (
      file?.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const data = await processExcelFile(file);
      if (data) {
        setEmployees(data);
        const end = Date.now();
        notification.sendNotification(
          `Success, Import completed in ${end - start}ms`
        );
      }
    } else {
      notification.sendNotification("Sorry, only .xlsx files are supported");
    }
    setIsLoading();
  };

  return (
    <div
      className=" z-50 rounded-lg border border-separate p-4 m-4 min-w-[500px] min-h-[250px] flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900"
      onClick={() => ref?.current?.click()}
    >
      <input
        hidden
        type={"file"}
        multiple={false}
        ref={ref}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={onChange}
      />
      <p>Click to select files</p>
    </div>
  );
}
