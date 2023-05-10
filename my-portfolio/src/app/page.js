import Image from 'next/image'
import styles from './page.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className={styles.social__icons_layout}>
          <a href='https://github.com/ZacUpshure'>
            <AiFillGithub className={styles.socials}/>
          </a>
          <a href='https://www.linkedin.com/in/aaron-engelmann-90a956187/'>
            <AiFillLinkedin className={styles.socials}/>
          </a>
          <a href='#'>
            <AiFillInstagram className={styles.socials}/>
          </a>
          {/* <code className={styles.code}>src/app/page.js</code> */}
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/EDEV.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={120}
              height={30}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Hero_image.png"
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CV <span>-&gt;</span>
          </h2>
          <p>Take a look at my CV to find my strength and weaknesses!</p>
        </a>

        {/*<a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            test <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>*/}

        <a
          href="http://themoseseye-cicd-git-frontend.s3-website.eu-central-1.amazonaws.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            My Projekts <span>-&gt;</span>
          </h2>
          <p>Here is some of my Previous Work</p>
        </a>
      </div>
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <div className={styles.center} >
          <p>
            I started Web development when I was about 15 years old. Coming 
            from a Design background, I later became more and more interested in Code and Software engineering.
            it was quite a long way until I got into the matter but as seen in my cv, in 2020 I decided to study 
            Computer Science thinking that it was just code... It wasnt! Regardless it was a good time, the 
            Network and the Work experience that I was allowed to gather as a working student got me truly to the next
            level. Now I live with my wife and my daughter in Pankow for my last year in University. 
          </p>
          </div>
    </main>
  )
}
