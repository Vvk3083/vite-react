function Button(){
    const styles = {
        height: "80px",
        width: "100px",
        padding: "10px",
        backgroundColor: "aqua",
        border: "none",
        borderRadius: "10%",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "700",
    }
    function handleClick(){
        console.log("OUCH");
    }
    return (
        
        <button onClick={handleClick} style={styles}>Click me</button>
    )
}
export default Button