import React from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { colors } from '/styles/theme'
import CloseIcon from './CloseIcon'

const StyledWrapper = styled.div`
  .Toastify__toast-container {
  }

  .Toastify__toast {
    border-radius: 4px;
    padding: 0;
    padding: 24px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 18px;
  }

  .Toastify__toast--error {
    background: ${colors.danger};
  }

  .Toastify__toast--success {
    background: #69c724;
  }

  .Toastify__toast--warning {
    background: yellow;
  }
`

const Toastr = () => (
  <StyledWrapper>
    <ToastContainer
      position='top-right'
      draggable
      pauseOnVisibilityChange
      newestOnTop
      hideProgressBar={true}
      closeButton={<CloseIcon />}
    />
  </StyledWrapper>
)

export default Toastr
