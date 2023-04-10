import "./scss/style.scss";
import LeftBar from "./components/LeftBar";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";
function App() {
    return (
        <>
            <main className="main">
                <LeftBar />
                <MiddleBar />
                <RightBar />
            </main>
        </>
    );
}

export default App;
