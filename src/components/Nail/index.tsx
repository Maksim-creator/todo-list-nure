import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Note } from '../../interface';

interface Props {
    loading?: boolean;
    note?: Note;
    onDelete: (id: string) => void;
}

const Nail: React.FC<Props> = ({ loading, note, onDelete }) => {
  const [style, api] = useSpring({
    x: 0, y: -50,
  }, [loading]);

  useEffect(() => {
    if (loading) {
      api.start({ x: 0, y: 10 });
    } else {
      api.start({ x: 0, y: -40 });
    }
  }, [loading]);

  return (
    <>
      <animated.path
        onClick={() => onDelete(note!.id)}
        style={style}
        stroke="#CC0000"
        d="M178 23.654C181.626 26.1769 186.282 27.5 189.5 27.5C192.703 27.5 197.616 25.8472 201.5 23.2109M178 23.654C174.865 21.4729 172.5 18.3949 172.5 14.5C172.5 6.1 183.5 1 189.5 1C195.5 1 207.5 7.3 207.5 14.5C207.5 17.8565 204.892 20.9087 201.5 23.2109M178 23.654V38.5C173.667 41.1667 165 48.6 165 57C165 65.4 181.5 71.5 189.5 71.5C197.5 71.5 214 66.6 214 57C214 47.4 205.667 40.6667 201.5 38.5V23.2109"
        fill="#e4625a"
      />
      <animated.path
        style={style}
        d="M188 92V71.5H191V92C190.833 92.3333 190.3 93 189.5 93C188.7 93 188.167 92.3333 188 92Z"
        fill="#b57221"
      />
    </>
  );
};

export default Nail;
