import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <h1>navbar here perhaps</h1>
      <Outlet />
      <div className="mt-auto text-3xl">footer</div>
    </div>
  );
}
