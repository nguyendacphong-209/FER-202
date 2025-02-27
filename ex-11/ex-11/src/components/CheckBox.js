import { useState } from 'react';


function CheckBox() {
  const [texts, setTexts] = useState('Inputtext...');


  return (
    <div>
    
      <input 
        type="text" 
        value={texts} 
        onChange={(e) => {setTexts(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>Input text is {texts}</p>
    </div>
  );
}
  
export default CheckBox;
