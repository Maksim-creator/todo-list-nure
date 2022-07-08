import React, { useState } from 'react';
import { Switch, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import AdapterDateFns from '@date-io/date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { TextFieldProps } from '@mui/material/TextField/TextField';

interface Props {
    selectedDate: Date;
    setSelectedDate: (value: Date) => void;
    handleSwitchChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    handleDateChange: (date: any, e: any) => void;
}

const TimePicker: React.FC<Props> = ({
  handleSwitchChange,
  handleDateChange,
  setSelectedDate,
  selectedDate,
}) => {
  const a = 1;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <Switch color="warning" onChange={handleSwitchChange} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          onChange={handleDateChange}
          value={selectedDate}
          renderInput={(params: TextFieldProps) => <TextField value={params.value} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default TimePicker;
