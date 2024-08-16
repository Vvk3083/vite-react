import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card1 from "./Card1.jsx"
import Button from "./Button1.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import Fruits from "./Fruits1.jsx"
import MyComponent from "./MyComponent.jsx"
function app(){
  return (
    <>
      <Header/>
      <UserGreeting name="Vivek" isLoggedIn={true}/>
      <UserGreeting/>
      <h1>hello</h1>
      <Card1/>
      <Button/>
      <Student name="vivek" age={19} isStudent={true}/>
      <Student />
      <Fruits/>
      <MyComponent/>
      <Footer/>
    </>
  )
}
export default app