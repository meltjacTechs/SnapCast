import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return (
        <main className="sign-in">
            <aside className="testimonial">
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="logo"  width={32} height={32}/>
                    <h1>SnapCast</h1>
                </Link>

                <div className="description">
                    <section>
                        <figure>
                            {Array.from({ length: 5}).map((_, index) => (
                                <Image src="/assets/icons/star.svg" alt="star"  width={20} height={20} key={index}/>
                            ))}
                        </figure>
                        <p>SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it's fast, smooth, and shareable in seconds.</p>

                        <article>
                            <Image src="/assets/images/jason.png" alt="jason" width={64} height={64} className="rounded-full aspect-square" />
                            <div>
                                <h2>Jason Rivera</h2>
                                <p>Product Designer, NovaByte</p>
                            </div>
                        </article>
                    </section>
                </div>
                <p>© SnapCast {( new Date()).getFullYear()}</p>
            </aside>
        </main>
    )
}
export default Page
