import * as React from 'react';
import { CardTypes } from '../cards-types';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const CardTypeSelector: React.FC<{
  selectedValue: CardTypes;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}> = ({ selectedValue, handleChange }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Card Type</FormLabel>
    <RadioGroup aria-label="card-type" name="card-type-radio-grout" value={selectedValue} onChange={handleChange}>
      <FormControlLabel value={CardTypes.Fresh} control={<Radio color="primary" />} label="Fresh" />
      <FormControlLabel value={CardTypes.Rotten} control={<Radio color="secondary" />} label="Rotten" />
    </RadioGroup>
  </FormControl>
);

export default CardTypeSelector;
