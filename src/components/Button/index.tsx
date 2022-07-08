import React, { CSSProperties } from 'react';
import './styles.css';

interface Props {
    label: string;
    onPress?: () => void;
    styles?: CSSProperties;
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({
  label, onPress, styles, type,
}) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className="atuin-btn" onClick={onPress} style={styles}>
    {label}
  </button>
);

export default Button;
