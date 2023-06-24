'use client'

import * as React from 'react';
import { styled, Box } from '@mui/system';
import Slider, { sliderClasses } from '@mui/base/Slider';



const marks = [
  {
    value: 100,
    label: '100$',
  },
  {
    value: 10000,
    label: '10000$',
  }
]
export default function RangeSlider({setValue, value}) {
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(()=>{
    document?.getElementsByClassName('MuiSlider-markLabel')[0]?.classList.add("move")
  },[])

  return (
    <Box sx={{ width: 300 }}>
      <StyledSlider
        defaultValue={[500, 5000]}
        getAriaLabel={() => 'Temperature range'}
        getAriaValueText={valuetext}
        min={100}
        max={10000}
        marks={marks}
      />
    </Box>
  );
}

function valuetext(value) {
  return `${value}$`;
}

const StyledSlider = styled(Slider)(
  () => `
  color: 'blue';
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  &.${sliderClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: 'darkslategray';
    opacity: 0.5;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 6px;
    border-radius: 10px;
    background-color: #F1F1F1;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 6px;
    border-radius: 10px;
    background-color: #006845;
  }

  & .${sliderClasses.thumb} {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -8px;
    margin-top: -7px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 3px solid white;
    background-color: #006845;

    :hover,
    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem rgba(0, 0,0,0.3);
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 0.25rem rgba(0, 104, 69,0.5);
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: transparent;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: #fff;
  }
  
  & .${sliderClasses.markLabel} {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    position: absolute;
    top: 24px;
    transform: translateX(-100%);
    margin-top: 8px;
    color: #000000;
    opacity: 0.5;
  }
`,
);