import { Button } from '@carbon/react';
import { Add } from '@carbon/react/icons';

function AddButton({ onClick }) {
  return <Button onClick={onClick}><Add /></Button>;
}

export default AddButton;
