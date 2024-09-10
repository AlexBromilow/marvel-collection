import React, { useContext } from 'react';
import './button.css';
import { AuthContext, AuthContextType } from '../Context/AuthContext';
import ApiHelper from '../helpers/ApiHelper';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  const apiHelper = new ApiHelper();
  const auth = useContext(AuthContext) as AuthContextType;

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      onClick={async () => console.log((await apiHelper.GetComicByIsbn('978-1-302-91493-6', auth.timeStamp, auth.hash)).results[0].stories.items)}
    >
      {label}
    </button>
  );
};
