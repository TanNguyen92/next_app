'use client';
import { useParams } from 'next/navigation';
import styles from "../Houses.module.css";

export default function House() {
    const params = useParams();
    const id = params.id;
    const houseImages: { [key: string]: string } = {
        gryffindor: '/gryffindor.jpg',
        slytherin: '/slytherin.jpg',
        ravenclaw: '/ravenclaw.jpg',
        hufflepuff: '/hufflepuff.jpg',
    };
    const backgroundImage = houseImages[typeof id === 'string' ? id.toLowerCase() : ''];

    return (
        <div>
            <div
            className={styles.wrapper}
            style={{
                '--bg-img': `url(${backgroundImage})`,
            } as React.CSSProperties} >
            <h1 className={styles.title}>House : {id}</h1>
            </div>
        </div>
    );
}