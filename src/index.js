import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const cssVarNames = new Map([
  ['activeColor', '--i-material-color-active'],
  ['hoverColor', '--i-material-color-hover'],
  ['mainColor', '--i-material-color-main'],
]);

class InputMaterial extends React.PureComponent {
  constructor(props) {
    super(props);
    this.refFieldset = React.createRef();
  }

  componentDidMount() {
    const {activeColor, hoverColor, mainColor} = this.props;

    if (!!activeColor || !!hoverColor || !!mainColor) {
      this.changeCssVariables();
    }
  }

  componentDidUpdate(prevProps) {
    this.changeCssVariables(prevProps);
  }

  setCssVariable = (key, value) => {
    this.refFieldset.current.style.setProperty(key, value);
  };

  changeCssVariables = (prevProps = {}) => {
    Object.entries(this.props)
      .forEach(([key, value]) => {
        const cssVarKey = cssVarNames.get(key);

        if (value !== prevProps[key] && cssVarKey) {
          this.setCssVariable(cssVarKey, value)
        }
      });
  };

  render() {
    const {
      activeColor,
      hoverColor,
      mainColor,
      containerClassName = '',
      containerStyle,
      inputStyle,
      underLineStyle,
      labelStyle,
      label = '',
      ...rest
    } = this.props;

    return (
      <fieldset className={`i-material ${containerClassName}`} style={containerStyle} ref={this.refFieldset}>
        <input className='i-material__input' style={inputStyle} {...rest}/>
        <hr className='i-material__hr' style={underLineStyle}/>
        <label className='i-material__label' style={labelStyle}>{label}</label>
      </fieldset>
    )
  }
}

export default InputMaterial;

InputMaterial.propTypes = {
  activeColor: PropTypes.string,
  hoverColor: PropTypes.string,
  mainColor: PropTypes.string,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  underLineStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
