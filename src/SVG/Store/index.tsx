import Button from '@mui/material/Button';
import { devices } from '../../Theme';
import './Store.styles.css';

export const ButtonSX = {
  width: '60px',
  height: '60px',
  'border-radius': '0',
  'border-bottom': '3px solid #231f20',
  transition: 'all 0.3s ease-in-out',

  '&:hover, &:focus': {
    'border-bottom': '3px solid #1787ff',
  },

  [`@media ${devices.netbook}`]: {
    display: 'none',
  },
};

export const Store = () => {
  return (
    <Button variant="text" sx={ButtonSX}>
      <svg
        className="store"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
      >
        <path d="M42 22.05V39q0 1.2-.9 2.1-.9.9-2.1.9H8.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V22.05q-1.4-1.2-1.85-2.95-.45-1.75.1-3.5l2.15-6.75q.4-1.35 1.4-2.1 1-.75 2.3-.75H37.7q1.4 0 2.45.775 1.05.775 1.45 2.075l2.2 6.75q.55 1.75.075 3.5Q43.4 20.85 42 22.05ZM28.5 20.5q1.45 0 2.45-.95 1-.95.8-2.3L30.5 9h-5v8.25q0 1.3.85 2.275.85.975 2.15.975Zm-9.35 0q1.4 0 2.375-.95.975-.95.975-2.3V9h-5l-1.25 8.25q-.2 1.3.7 2.275.9.975 2.2.975Zm-9.1 0q1.2 0 2.075-.825.875-.825 1.025-2.025L14.45 9h-5l-2.3 7.3q-.5 1.55.4 2.875t2.5 1.325Zm27.85 0q1.6 0 2.525-1.3.925-1.3.425-2.9L38.55 9h-5l1.3 8.65q.15 1.2 1.025 2.025.875.825 2.025.825ZM8.95 39H39V23.45q.05.05-.325.05H37.9q-1.25 0-2.375-.525T33.3 21.35q-.8 1-2 1.575t-2.65.575q-1.5 0-2.575-.425Q25 22.65 24 21.65q-.75.9-1.9 1.375t-2.6.475q-1.55 0-2.75-.55t-2.05-1.6q-1.2 1.05-2.35 1.6-1.15.55-2.3.55h-.675q-.325 0-.425-.05V39ZM39 39H8.95 39Z" />
      </svg>
    </Button>
  );
};
