let fruits = ["Apple", "Orange", "Banana"];
function Fruits() {
    return (
        <ol>
            {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
        </ol>
    );
}
export default Fruits;