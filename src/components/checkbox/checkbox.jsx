import * as React from 'react';
import './checkbox.scss';
import { expUserLevel } from "../../utils/index";

export const Checkbox = ({
  onClick, checked, onDelete, label, onKeyUp, userExp
}) => (
  <div className="checkbox">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      {userExp === expUserLevel.expert || userExp === expUserLevel.intermediate ? <input tabIndex="-1" type="checkbox" checked={checked} onChange={onClick} /> : null}
      <span className={checked ? 'checkbox-checked' : ''}>{label}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
);
