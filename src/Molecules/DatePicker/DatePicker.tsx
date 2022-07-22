import React from 'react';
//import 'rsuite/dist/rsuite.min.css';
import './Styles.css';
import { DatePicker } from 'rsuite';

export const BasicDatePicker = (props: any) => {
  return <DatePicker {...props} ranges={[]} />;
};
