import React from 'react';
import { isNumber } from 'lodash';
import { Note } from '../interface';
import Nail from './Nail';

interface Props {
    x?: number;
    y?: number;
    note?: Note;
    isSetting: boolean;
}

const Icon: React.FC<Props> = ({
  x, y, note, isSetting,
}) => {
  const styles = isNumber(x) && isNumber(y) ? { transform: `translate(${x}px ,${y}px)` } : {};

  return (
    <div style={{ position: 'absolute', ...styles }}>
      <svg width="220" height="270" viewBox="0 0 472 485" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M470.5 392C450.1 385.2 422 304.167 410.5 264.5L427 354.5L361.5 388.5C349.5 397.3 294.833 417.833 269 427L118 475.5C124 477.5 256.167 453.333 321.5 441C368.7 434.6 440.5 405.667 470.5 392Z" fill="#97946b" />
        <path d="M417 297.5L371.5 59L1.5 112L64.5 483.5C82.9 491.1 223.833 443.333 292 418.5C311.2 415.3 390 374.167 427 354L417 297.5Z" fill="#fffb9c" />
        <path d="M403.5 326C409.9 328.8 421.833 346.167 427 354.5L406.5 365C381.167 377.833 328.7 404.3 321.5 407.5C314.3 410.7 299.167 415.833 292.5 418L334.5 392.5C350.5 384.5 365 371 376 363C384.8 356.6 398 335.667 403.5 326Z" fill="#f7d352" />
        <Nail loading={note?.pinned} />

      </svg>
      <div style={{
        position: 'absolute',
        color: 'black',
        fontSize: '13px',
        width: 150,
        paddingLeft: 25,
        transform: 'rotate(-10deg)',
        bottom: '45%',
      }}
      >
        {note?.text}
      </div>
    </div>
  );
};

export default Icon;
