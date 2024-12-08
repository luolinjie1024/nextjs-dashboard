// 'use client'; 指令告诉 Next.js 忽略 MyComponent 组件中的代码，直到它在客户端重新渲染。
// useClient 函数是一个钩子（hook），它返回一个表示当前是否在客户端执行的布尔值。
'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
            )}

          >
            {/*基础语法：
clsx(arg1, arg2, ..., argN) 可以接受任意数量的参数，这些参数可以是字符串、对象或数组。字符串参数会被直接添加到最终的类名字符串中。对象参数会被遍历，只有当对象的属性值为 true 时，相应的属性名才会被添加到类名字符串中。数组参数中的每个元素都会被添加到类名字符串中。

静态类名：

'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3' 这部分是一系列静态的类名，它们会被直接添加到元素的 className 属性中。这些类名通常用于设置样式和响应式设计。
条件类名对象：

{ 'bg-sky-100 text-blue-600': pathname === link.href } 这是一个对象，其键是类名字符串，值是一个布尔表达式。如果布尔表达式的值为 true，则对应的类名字符串会被添加到最终的类名字符串中。在这个例子中，如果当前路由的路径（pathname）与链接的 href 属性相匹配，那么 'bg-sky-100 text-blue-600' 这两个类名会被添加。
响应式设计：

类名中的 md: 前缀表示这些样式是为中等屏幕尺寸（通常是768px及以上）及以上的设备设计的。这是使用 Tailwind CSS 的响应式设计功能，根据屏幕尺寸应用不同的样式。
伪类：

hover: 前缀用于定义鼠标悬停时的样式。在这个例子中，当鼠标悬停在元素上时，背景颜色会变为 'bg-sky-100'（浅蓝色），文本颜色会变为 'text-blue-600'（深蓝色）。
自定义属性值：

类似于 h-[48px] 的写法是 Tailwind CSS 的一种特性，允许你使用自定义的值来设置样式属性。这里 h-[48px] 表示高度设置为 48px。*/}
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
