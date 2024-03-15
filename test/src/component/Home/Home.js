import React, { useState, useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import './Home.css';

const Home = (props) => {
  const { name, id,  det, random } = props;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedCheckboxState = localStorage.getItem(`checkbox_${id}`);
    if (storedCheckboxState) {
      setIsChecked(JSON.parse(storedCheckboxState));
    }
  }, [id]);

  const toggleCheckbox = () => {
    const newCheckboxState = !isChecked;
    setIsChecked(newCheckboxState);
    localStorage.setItem(`checkbox_${id}`, JSON.stringify(newCheckboxState));
  };

  const btn1 = () => {
    det(id);
  };

  

  return (
    <div className='main_card'>
      <input
        type='checkbox'
        className='checkbox-input'
        id={id}
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <div className='cardHome' style={{ borderLeftColor: random }}>
        <h2 style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>{name}</h2>
        <h4 onClick={btn1}><MdDeleteOutline /></h4>
      </div>
    </div>
  );
};

export default Home;
