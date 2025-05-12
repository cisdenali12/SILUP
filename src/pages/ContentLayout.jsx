
import './ContentLayout.css'
import { Outlet } from "react-router-dom";

export function ContentLayout() {
  return (
      <main>
        <Outlet />
      </main>
  );
}