// app/page.tsx の一部変更
import Link from "next/link";
import styles from "./page.module.css"; // ★追加

export default function HomePage() {
  return (
    <div>
      <section className={styles.heroSection}> {/* ★書き方変更 */}
        <div className={styles.heroText}>
          {/* ...中身はそのまま... */}
          <Link href="/search" className={styles.heroBtn}>
            野菜を探す →
          </Link>
        </div>
        {/* 画像エリアはそのまま */}
      </section>

      <section className={styles.statsSection}>
        {/* ...各クラスを styles.statItem などに変更... */}
        <div className={styles.statItem}>
          {/* ...中身はそのまま... */}
        </div>
      </section>

      <section className={styles.issuesSection}>
        <h2 style={{ fontSize: '28px', color: '#333' }}>私たちが解決する社会課題</h2>
        {/* ... */}
        <div className={styles.issuesCards}>
          <div className={styles.issueCard}> {/* ★書き方変更 */}
             {/* ...中身はそのまま... */}
          </div>
          {/* ...他のカードも styles.issueCard に... */}
        </div>
      </section>
    </div>
  );
}