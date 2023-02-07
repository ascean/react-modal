import React from 'react'

const wrapperStyles = {
    width: '50%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
}

const modalStyles = {
    maxWidth: '500px',
    border: '1px solid #ddd',
    backgroundColor: '#eee',
    margin: '0 auto',
    zIndex: 1,
    position: 'relative',
    padding: '50px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontSize:'0.9rem'
}

const closeBtnContainerStyles = {
    display:'flex',
}
const closeBtnStyles = {
    width: '150px',
    margin: '0 auto',
    background: '#5C6E08',
    color: 'white',
    border: '1px solid #5C6E08',
    borderRadius: '5px',
    height: '40px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    textAlign:'center'
}

const Modal = ({ children, show, onClickCloseBtn }) => {

    return (
        <>
            {show && (
                <div style={wrapperStyles}>
                    <div style={modalStyles}>
                        {children}
                        <div style={closeBtnContainerStyles}>
                            <button onClick={onClickCloseBtn} style={closeBtnStyles}>
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal