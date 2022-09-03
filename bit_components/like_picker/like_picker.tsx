import React from "react";
import { useState, useEffect, useRef } from "react";
import { LikePickerStar } from "./LikePickerStar";

interface numericMap {
  [key: number]: string;
}

export type LikePickerProps = {
  max: number;
  value?: number;
  onChange?: (value: number) => void;
  starStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  valueDescription?: numericMap;
  color?: string;
  activeColor?: string;
};

export const LikePicker = ({
  max,
  value = 0,
  onChange,
  starStyle,
  descriptionStyle,
  style,
  valueDescription,
  color,
  activeColor,
}: LikePickerProps) => {
  const [state, setState] = useState({ selecting: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOverHandler = (evt: Event) => {
      setState((oldState) => ({ ...oldState, selecting: 0 }));
    };
    if (ref && ref.current)
      ref.current.addEventListener("mouseout", onOverHandler);
  }, [ref]);

  function handleHover(id: number): void {
    setState((oldState) => ({ ...oldState, selecting: id }));
  }
  function handleClick(id: number): void {
    if (onChange) onChange(id);
  }

  return (
    <div className="like-picker" style={{ ...style }}>
      <div ref={ref}>
        {[...Array(max)].map((_, index) => {
          return (
            <LikePickerStar
              key={index}
              id={index + 1}
              selected={value > index}
              selecting={state.selecting > index}
              onHover={handleHover}
              onClick={handleClick}
              style={starStyle}
              color={color}
              activeColor={activeColor}
            />
          );
        })}
      </div>
      {valueDescription && Object.keys(valueDescription).length > 0 && (
        <div
          className="like-picker-description"
          style={{ ...descriptionStyle }}
        >
          {valueDescription?.[value]}
        </div>
      )}
    </div>
  );
};

export default LikePicker;
