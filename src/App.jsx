import "./scss/style.scss";
import LeftBar from "./components/LeftBar";
import MiddleBar from "./components/MiddleBar";
import RightBar from "./components/RightBar";
import MobileBar from "./components/MobileBar";
function App() {
    return (
        <>
            <main className="main">
                <LeftBar />
                <MiddleBar />
                {window.innerWidth > 600 ? <RightBar /> : <MobileBar />}
            </main>
        </>
    );
}

export default App;
