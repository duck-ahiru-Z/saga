// app/recipe/page.tsx
import styles from "./recipe.module.css";

// ★レシピのデータリスト
const recipes = [
  {
    id: 1,
    title: "規格外トマトの濃厚トマトパスタ",
    desc: "形が不揃いなトマトでも、完熟の甘みが広がる本格的なトマトソースパスタ。",
    time: "25分",
    servings: "2人前",
    mainIngredient: "トマト",
    tag: "簡単",
    image: "https://placehold.jp/24/ffb6b9/ffffff/400x300.png?text=トマトパスタ"
  },
  {
    id: 2,
    title: "曲がり人参のポタージュスープ",
    desc: "曲がった人参も、スープにすれば形は関係なし。優しい甘さのポタージュ。",
    time: "30分",
    servings: "4人前",
    mainIngredient: "人参",
    tag: "簡単",
    image: "https://placehold.jp/24/ffdfba/ffffff/400x300.png?text=人参スープ"
  },
  {
    id: 3,
    title: "曲がりきゅうりの即席浅漬け",
    desc: "曲がったきゅうりこそ、味が染み込みやすい！簡単で美味しい浅漬け。",
    time: "10分",
    servings: "2人前",
    mainIngredient: "きゅうり",
    tag: "簡単",
    image: "https://placehold.jp/24/baffc9/ffffff/400x300.png?text=浅漬け"
  },
  {
    id: 4,
    title: "規格外野菜の彩り野菜炒め",
    desc: "サイズがバラバラでも大丈夫！彩り豊かな野菜炒め。",
    time: "15分",
    servings: "2人前",
    mainIngredient: "ミニトマト",
    tag: "時短",
    image: "https://placehold.jp/24/ffffba/ffffff/400x300.png?text=野菜炒め"
  }
];

export default function RecipePage() {
  return (
    <div className={styles.container}>
      {/* ページヘッダー */}
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>
          <span className={styles.pageTitleIcon}>✨</span> 
          AI搭載レシピ提案
        </h2>
        <p className={styles.pageSubtitle}>
          規格外野菜を無駄なく美味しく活用！AIがあなたにぴったりのレシピを提案します。
        </p>
      </div>

      {/* 3つの特徴カード */}
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>✨</div>
          <h3 className={styles.featureTitle}>AI最適化レシピ</h3>
          <p className={styles.featureDesc}>規格外野菜の特徴を活かした、AIが最適化したレシピを提案</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🍳</div>
          <h3 className={styles.featureTitle}>形を気にせず調理</h3>
          <p className={styles.featureDesc}>曲がったり、サイズが不揃いでも美味しく作れる工夫満載</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🔍</div>
          <h3 className={styles.featureTitle}>簡単検索</h3>
          <p className={styles.featureDesc}>野菜名や料理名から、あなたに合ったレシピをすぐに見つけられる</p>
        </div>
      </div>

      {/* 通常の検索バー */}
      <div className={styles.searchSection}>
        <input 
          type="text" 
          placeholder="🔍 レシピ名、野菜名で検索..." 
          className={styles.searchInput} 
        />
      </div>

      {/* ===== AIレシピジェネレーター（目玉機能） ===== */}
      <div className={styles.generatorBanner}>
        <div className={styles.generatorContent}>
          <h2 className={styles.generatorTitle}>
            ✨ AIレシピジェネレーター
          </h2>
          <p className={styles.generatorDesc}>
            お手持ちの規格外野菜を入力すると、AIが最適なレシピを生成します
          </p>
          <div className={styles.generatorInputGroup}>
            <input 
              type="text" 
              placeholder="例: 曲がった人参、小さいトマト" 
              className={styles.generatorInput} 
            />
            <button type="button" className={styles.generatorBtn}>
              レシピ生成
            </button>
          </div>
        </div>
        <div className={styles.generatorHints}>
          <h4>💡 ヒント</h4>
          <ul>
            <li>曲がった人参 → ポタージュ</li>
            <li>小さいトマト → ソース</li>
            <li>不揃いなきゅうり → 浅漬け</li>
          </ul>
        </div>
      </div>

      {/* レシピ一覧 */}
      <p className={styles.resultCount}>{recipes.length}件のレシピが見つかりました</p>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.card}>
            {/* 左上のバッジ */}
            <div className={styles.badges}>
              <span className={styles.badgeAi}>✨ AI提案</span>
              <span className={styles.badgeTag}>{recipe.tag}</span>
            </div>
            <img src={recipe.image} alt={recipe.title} className={styles.cardImage} />
            
            <div className={styles.cardContent}>
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              <p className={styles.recipeDesc}>{recipe.desc}</p>
              
              <div className={styles.recipeMeta}>
                <span>⏱ {recipe.time}</span>
                <span>👨‍👩‍👧‍👦 {recipe.servings}</span>
                <span>🥕 {recipe.mainIngredient}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}