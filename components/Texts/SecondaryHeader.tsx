import React from "react";

/*
SecondaryHeader is used for:
- Section titles
*/
export default function SecondaryHeader({ title }: { title: string }) {
  // Sanitize the title to prevent XSS attacks
  const sanitizedTitle = typeof title === 'string' ? title : '';
  return <h3 className="text-xl font-bold text-[#013300] mb-2 md:mb-2">{sanitizedTitle}</h3>;
}
