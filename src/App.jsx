import CharsList from "./components/charsList";

function App() {
    //Main page
    return (
        <div className="bg-neutral-900 flex flex-col justify-center items-center">
            <h1 className="text-neutral-100 text-7xl text-center p-5">
                Ricky and Morty
            </h1>
            <CharsList />
        </div>
    );
}

export default App;
