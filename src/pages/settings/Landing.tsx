import * as React from "react";
import { useSettingsStore, useStore } from "../../stores";

export default function SettingsLanding() {
  const { employees, appends } = useStore();
  const { appName, appVersion, reactVersion, init } = useSettingsStore(
    (state) => state
  );

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1>Settings Landing Page</h1>
      <div className="flex flex-col">
        <span>
          App Name:
          {appName}
        </span>
        <span>
          App Version:
          {appVersion}
        </span>
        <span>
          React Version:
          {reactVersion}
        </span>
        <span>
          Employee:
          {employees.length}
        </span>
        <span>
          Appends:
          {appends.length}
        </span>
      </div>
    </div>
  );
}
