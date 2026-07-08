import Image from 'next/image';
import '../styles/Card.scss';

type CardProps = {
    image: string;
    title: string;
    desc: string;
};

export const Card = ({ image, title, desc }: CardProps) => {
    return (
        <>
         <div className="card">
          <div className="card__img">
           <Image
               src={`/${image}`}
               alt=""
               // width={300}
               // height={250}
               fill
               className="card__image"
           />
          </div>
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{desc}</p>
         </div>
        </>
    );
};
