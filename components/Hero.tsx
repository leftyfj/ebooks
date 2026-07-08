import '@/styles/globals.scss';
import '@/styles/top.scss';
import Image from 'next/image';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
import type { User } from '@supabase/supabase-js';
import '../styles/Hero.scss';
type HeroProps = {
 user:User | null
}
export const Hero = ({user}:HeroProps) => {
    return (
        <>
            <div className="hero">
                <div className="hero__inner">
                    <h1 className="hero__title">
                        あなたの電子書籍を一元管理<span>eBooks</span>
                    </h1>
                    <p className="hero__message">
                        Kindle・楽天Kobo・BOOK☆WALKER・hontoなど
                        <br />
                        複数サービスの電子書籍をまとめて管理できます。
                    </p>
                    <div className="hero__login-button-area">
                        {!user && <GoogleLoginButton bgcolor="black" />}
                    </div>
                </div>
                <Image
                    className="hero__image"
                    src="/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                    priority
                />
            </div>
        </>
    );
};
