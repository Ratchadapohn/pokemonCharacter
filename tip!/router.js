สร้าง folder ชื่อ pages 
ใน pages มี 2 folder 1.home 2.details
///////
1.home
มี index.tsx
import React from "react";

const Homepage = () => {
    return <div>homepage</div>;
};

export default Homepage;


2.details
มี index.tsx
import React from "react";

const Detailpage = () => {
    return <div>Detailpage</div>;
};

export default Detailpage;

//////////////


ในไฟล์ appendErrors.tsx
//////////////////////////////
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "@/page/home";
import Detailpage from "@/page/detail";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/",
            element: <Detailpage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
