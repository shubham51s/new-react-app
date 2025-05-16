import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/Not found page";

function App() {
  /*
    ** Notes
    dark theme -> https://coolors.co/palette/0d1321-1d2d44-3e5c76-748cab-f0ebd8  2. -> https://coolors.co/palette/01161e-124559-598392-aec3b0-eff6e0 3. ->https://coolors.co/palette/0d1321-1d2d44-3e5c76-748cab-f0ebd8
    light theme -> https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557
  */
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
