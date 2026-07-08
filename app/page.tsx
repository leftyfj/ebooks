'use client';
import '@/styles/globals.scss';
import '@/styles/top.scss';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
export default function Home() {
    const [user, setUser] = useState<User | null>(null);
     useEffect(() => {
         const checkUser = async () => {
             const {
                 data: { user }
             } = await supabase.auth.getUser();

             console.log(user);
             setUser(user);
         };

         checkUser();
     }, []);

     const handleLogout = async () => {
         await supabase.auth.signOut();
         setUser(null);
     };
    return (
        <>
            <Header user={user} onLogout={handleLogout} />
            <main className="main">
                <Hero user={user} />
                <Features />
            </main>
            <Footer />
        </>
    );
}
