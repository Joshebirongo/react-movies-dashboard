//Import components
import Navbar from "./components/Navbar";
// Import the pages
import Dashboard from "./pages/Dashboard";
// Import the CSS styles
import "./styles/Dashboard.css";

export default function App() {
    return (
        <>
            <Navbar />
            <Dashboard />
        </>
    );
}