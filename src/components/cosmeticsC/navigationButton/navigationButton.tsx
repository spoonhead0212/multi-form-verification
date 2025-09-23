import Link from 'next/link';

interface buttonShape {
    text: string;
    onClick?: () => void;
    className?: string;
    href: string
}

import React from 'react'

const NavigationButton: React.FC<buttonShape> = ({
    text,
    className,
    href
}) => {
  return (
    <Link
    className={className}
    href={href}
    >
        {text}
    </Link>
  )
}

export default NavigationButton
