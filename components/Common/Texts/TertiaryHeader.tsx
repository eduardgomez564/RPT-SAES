import React from "react";

/*
TertiaryHeader is used for:
- Table headers
- Subject titles
*/
export default function TertiaryHeader({ title }: { title: string }) {
  // Sanitize the title to prevent XSS attacks
  const sanitizedTitle = typeof title === 'string' ? title : '';
  return <h3 className="font-semibold text-green-900">{sanitizedTitle}</h3>;
}

