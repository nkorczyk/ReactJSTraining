// @flow
import React from 'react';

type Props = {
  message: string,
}

const ErrorMessage = ({ message }: Props) => (
  <div className="not-found">
    <h3 className="not-found-message">{message}</h3>
  </div>
);

export default ErrorMessage;
