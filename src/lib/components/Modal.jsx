import React, { useEffect } from 'react'

const wrapperStyles = {
    zIndex: 999,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left:0,
    width: '100%',
    margin: '0 auto',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
}

const modalStyles = {
    maxWidth: '500px',
    border: '1px solid #ddd',
    backgroundColor: '#eee',
    margin: '0 auto',
    zIndex: 1,
    position: 'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    padding: '50px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontSize:'0.8rem',
    boxShadow: '5px 15px 33px 14px rgba(120, 120, 120, 0.089)'
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
const xCloseBtnStyles = {
    position:'absolute',
    top:10,
    right:10,
    fontSize:'16px',
    fontWeight:'bold',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    textTransform: 'uppercase',
}

const Modal = ({ children, show, onClickCloseBtn, bEscapeClose=true, bClicWrapperClose=true, xButton= false, backgroundStyles={}, buttonStyles={} }) => {
    const wrapper = document.getElementById("wrapper")
    
    const closeOnEscape = (e) => {
        if (!bEscapeClose) return
        if ((e.charcode || e.keyCode) === 27) {
            document.body.removeEventListener("keydown", closeOnEscape);
            onClickCloseBtn(e);
        }
    };
    
    const closeOnWrapper = () => {
        if (!bClicWrapperClose) return
        wrapper.removeEventListener("click", closeOnWrapper)
        onClickCloseBtn();
    }
    
    useEffect(() => {
        if (bEscapeClose) document.body.addEventListener("keydown", closeOnEscape);
        if (bClicWrapperClose) {
            if (wrapper) wrapper.addEventListener("click", closeOnWrapper)
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <>
            {show && (
                <div id="wrapper" style={wrapperStyles}>
                    <div style={{...modalStyles, ...backgroundStyles}}>
                        {xButton ? 
                            <button onClick={onClickCloseBtn} style={xCloseBtnStyles}>X</button>
                        :""
                        }
                        {children}
                        <div style={closeBtnContainerStyles}>
                            <button onClick={onClickCloseBtn} style={{...closeBtnStyles, ...buttonStyles}}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal