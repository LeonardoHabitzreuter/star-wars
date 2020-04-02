import React from 'react'
import CloseIcon from './CloseIcon'
import { ToastContainer } from 'react-toastify'
import { StyledWrapper } from './styles'

const Toaster = () => (
  <StyledWrapper>
    <ToastContainer
      draggable
      newestOnTop
      hideProgressBar
      pauseOnVisibilityChange
      position='top-right'
      closeButton={<CloseIcon />}
    />
  </StyledWrapper>
)

export default Toaster
