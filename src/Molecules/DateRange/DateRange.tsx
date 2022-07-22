import React from 'react';
//import 'rsuite/dist/rsuite.css';
import '../DatePicker/Styles.css';
import { DateRangePicker } from 'rsuite';

export const BasicDatePickerRange = (props: any) => {
  return <DateRangePicker {...props} ranges={[]} />;
};
