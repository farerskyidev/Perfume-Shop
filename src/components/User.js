    import React from "react";
    import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
    import AddUser from "./AddUser"
    class User extends React.Component {

        
        constructor(props) {
            super(props);
            this.state = {
                editForm: false,
            };
        }
                    
        render() {
            const { user } = this.props;
            return (
                <div className="user">
                    <header>header</header>
                    <IoCloseCircleSharp onClick={() => this.props.onDelete(user.id)} className="delete-icon" />
                    <IoHammerSharp onClick={() => {
                        this.setState({
                            editForm: !this.state.editForm
                        })
                    }} className="edit-icon" />
                    <h3>{user.firstname} {user.lastname}</h3>
                    <p>{user.bio}</p>

                    {this.state.editForm && <AddUser />}
                </div>
            );
        }
    }

    export default User; 