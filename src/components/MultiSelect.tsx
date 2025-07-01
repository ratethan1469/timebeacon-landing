import React, { useState, useRef, useEffect } from 'react';

interface MultiSelectProps {
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onChange,
  placeholder = 'Select options...',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleOption = (value: string) => {
    const newValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    onChange(newValues);
  };

  const handleRemoveOption = (value: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onChange(selectedValues.filter(v => v !== value));
  };


  return (
    <div ref={dropdownRef} className={`multi-select ${className}`}>
      <div 
        className="multi-select-control"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="multi-select-value">
          {selectedValues.length === 0 ? (
            <span className="placeholder">{placeholder}</span>
          ) : (
            <div className="selected-items">
              {selectedValues.map(value => {
                const option = options.find(opt => opt.value === value);
                return (
                  <span key={value} className="selected-item">
                    {option?.label}
                    <button
                      type="button"
                      className="remove-item"
                      onClick={(e) => handleRemoveOption(value, e)}
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <div className="multi-select-arrow">
          {isOpen ? '▲' : '▼'}
        </div>
      </div>

      {isOpen && (
        <div className="multi-select-menu">
          {options.map(option => (
            <div
              key={option.value}
              className={`multi-select-option ${selectedValues.includes(option.value) ? 'selected' : ''}`}
              onClick={() => handleToggleOption(option.value)}
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => {}} // Handled by parent onClick
                className="option-checkbox"
              />
              <span className="option-label">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};