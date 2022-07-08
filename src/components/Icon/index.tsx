import React, { useEffect } from 'react';
import { isNumber } from 'lodash';
import { useSpring, animated } from 'react-spring';
import { Note } from '../../interface';
import Nail from '../Nail';
import './styles.css';

interface Props {
    x?: number;
    y?: number;
    note?: Note;
    onDelete: (id: string) => void;
    onEdit?: (id?: string) => void;
}

const Icon: React.FC<Props> = ({
  x,
  y,
  note,
  onDelete,
  onEdit,
}) => {
  const [style, api] = useSpring({
    x: 0, y: 0, rotate: 0, config: { duration: 500 },
  }, [note?.deletePending]);

  const [textStyle, textApi] = useSpring({
    opacity: 1, config: { duration: 200 },
  }, [note?.deletePending]);

  useEffect(() => {
    if (note?.deletePending) {
      textApi.start({ opacity: 0 });
      api.start({ x: -200, y, rotate: 60 });
    }
  }, [note?.deletePending]);

  const styles = isNumber(x) && isNumber(y) ? { transform: `translate(${x}px ,${y}px)` } : {};
  return (
    <div
      style={{
        position: 'absolute', ...styles,
      }}
      // onClick={onEdit ? () => onEdit(note?.id) : () => {}}
    >
      <svg width="220" height="270" viewBox="0 0 472 485" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.path
          style={style}
          d="M470.5 392C450.1 385.2 422 304.167 410.5 264.5L427 354.5L361.5 388.5C349.5 397.3 294.833 417.833 269 427L118 475.5C124 477.5 256.167 453.333 321.5 441C368.7 434.6 440.5 405.667 470.5 392Z"
          fill="#97946b"
        />
        <animated.path
          style={style}
          d="M417 297.5L371.5 59L1.5 112L64.5 483.5C82.9 491.1 223.833 443.333 292 418.5C311.2 415.3 390 374.167 427 354L417 297.5Z"
          fill="#fffb9c"
        />
        <animated.path
          style={style}
          d="M403.5 326C409.9 328.8 421.833 346.167 427 354.5L406.5 365C381.167 377.833 328.7 404.3 321.5 407.5C314.3 410.7 299.167 415.833 292.5 418L334.5 392.5C350.5 384.5 365 371 376 363C384.8 356.6 398 335.667 403.5 326Z"
          fill="#f7d352"
        />
        <Nail onDelete={onDelete} note={note} loading={note?.pinned} />
      </svg>
      <animated.div
        style={textStyle}
        className="note_textWrapper"
      >
        {note?.type === 'orderedList' && (
          <ol style={{ paddingLeft: 10, fontSize: 20 }}>
            {note.text.map(({ text }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li style={{ fontFamily: 'RalewayRegular', fontSize: note?.text.length > 4 ? 15 : 19 }} key={index}>{text}</li>
            ))}
          </ol>
        )}
        {note?.type === 'unorderedList' && (
          <ul style={{ paddingLeft: 10, fontSize: 20 }}>
            {note.text.map(({ text }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li style={{ fontFamily: 'RalewayRegular', fontSize: note?.text.length > 4 ? 15 : 19 }} key={index}>{text}</li>
            ))}
          </ul>
        )}
        {note?.type === 'textarea' && (
          <>
            {note.text.map(({ text }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div
                style={{
                  fontFamily: 'RalewayRegular', fontSize: 20,
                }}
                key={index}
              >
                {text}
              </div>
            ))}
          </>
        )}
      </animated.div>
    </div>
  );
};

export default Icon;
