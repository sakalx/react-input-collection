#  React Input UI Collection
 ____________________________________________________
[DEMO](https://sakalx.github.io/react-input-collection/)
Note: **React version 16.8.0**
____________________________________________________
Inspiration  from [codrops](https://tympanus.net/codrops/2015/03/18/inspiration-text-input-effects-2/)
>Form inputs offer a great opportunity to add some subtle and interesting effects to a web page. They are elements that your user will interact with at some point and making them fun to use can enhance the experience. We are used to the default form resembling its paper counterpart but in the digital world we can be more creative

###  List of components :
 1. InputAkira
 1. InputIchiro
 1. InputJiro
 1. InputKuro
 1. InputMadoka
 1. InputMaterial
 1. InputMinoru
 1. InputNao
 1. InputSoda
 1. InputYoko

####  Example
 ```javascript
  import React, {useState} from 'react';
  import InputAkira from 'react-input-ui/collection/akira';
  
  function App() {
    const [value, setValue] = useState('');

    return (
      <InputAkira
        label={'Akira UI'}
        placeholder='type...'
        onChanhe={setValue}
        value={value}
      />
    )
  }
  ```
  
####  Example with custom style
   ```javascript
    import React, {useState} from 'react';
    import InputAkira from 'react-input-ui/collection/akira';
    
    function App() {
      const [value, setValue] = useState('');
    
      return (
        <InputAkira
          label={'Akira UI'}
          placeholder='type...'
          onChanhe={setValue}
          value={value}
          style={{margin: '25px'}}
          className={'custom-class'}
        />
      )
    }
   ```
   
####  Example for validation field
  > If field **not valid** set property **error** to `true`
  
  > If field **valid** set property **error** to `false`
  
  > If don't need validation set property **error** to `null`
   ```javascript
    import React, {useState} from 'react';
    import InputAkira from 'react-input-ui/collection/akira';
    
    function App() {
      const [value, setValue] = useState('');
      const [error, setError] = useState(null);
     
      const handleChange = e => {
        setValue(e.target.value);
      };
  
      const handleFocus = () => {
        setError(null);
      };
  
      const handleSubmit = () => {
        setError(!!value.length > 2);
      }
      
      return (
        <div>
          <InputAkira
            label={'Akira UI'}
            placeholder='type...'
            onChange={handleChange}
            onFocus={handleFocus}
            value={value}
            error={error}
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      )
    }
   ```
 
####  Example for customizing theme
   > Theme has 4 property:
   
   | Theme property: |
   | --- |
   | activeTextColor |
   | focusColor |
   | hoverColor |
   | mainColor |
   
   To change them use `theme` method
   
   ```javascript
    import React, {useState} from 'react';
    import InputAkira, {theme} from 'react-input-ui/collection/akira';

    function App() {
      const [value, setValue] = useState('');
     
      const handleSetTheme = () => {
        theme({
          activeTextColor: '#101010',
          focusColor: '#2196f3',
          hoverColor: '#252525',
          mainColor: '#727272',
        })
      };
      
      return (
        <div>
          <InputAkira
            label={'Akira UI'}
            placeholder='type...'
            onChanhe={setValue}
            value={value}
          />
        <button onClick={handleSetTheme}>CHANGE THEME</button>
        </div>
      )
    }
   ```