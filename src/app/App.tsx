import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <RouterProvider router={router} />
    </div>
  );
}
