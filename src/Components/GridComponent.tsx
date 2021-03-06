import React from 'react';
import { useSelector } from 'react-redux';
import book from '../images/book.svg';
import talk from '../images/talk2.png';
import write from '../images/write.svg';
import { RootState } from '../store';
import { BoxType, MomentType } from '../types/BoxType';
import BoxComponent from './BoxComponent';
import BoxTime from './BoxTime';

type currentSelect = {
  active: boolean;
  timeChange: boolean
  moment: MomentType;
};

export default function GridComponent() {
  const grid:BoxType[] = [
    ['lectura', book],
    ['escritura', write],
    ['compartir', talk],
  ];
  // const [timeChange, setTimeChange] = React.useState(false);
  const { timeChange } = useSelector((state:RootState) => state.current as currentSelect);
  function renderBoxes() {
    return grid.map(([text, image]) => <BoxComponent text={text} image={image} key={text} />);
  }

  function renderTime() {
    return grid.map(([text, image]) => <BoxTime text={text} image={image} key={text} />);
  }
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12">
        <div className="grid grid-cols-3 gap-4 ">
          { timeChange ? renderTime() : renderBoxes() }
        </div>
      </div>
    </div>
  );
}
