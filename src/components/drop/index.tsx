import { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useUIStore } from "../../stores";
import { handleFile } from "../../utils/file";
import { notification } from "@tauri-apps/api";

export default function Drop() {
  const setIsLoading = useUIStore((state) => state.setIsLoading);
  const ref = useRef<HTMLInputElement>(null);

  const onChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    // Do something with the files
    setIsLoading();
    const file = ev?.target?.files?.[0];
    if (
      file?.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const data = await handleFile(file);
      if (data) {
        notification.sendNotification("Success");
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
