import React from 'react';

export interface ButtonProps {
  text: string;
  ghost?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
}
