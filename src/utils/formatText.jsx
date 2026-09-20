import React from 'react';

/**
 * Safely converts newline characters into <br /> tags without using dangerouslySetInnerHTML.
 */
export const formatNewlines = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
  return lines.map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      {idx !== lines.length - 1 && <br />}
    </React.Fragment>
  ));
};
