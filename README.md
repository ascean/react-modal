# Simple Modal npm package

You can find this npm package by clicking on : https://www.npmjs.com/package/asean-react-modal

## Requirements

- Node.js v16.14.2 or latest version.
- react v18.2.0
- react-dom v18.2.0

## Installation

In your project, run this command :

`npm install asean-react-modal`

## Usage

import the component and useState  in your code :

```
import {useState} from 'react'
import {Modal} from 'asean-react-modal'
```

In your component, you have to create a new state and use the modal component width props you need : 

```
//state for the modal 
const [showModal, setShowModal] = useState(false)
```

```
//function to hide modal on click on close button
const hideModal = () => showModal && setShowModal(false)
```

```
//called in the compoment
    <Modal show={showModal} onClickCloseBtn={hideModal}>
		<h1>Your modal text here</h1>
    </Modal>
```

```
//Change the modal state where you want it to be displayed
setShowModal(true)
```

## Used Technologies / Dependencies

- React :
  - react
  - react-dom
- Babel 7 : @babel/core, @babel/cli, @babel/preset-env, @babel/polyfill