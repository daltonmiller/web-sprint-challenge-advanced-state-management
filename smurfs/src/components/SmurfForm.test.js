import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SmurfForm from './SmurfForm.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {initialState, rootReducer} from '../store/reducers/rootReducer'

function renderWithRedux(
    ui,
    { initialState, store = createStore(rootReducer, initialState) } ={}
  ) {
    return {
    ...render(<Provider store={store}>{ui}</Provider>),store
    }
  }
  

test('test', () => {
    const {getByLabelText} = renderWithRedux(<SmurfForm/>)

    getByLabelText(/Name*/i)
    getByLabelText(/age*/i)
    getByLabelText(/height*/i)
}) 

test('test submit', () => {
    const {getByLabelText, getByText} = render(<SmurfForm/>) 

    const nameInput = getByLabelText(/Name/i)
    const ageInput = getByLabelText(/age/i)
    const heightInput = getByLabelText(/height/i)
}) 

test('changing inputs', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)

    const nameInput = getByLabelText(/name/i)

    fireEvent.change(nameInput, {target: { value: "test"},})
    expect(nameInput.value).toBe('test')
})