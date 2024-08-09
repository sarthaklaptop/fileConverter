import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';


interface CardProps {
    title: string;
    desc: string;
    image: StaticImageData;
    navigate: string
}

export const Card = ({title, desc, image, navigate} : CardProps) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl hotransform transition-transform duration-300 hover:scale-105 hover:m-2 ">
        <figure className="px-10 pt-10">
            <Image
            src={image}
            alt="Image"
            className="rounded-xl"
            width={384}
            height={256} 
            />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p>{title}</p>
            <div className="card-actions">
            <button className="btn btn-primary">
                <Link href={`${navigate}`}>{desc}</Link>
            </button>
            </div>
        </div>
        </div>
    )
}