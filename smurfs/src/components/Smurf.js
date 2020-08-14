import React,  { useEffect } from 'react'
import { connect } from 'react-redux'
import {removeData} from '../store/actions'
const Smurf = props => {
    
console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.height}</h3>
            <h3>{props.age}</h3>
            <h3>{props.id}</h3>
            <button onClick={() => props.removeData(props.data)}>remove</button>

        {/* <img src={props.image} />
        
        <h5>{props.height}</h5>
        <h5>{props.gender}</h5> */}
        
        </div>
    )
}
const mapStateToProps = state => {
    return {
        removeData: state.removeData
    }
}



export default connect(mapStateToProps, {removeData})(Smurf)