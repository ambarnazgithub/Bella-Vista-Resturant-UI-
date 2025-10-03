'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Calendar, Menu, Package, MessageSquare } from 'lucide-react'
 
export function Links() {
  const pathname = usePathname()
 
  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/reservation', label: 'Reservation', icon: Calendar },
    { href: '/menu', label: 'Digital Menu', icon: Menu },
    { href: '/tracking', label: 'Order Tracking', icon: Package },
    { href: '/feedback', label: 'Feedback', icon: MessageSquare },
  ]
 
  return (
    <nav className='bg-[#334f3b] text-white w-full'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex justify-items-start  items-center px-3 py-3 w-full'>
        <div className='flex gap-4'>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isActive 
                    ? 'bg-green-500 text-white' 
                    : 'hover:bg-green-600 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span className='text-sm font-medium'>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Tablet Navigation */}
      <div className='hidden sm:flex md:hidden flex-col px-4 py-3 gap-1 w-full'>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-green-600 hover:text-white'
              }`}
            >
              <Icon size={20} />
              <span className='text-sm font-medium'>{item.label}</span>
            </Link>
          )
        })}
      </div>

{/* Mobile Navigation */}
<div className='sm:hidden px-4 py-3 w-full bg-[#334f3b]'>
  <div className='flex flex-wrap justify-items-start gap-3 w-full'>
    {navItems.map((item) => {
      const Icon = item.icon
      const isActive = pathname === item.href

      return (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
            isActive
              ? 'bg-green-500 text-white'
              : 'hover:bg-green-600 hover:text-white'
          }`}
        >
          <Icon size={18} />
          <span className='text-sm font-medium'>{item.label}</span>
        </Link>
      )
    })}
  </div>
</div>

    </nav>
  )
}