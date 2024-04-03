import React from "react"
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Button from "./components/Button";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = { 
        users: [
            {
                id: 1,
                firstname: 'Maksim',
                lastname: 'Bas',
                bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
                age: 28,
                isHappy: true
            },
            {
                id: 2,
                firstname: 'Mark',
                lastname: 'Bon',
                bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
                age: 18,
                isHappy: false
            }
        ]
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     helpText: "Help Text",
  //     inputText: "H1 React", 
  //     inputTextSimple: "Just Reac text", 
  //     userDara: "",
  //   }
  //   this.inputClick = this.inputClick.bind(this)
    
  // }

  componentDidUpdate(prevProp) {
    if(this.state.helpText !== "Help")
    console.log('Some')
  } 

  render() {
    return (
      <div>
        <Header title="Header"/>

        <Banner title="Banner"/>
        
        <main className="main">
          <div className="container main__wrap">
            <div className="users">
              {/* <h1>{this.state.inputText}</h1>
              <h2>{this.state.userDara}</h2>  
              <input onChange={event => this.setState({userDara: event.target.value})} placeholder={this.state.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
              <p>{this.state.inputTextSimple}</p> */}
              <Button />
              <Users users={this.state.users} onDelete={this.deleteUser} />
            </div> 
            <aside className="aside">
              <AddUser onAddUser={this.onAddUser} onDelete={this.deleteUser} />
            </aside>
          </div> 
        </main>
        <Footer title="Footer"/>
      </div>
    )
  }
  inputClick() {
    this.setState({helpText: "Changed"})
    this.setState({inputText: "Changed React"})
    console.log("Clicked")
  } 
  mouseOver() {
    
    console.log("Mouse Over")
  }  
  deleteUser(id) {
    this.setState({
        users: this.state.users.filter((el) => el.id !== id)
    });
  }
  onAddUser = (user) => { 
    const id= this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] }) 
  }
} 
export default App;