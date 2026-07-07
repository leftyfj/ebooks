'use client';
import '@/styles/globals.scss';
import '@/styles/top.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { GoogleLoginButton } from '@/components/GoogleLoginButton';
import { LogoutButton } from '@/components/LogoutButton';
// import { Header } from '@/components/Header';
export default function Home() {
    const [user, setUser] = useState(null);
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
        {/* <Header user={user} /> */}
            <header className="header">
                <div className="header__logo ">
                    <AutoStoriesIcon fontSize="large" />
                    <span className="header__logo-main">eBooks</span>
                    <span className="header__logo-sub">Library Manager</span>
                </div>
                {user ? (
                    <div className="header__isLogin">
                        <p className="isLogin">
                            {user.user_metadata.name} さんログイン中
                        </p>
                        <LogoutButton onLogout={handleLogout} />
                    </div>
                ) : (
                    <GoogleLoginButton bgcolor="transparent" />
                )}
            </header>
            <main className="main">
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
                <section className="section service">
                    <div className="section__inner">
                        <h2 className="section__title service__title">
                            このアプリでできること
                        </h2>
                        <div className="service__cards cards">
                            <div className="card">
                                <div className="card__img">
                                    <Image
                                        src="/books.jpg"
                                        alt=""
                                        // width={300}
                                        // height={250}
                                        fill
                                        className="card__image"
                                    />
                                </div>
                                <h3 className="card__title">蔵書管理</h3>
                                <p className="card__desc">
                                    電子書籍をまとめて管理
                                </p>
                            </div>
                            <div className="card">
                                <div className="card__img">
                                    <Image
                                        src="/tags.jpg"
                                        alt=""
                                        // width={300}
                                        // height={250}
                                        fill
                                        className="card__image"
                                    />
                                </div>
                                <h3 className="card__title">タグ管理</h3>
                                <p className="card__desc">
                                    電子書籍に好きなタグを付けて整理
                                </p>
                            </div>
                            <div className="card">
                                <div className="card__img">
                                    <Image
                                        src="/bookstore.jpg"
                                        alt=""
                                        // width={300}
                                        // height={250}
                                        fill
                                        className="card__image"
                                    />
                                </div>
                                <h3 className="card__title">書庫管理</h3>
                                <p className="card__desc">
                                    電子書籍サービスごとに分類
                                </p>
                            </div>
                            <div className="card">
                                <div className="card__img">
                                    <Image
                                        src="/search.jpg"
                                        alt=""
                                        // width={300}
                                        // height={250}
                                        fill
                                        className="card__image"
                                    />
                                </div>
                                <h3 className="card__title">検索</h3>
                                <p className="card__desc">
                                    タイトル・著者・タグで電子書籍を検索
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section ebook--service">
                    <div className="section__inner">
                        <h2 className="section__title ebook--service__title">
                            対応電子書籍サービス
                        </h2>
                        <div className="ebook__logos logos">
                            <div className="logo">
                                <MenuBookIcon fontSize="large" />
                                <span>Kindle</span>
                            </div>
                            <div className="logo">
                                <MenuBookIcon fontSize="large" />
                                <span>Kobo</span>
                            </div>
                            <div className="logo">
                                <MenuBookIcon fontSize="large" />
                                <span>BOOK☆WALKER</span>
                            </div>
                            <div className="logo">
                                <MenuBookIcon fontSize="large" />
                                <span>honto</span>
                            </div>
                            <div className="logo">
                                <MenuBookIcon fontSize="large" />
                                <span>その他</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">@2026 eBooks</footer>
        </>
    );
}
