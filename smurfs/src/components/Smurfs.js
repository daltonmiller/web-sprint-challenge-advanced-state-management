import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurf } from '../store/actions'
import Smurf from './Smurf'
import SmurfForm from './SmurfForm'

const Smurfs = (props) => {

    useEffect(() => {
        props.fetchSmurf()
    }, [])

    if (props.updated) {
        props.fetchSmurf()
    }

    return (
        <div>
            <SmurfForm/>
            {props.data.map(smurf => (
                
                <Smurf  id={smurf.id} name={smurf.name} height={smurf.height} age={smurf.age}  />
                
                )
               )
                
                }
               
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error,
        updated: state.updated,
      
    }
    
}


export default connect(mapStateToProps, {fetchSmurf})(Smurfs)