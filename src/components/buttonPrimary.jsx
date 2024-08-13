import { Button } from '@carbon/react';

function ButtonPrimary({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default ButtonPrimary;
