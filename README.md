# Simple Modal npm package

Accessible modal dialog component for ReactJS

You can find this npm package by clicking on : https://www.npmjs.com/package/asean-react-modal

## Requirements

- Node.js v16.14.2 or latest version.
- react v18.2.0
- react-dom v18.2.0

## Installation

In your project, run this command :
```
$ npm install asean-react-modal
or
$ yarn add asean-react-modal
```

## Usage

### Import modal component and useState in your code :

```
import {useState} from 'react'
import {Modal} from 'asean-react-modal'
```

### In your component, you have to create some elements : 

#### State for the modal 
```
const [showModal, setShowModal] = useState(false)
```

#### Function to hide modal by clicking on modal close button
```
const hideModal = () => showModal && setShowModal(false)
```

#### Call Modal compoment
```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal}
>
    <h1>Your modal text here</h1>
</Modal>
```

#### Change modal state where you want it to be displayed
```
setShowModal(true)
```
## Options
### Content to display (string)
```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal}
>
  <h1>Your content here</h1>
</Modal>
```
### Close modal by pressing "ESC" (default value : true)
```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal} 
  bEscapeClose=true
>
  <h1>Your content here</h1>
</Modal>
```

### Close modal by clicking the overlay (default value : true)
```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal} 
  bClicWrapperClose=true
>
  <h1>Your content here</h1>
</Modal>
```

### Show a (X) icon/link on the top-right corner (default value:  false)
```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal} 
  xButton=true
>
  <h1>Your content here</h1>
</Modal>
```

### Change background styles :
- define new background styles
```
const bgStyles = {background: 'white'}
```
- add style in modal props

```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal} 
  backgroundStyles = {bgStyles}
>
  <h1>Your content here</h1>
</Modal>
```

### Change button styles
- define new button styles
```
const btnStyles = {background:'black', color:'white', borderColor:'yellow'}
```
- add style in modal props

```
<Modal 
  show={showModal} 
  onClickCloseBtn={hideModal} 
  backgroundStyles = {bgStyles}
>
  <h1>Your content here</h1>
</Modal>
```

## Used Technologies / Dependencies

- React :
  - react
  - react-dom
- Babel 7 : @babel/core, @babel/cli, @babel/preset-env, @babel/polyfill