import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export interface IToggleButtonOption {
  value: string;
  label: string;
}
export interface ICOIToggleButton {
  options: IToggleButtonOption[];
  activeTab: IToggleButtonOption;
  onTabChanged: (value: IToggleButtonOption) => void;
  groupStyle: React.CSSProperties;
  optionStyle: React.CSSProperties;
}
export const COIToggleButton = ({
  options = [],
  activeTab,
  onTabChanged,
  groupStyle = {},
  optionStyle = {},
}: ICOIToggleButton) => {
  const [activeValue, setActiveValue] =
    React.useState<IToggleButtonOption>(activeTab);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    value: IToggleButtonOption
  ) => {
    onTabChanged(value);
    setActiveValue(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={activeValue}
      exclusive
      onChange={handleAlignment}
      style={groupStyle}
    >
      {options?.map((option: IToggleButtonOption, index: number) => (
        <ToggleButton
          key={index}
          value={option}
          aria-label={option?.label}
          style={optionStyle}
        >
          {option?.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
