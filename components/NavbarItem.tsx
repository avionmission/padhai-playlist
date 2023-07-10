import React from 'react';

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-black cursor-pointer hover:text-yellow-700 transition">
            {label}
        </div>
    )
}

export default NavbarItem;
 