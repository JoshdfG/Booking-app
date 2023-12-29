// components/StatePicker.js
import React,{useState} from 'react';

const StatePicker = ({ onChange, value,destinationState1 }) => {
  // const [destinationState1, setDestinationState1] = useState(true);
  const nigerianStates = [
    { state: 'Abia', capital: 'Umuahia' },
    { state: 'Adamawa', capital: 'Yola' },
    { state: 'Akwa Ibom', capital: 'Uyo' },
    { state: 'Anambra', capital: 'Awka' },
    { state: 'Bauchi', capital: 'Bauchi' },
    { state: 'Bayelsa', capital: 'Yenagoa' },
    { state: 'Benue', capital: 'Makurdi' },
    { state: 'Borno', capital: 'Maiduguri' },
    { state: 'Cross River', capital: 'Calabar' },
    { state: 'Delta', capital: 'Asaba' },
    { state: 'Ebonyi', capital: 'Abakaliki' },
    { state: 'Edo', capital: 'Benin City' },
    { state: 'Ekiti', capital: 'Ado-Ekiti' },
    { state: 'Enugu', capital: 'Enugu' },
    { state: 'FCT - Abuja', capital: 'Abuja' },
    { state: 'Gombe', capital: 'Gombe' },
    { state: 'Imo', capital: 'Owerri' },
    { state: 'Jigawa', capital: 'Dutse' },
    { state: 'Kaduna', capital: 'Kaduna' },
    { state: 'Kano', capital: 'Kano' },
    { state: 'Katsina', capital: 'Katsina' },
    { state: 'Kebbi', capital: 'Birnin Kebbi' },
    { state: 'Kogi', capital: 'Lokoja' },
    { state: 'Kwara', capital: 'Ilorin' },
    { state: 'Lagos', capital: 'Ikeja' },
    { state: 'Nasarawa', capital: 'Lafia' },
    { state: 'Niger', capital: 'Minna' },
    { state: 'Ogun', capital: 'Abeokuta' },
    { state: 'Ondo', capital: 'Akure' },
    { state: 'Osun', capital: 'Osogbo' },
    { state: 'Oyo', capital: 'Ibadan' },
    { state: 'Plateau', capital: 'Jos' },
    { state: 'Rivers', capital: 'Port Harcourt' },
    { state: 'Sokoto', capital: 'Sokoto' },
    { state: 'Taraba', capital: 'Jalingo' },
    { state: 'Yobe', capital: 'Damaturu' },
    { state: 'Zamfara', capital: 'Gusau' },
  ];

  return (
    <select 
    className='textarea w-[90%] p-2 rounded-lg bg-slate-500 mb-10 outline-none text-white' onChange={onChange} value={value}>
    <option value="">{destinationState1 ? 'Select Destination' : 'Select Takeoff'}</option>
      {nigerianStates.map((item, index) => (
        <option className='textarea w-[90%] p-2 rounded-lg bg-cyan-900 text-white mb-10 outline-none' key={index} value={item.state}>
          {item.state} - {item.capital}
        </option>
      ))}
    </select>
  );
};

export default StatePicker;
