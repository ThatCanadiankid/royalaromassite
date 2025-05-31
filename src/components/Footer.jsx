import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm text-center py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} Royal Aromas. All rights reserved.</p>
    </footer>
  );
}
