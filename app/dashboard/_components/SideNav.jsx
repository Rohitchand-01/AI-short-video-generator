'use client';

import {
  CircleUser,
  FileVideo,
  PanelsTopLeft,
  ShieldPlus
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  const pathname = usePathname();

  const MenuOption = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/dashboard',
      icon: PanelsTopLeft
    },
    {
      id: 2,
      name: 'Create New',
      path: '/dashboard/create-new',
      icon: FileVideo
    },
    {
      id: 3,
      name: 'Upgrade',
      path: '/upgrade',
      icon: ShieldPlus
    },
    {
      id: 4,
      name: 'Account',
      path: '/account',
      icon: CircleUser
    }
  ];

  return (
    <div className='shadow-md p-5 rounded-2 w-64 h-screen'>
      <div>
        {MenuOption.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link href={item.path} key={item.id}>
              <div
                className={`flex items-center mb-8 gap-3 p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                  isActive ? 'bg-primary text-white' : 'hover:bg-purple-200'
                }`}
              >
                <item.icon className='w-5 h-5' />
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
