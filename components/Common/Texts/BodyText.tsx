import React from "react";

/*
BodyText is used for:
- Body text
- Table content
*/
export default function BodyText({ title }: { title: string }) {
  // Sanitize the title to prevent XSS attacks
  const sanitizedTitle = typeof title === 'string' ? title : '';
  return <h3 className="text-md text-black">{sanitizedTitle}</h3>;
}

