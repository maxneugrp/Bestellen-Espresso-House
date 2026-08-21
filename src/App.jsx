import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "@/components/Layout";

import NewOrder from "@/pages/NewOrder";
import MenuPage from "@/pages/MenuPage";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<NewOrder />} />
            <Route path="/menu" element={<MenuPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;