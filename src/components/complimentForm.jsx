import React, { useEffect, useState } from 'react';
import Checked from '../images/checked-sheet.svg';
import Lamp from '../images/lamp.svg';
import Glass from '../images/looking-glass.svg';
import Smile from '../images/smile-face.svg';
import Knife from '../images/swiss-knife.svg';
import ComplimentButton from './complimentButton';

export default () => {
  const [selected, setSelected] = useState(null);
  const [margin, setMargin] = useState((window.innerWidth - 288) / 2);
  const updateMargin = () => {
    setMargin((window.innerWidth - 288) / 2);
  };

  const handleOnClick = (e) => {
    const selectedDataName = e.currentTarget.getAttribute('data-name');
    return selectedDataName === selected ? setSelected(null) : setSelected(selectedDataName);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMargin);
    return () => window.removeEventListener('resize', updateMargin);
  });

  useEffect(() => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container-compliment-title h-margin-top-60">
        <p className="font-worksans-semi text-compliment">Envie um elogio</p>
      </div>
      <div className="container-compliment-form-buttons__scroll">
        <div className="container-compliment-form-buttons" style={window.innerWidth < 500 ? { marginLeft: `${margin}px`, paddingRight: `${margin}px` } : null}>
          <ComplimentButton callback={handleOnClick} selected={selected} source={Lamp} name="lamp" text="Estimula a criatividade" />
          <ComplimentButton callback={handleOnClick} selected={selected} source={Glass} name="glass" text="Estimula a curiosidade" />
          <ComplimentButton callback={handleOnClick} selected={selected} source={Knife} name="knife" text="Se adapta à necessidade" />
          <ComplimentButton callback={handleOnClick} selected={selected} source={Checked} name="check" text="Ótima didática" />
          <ComplimentButton callback={handleOnClick} selected={selected} source={Smile} name="smile" text="Gente boasíssima" />
        </div>
      </div>
      <div className="container-compliment-title">
        <p className="font-worksans-semi text-textarea">Deixe um recado</p>
      </div>
      <div className="container-message">
        <textarea placeholder="Faça elogios, agradecimentos e sugestões. Os tutores adoram!" className="textarea font-worksans-regular" />
      </div>
    </React.Fragment>
  );
};
