import { Card } from '../components/Card';
import { EbookLogo } from '../components/EbookLogo';
import '../styles/Features.scss';
export const Features = () => {
 const cards = [
     {
         id: 0,
         image: 'books.jpg',
         title: '蔵書管理',
         desc: '電子書籍をまとめて管理'
     },
     {
         id: 1,
         image: 'tags.jpg',
         title: 'タグ管理',
         desc: '電子書籍に好きなタグを付けて整理'
     },
     {
         id: 2,
         image: 'bookstore.jpg',
         title: '書庫管理',
         desc: '電子書籍サービスごとに分類'
     },
     {
         id: 3,
         image: 'search.jpg',
         title: '検索',
         desc: 'タイトル・著者・タグで電子書籍を検索'
     }
 ];

 const ebooks = [
     {
         id: 0,
         name: 'Kindle'
     },
     {
         id: 1,
         name: 'Kobo'
     },
     {
         id: 2,
         name: 'BOOK☆WALKER'
     },
     {
         id: 3,
         name: 'honto'
     },
     {
         id: 4,
         name: 'その他'
     },
 ];

    return (
        <>
            <section className="section service">
                <div className="section__inner">
                    <h2 className="section__title service__title">
                        このアプリでできること
                    </h2>
                    <div className="service__cards cards">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                image={card.image}
                                title={card.title}
                                desc={card.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="section ebook--service">
                <div className="section__inner">
                    <h2 className="section__title ebook--service__title">
                        対応電子書籍サービス
                    </h2>
                    <div className="ebook__logos logos">
                        {ebooks.map((ebook) => (
                            <EbookLogo key={ebook.id} name={ebook.name} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
