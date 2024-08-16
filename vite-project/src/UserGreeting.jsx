import propsType from "prop-types"
function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.name}</h2>
    }
    return <h2>Please log in to continue</h2>
}
UserGreeting.propsType ={
    isLoggedIn : propsType.bool,
    name : propsType.string
}
UserGreeting.defaultProps = {
    name:"Guest",
    isLoggedIn : false
}
export default UserGreeting