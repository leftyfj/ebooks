"use client";

import { supabase } from "@/lib/supabase";
import '../styles/GoogleLoginButton.scss';

export const GoogleLoginButton = ({ bgcolor }) => {
     const handleLogin = async () => {
         await supabase.auth.signInWithOAuth({
             provider: 'google'
         });
     };
 return (
     <button className={`google-login-button ${bgcolor}`} onClick={handleLogin}>Googleでログイン</button>
 );
}
