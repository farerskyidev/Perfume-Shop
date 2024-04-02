import React from "react";


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            secondname: "",
            bio: "",
            age: 1,
            siHappy: false
        };
    }
    
    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <div>
                    <input placeholder="Name" onChange={(e) => this.setState({firstname: e.target.value})}/>
                </div>
                <div>
                    <input placeholder="Second Name" onChange={(e) => this.setState({secondname: e.target.value})} />
                </div>
                <div>
                    <textarea placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})} />
                </div>  
                <div>
                    <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})} />
                </div>      
                
                <div className="checkbox">
                    <input type="checkbox" id="isHappy" />
                    <label htmlFor="isHappy" onChange={(e) => this.setState({siHappy: e.target.checked})}>isHappy</label>   
                </div>
                <div className="button">
                    <button 
                    type="button" onClick={() => {
                        this.myForm.reset()
                        this.props.onAddUser({
                            firstname: this.state.firstname,
                            secondname: this.state.secondname,
                            bio: this.state.bio,
                            age: this.state.age,
                            siHappy: this.state.siHappy,
                    })}
                    }>Add</button>
                </div> 
            </form> 
        ); 
    }

}

export default AddUser; 