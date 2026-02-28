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




      {/* ===== 4. 私たちのソリューション ===== */}
      <section className={styles.solutionSection}>
        <h2 style={{ fontSize: '28px', color: '#333' }}>私たちのソリューション</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>テクノロジーと農業をかけ合わせ、持続可能な未来へ</p>
        
        <div className={styles.solutionContent}>
          {/* 左側の農園の画像 */}
          <div className={styles.solutionImage}>
            <img 
              src="https://placehold.jp/24/cccccc/ffffff/600x400.png?text=農園の風景画像" 
              alt="佐賀の農園" 
            />
          </div>
          {/* 右側のリスト */}
          <div className={styles.solutionList}>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>🤝</div>
              <div>
                <h4 style={{ fontSize: '18px', margin: '0 0 8px' }}>規格外野菜のマッチング</h4>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>形が不揃いなだけで品質は変わらない野菜を、安くで直接お届けします。</p>
              </div>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>📈</div>
              <div>
                <h4 style={{ fontSize: '18px', margin: '0 0 8px' }}>農家の収入向上</h4>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>廃棄ゼロへ。作物を通じた新たな収入源を確保し、農業をより魅力的なものに。</p>
              </div>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.solutionIcon}>♻️</div>
              <div>
                <h4 style={{ fontSize: '18px', margin: '0 0 8px' }}>フードロス削減</h4>
                <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>食品廃棄物を削減し、環境負荷を抑え、SDGsの目標達成に貢献します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. AI搭載レシピ提案 ===== */}
      <section className={styles.recipeSection}>
        <h2 style={{ fontSize: '28px', color: '#333' }}>AI搭載レシピ提案</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>規格外野菜を無駄なく、AIが最適化したレシピをご提案</p>
        
        <div className={styles.recipeCards}>
          {/* レシピカード1 */}
          <div className={styles.recipeCard}>
            <img src="https://placehold.jp/24/ffb6b9/ffffff/400x300.png?text=トマトパスタ" alt="パスタ" className={styles.recipeImage} />
            <div className={styles.recipeInfo}>
              <h4 className={styles.recipeTitle}>規格外トマトの濃厚トマトパスタ</h4>
              <p className={styles.recipeDesc}>形が不揃いなトマトでも、完熟の甘みが広がる本格的なトマトソースパスタ。</p>
              <div className={styles.recipeMeta}>
                <span>⏱ 25分</span>
                <span>👨‍👩‍👧‍👦 2人前</span>
                <span>🍅 トマト</span>
              </div>
            </div>
          </div>
          {/* レシピカード2 */}
          <div className={styles.recipeCard}>
            <img src="https://placehold.jp/24/ffdfba/ffffff/400x300.png?text=人参スープ" alt="スープ" className={styles.recipeImage} />
            <div className={styles.recipeInfo}>
              <h4 className={styles.recipeTitle}>曲がり人参のポタージュスープ</h4>
              <p className={styles.recipeDesc}>曲がった人参も、スープにすれば形は関係なし。優しい甘さのポタージュ。</p>
              <div className={styles.recipeMeta}>
                <span>⏱ 30分</span>
                <span>👨‍👩‍👧‍👦 4人前</span>
                <span>🥕 人参</span>
              </div>
            </div>
          </div>
          {/* レシピカード3 */}
          <div className={styles.recipeCard}>
            <img src="https://placehold.jp/24/baffc9/ffffff/400x300.png?text=きゅうりの浅漬け" alt="浅漬け" className={styles.recipeImage} />
            <div className={styles.recipeInfo}>
              <h4 className={styles.recipeTitle}>曲がりきゅうりの即席浅漬け</h4>
              <p className={styles.recipeDesc}>曲がったきゅうりこそ、味が染み込みやすい！簡単で美味しい浅漬け。</p>
              <div className={styles.recipeMeta}>
                <span>⏱ 10分</span>
                <span>👨‍👩‍👧‍👦 2人前</span>
                <span>🥒 きゅうり</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.recipeBtnWrapper}>
          <Link href="/recipe" className={styles.recipeBtn}>
            すべてのレシピを見る ✨
          </Link>
        </div>
      </section>

      {/* ===== 6. 今すぐ始めよう（CTA） ===== */}
      <section className={styles.ctaSection}>
        <h2 style={{ fontSize: '32px', margin: '0 0 16px' }}>今すぐ始めよう</h2>
        <p style={{ fontSize: '16px', opacity: 0.9 }}>あなたも持続可能な社会の実現に参加しませんか？</p>
        <div className={styles.ctaButtons}>
          <Link href="/search" className={styles.btnPrimary}>野菜を探す</Link>
          <Link href="/sell" className={styles.btnOutline}>出品する</Link>
        </div>
      </section>
    </div>
  );
}
