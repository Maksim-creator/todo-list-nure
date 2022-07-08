import React from 'react';
import './styles.css';
import Button from '../Button';

interface Props {
    openModal: () => void;
}

const Header: React.FC<Props> = ({ openModal }) => (
  <div>
    <Button label="Create note" onPress={openModal} />
    <Button label="History" onPress={() => {}} />
  </div>
);

export default Header;
