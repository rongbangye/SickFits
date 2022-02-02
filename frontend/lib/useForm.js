import { number } from 'prop-types';
import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);
  // create intialValues for the useEffect on watch for changes
  // if we use the intial, it will create infinite loop
  const initialValues = Object.values(initial).join('');

  // when we go to the updateProduct Page, inital data didn't show up because it is still in the loading stage
  // when the initial data changes, like we go from loading to actually having the data
  // then we need to update it, use useEffect

  useEffect(() => {
    // this function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  // {
  //   name: 'Wes',
  //   description: 'nice shoe',
  //   price: 1000
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;
    // hmtl input will return string, so we we need to make sure the number input will be return as number.
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      // copy the exisiting state
      ...inputs,
      // update the piece state
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
