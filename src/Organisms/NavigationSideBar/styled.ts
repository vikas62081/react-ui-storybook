import styled from 'styled-components';
import { COLORS } from '../../colors';
export const LightStyledTheme = styled.div`
  .selected {
    background: ${COLORS.MINT[200]};
    border-radius: 4px;
    &:hover{
      background: ${COLORS.MINT[300]};
      
    },
  }
  .not-selected {
    color: ${COLORS.SLATE[100]};
    border-radius: 4px;
    &:hover {
      background: ${COLORS.SLATE[100]};
      color: ${COLORS.FIREFLY[500]};
    },
  }
`;

export const DarkStyledTheme = styled.div`
    .MuiDrawer-paper {
        background: ${COLORS.FIREFLY[500]};
    }
  .selected {
    background: ${COLORS.MINT[300]};
    border-radius: 4px;
    &:hover{
      background: ${COLORS.MINT[200]};
      
    },
  }
  .not-selected {
    border-radius: 4px;
    svg,p{
        color: ${COLORS.WHITE} !important;
    }
    &:hover {
      background: ${COLORS.SLATE[100]};
      svg,p{
        color: ${COLORS.FIREFLY[500]} !important;
      }
    },
  }
`;
