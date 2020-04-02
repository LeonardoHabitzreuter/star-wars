import styled from 'styled-components'
import { colors } from '/styles/theme'

export const StyledWrapper = styled.div`
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
