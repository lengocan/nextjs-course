"use client";

import Logo from '@/app/components/Header/Logo'
import Menu from '@/app/components/Header/Menu'
export default function Header() {
    return <header>
        <Logo/>
        <div>Header Item</div>
        <Menu/>
    </header>
}