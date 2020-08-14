import React, { useState } from 'react'
import {connect} from 'react-redux'
import { addSmurf } from '../store/actions'


const SmurfForm = (props) => {
  
    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(formState)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
            <label htmlFor="Name">Name</label>
                <input
                type="text"
                name="name"
                placeholder="enter name"
                onChange={handleChanges}
                value={formState.name}
                />
                </div>
                <div>
                <label htmlFor="age">age</label>
                <input
                type="text"
                name="age"
                placeholder="age"
                onChange={handleChanges}
                value={formState.age}
                />
                </div>
                <div>
                <label htmlFor="height">height</label>
                <input
                type="text"
                name="height"
                placeholder="height"
                onChange={handleChanges}
                value={formState.height}
                />
                </div>
                <button type='submit'>add smurf</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return{
        addSmurf: state.addSmurf
    }
}
export default connect(mapStateToProps, {addSmurf})(SmurfForm)