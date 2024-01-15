import React, { useState } from 'react';



const CustomSelect: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(''); 

  const options: ISelectOption[] = [
    { value: 'option1', label: 'Opção 1' },
    { value: 'option2', label: 'Opção 2' },
    { value: 'option3', label: 'Opção 3' },
  ];

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectOption">Escolha uma opção:</label>
      <select
        id="selectOption"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <p>Opção selecionada: {selectedOption}</p>
    </div>
  );
};

export default CustomSelect;
