import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Analytics,
  Calendar,
  Chat,
  Editor,
  Email,
  Kanban,
  Notification,
  Settings,
  Users,
  Products,
  Ecommerce,
  Single,
} from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path=":id" element={<Single />} />
          </Route>

          <Route path="/products" element={<Products />} />
          <Route path="/email" element={<Email />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
