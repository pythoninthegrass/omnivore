/* eslint-disable functional/no-class */
/* eslint-disable functional/no-this-expression */
import { IconProps } from './IconProps'

import React from 'react'

export class GridViewIcon extends React.Component<IconProps> {
  render() {
    const size = (this.props.size || 26).toString()
    const color = (this.props.color || '#2A2A2A').toString()

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M4.1665 5.20768C4.1665 4.93142 4.27625 4.66646 4.4716 4.47111C4.66695 4.27576 4.9319 4.16602 5.20817 4.16602H9.37484C9.6511 4.16602 9.91606 4.27576 10.1114 4.47111C10.3068 4.66646 10.4165 4.93142 10.4165 5.20768V9.37435C10.4165 9.65062 10.3068 9.91557 10.1114 10.1109C9.91606 10.3063 9.6511 10.416 9.37484 10.416H5.20817C4.9319 10.416 4.66695 10.3063 4.4716 10.1109C4.27625 9.91557 4.1665 9.65062 4.1665 9.37435V5.20768Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5835 5.20768C14.5835 4.93142 14.6932 4.66646 14.8886 4.47111C15.0839 4.27576 15.3489 4.16602 15.6252 4.16602H19.7918C20.0681 4.16602 20.333 4.27576 20.5284 4.47111C20.7237 4.66646 20.8335 4.93142 20.8335 5.20768V9.37435C20.8335 9.65062 20.7237 9.91557 20.5284 10.1109C20.333 10.3063 20.0681 10.416 19.7918 10.416H15.6252C15.3489 10.416 15.0839 10.3063 14.8886 10.1109C14.6932 9.91557 14.5835 9.65062 14.5835 9.37435V5.20768Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.1665 15.6257C4.1665 15.3494 4.27625 15.0844 4.4716 14.8891C4.66695 14.6937 4.9319 14.584 5.20817 14.584H9.37484C9.6511 14.584 9.91606 14.6937 10.1114 14.8891C10.3068 15.0844 10.4165 15.3494 10.4165 15.6257V19.7923C10.4165 20.0686 10.3068 20.3335 10.1114 20.5289C9.91606 20.7242 9.6511 20.834 9.37484 20.834H5.20817C4.9319 20.834 4.66695 20.7242 4.4716 20.5289C4.27625 20.3335 4.1665 20.0686 4.1665 19.7923V15.6257Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5835 15.6257C14.5835 15.3494 14.6932 15.0844 14.8886 14.8891C15.0839 14.6937 15.3489 14.584 15.6252 14.584H19.7918C20.0681 14.584 20.333 14.6937 20.5284 14.8891C20.7237 15.0844 20.8335 15.3494 20.8335 15.6257V19.7923C20.8335 20.0686 20.7237 20.3335 20.5284 20.5289C20.333 20.7242 20.0681 20.834 19.7918 20.834H15.6252C15.3489 20.834 15.0839 20.7242 14.8886 20.5289C14.6932 20.3335 14.5835 20.0686 14.5835 19.7923V15.6257Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    )
  }
}
