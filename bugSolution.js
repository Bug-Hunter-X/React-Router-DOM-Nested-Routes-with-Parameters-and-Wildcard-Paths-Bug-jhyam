```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:param/*" element={<CatchAll />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function CatchAll() {
  let { param } = useParams();
  return (
    <div>
      <h1>Catch All Route</h1>
      <p>Param: {param}</p>
    </div>
  );
}
```