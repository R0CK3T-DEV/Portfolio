import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeTab } from "./routes/HomeTab";
import { WorksTab } from "./routes/WorksTab";
import { AppRoot } from "./routes/AppRoot";
import { KnowledgeTab } from "./routes/KnowledgeTab";
import { ContactTab } from "./routes/ContactTab";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster />
        <BrowserRouter>
            <Routes>
                <Route path="" element={<AppRoot />}>
                    <Route path="" element={<HomeTab />} />
                    <Route path="works" element={<WorksTab />} />
                    <Route path="knowledge" element={<KnowledgeTab />} />
                    <Route path="contact" element={<ContactTab />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
