import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "@/page/home";
import Detailpage from "@/page/detail/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/detail/:name",
      element: <Detailpage />,
    },
  ]);
  return (
    <div className="bg-[url('/images/list_bg.jpg')] max-h-[100%] bg-cover bg-center outline-double min-h-screen pt-[3%] ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
