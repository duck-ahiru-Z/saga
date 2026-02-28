// app/search/page.tsx
import styles from "./search.module.css";

// ★野菜のデータリスト（ここにデータを追加すると自動でカードが増えます！）
const vegetables = [
  {
    id: 1,
    name: "トマト",
    category: "果菜類",
    farmer: "山中農園",
    location: "佐賀県佐賀市",
    tag: "サイズ不揃い",
    price: 150,
    originalPrice: 300,
    discount: "50% OFF",
    stock: "残り 50kg",
    image: "https://placehold.jp/24/ffb6b9/ffffff/400x300.png?text=トマト" // 後で本物に差し替え
  },
  {
    id: 2,
    name: "人参",
    category: "根菜類",
    farmer: "山山ファーム",
    location: "佐賀県唐津市",
    tag: "形状不良",
    price: 120,
    originalPrice: 250,
    discount: "52% OFF",
    stock: "残り 80kg",
    image: "https://placehold.jp/24/ffdfba/ffffff/400x300.png?text=人参"
  },
  {
    id: 3,
    name: "きゅうり",
    category: "葉菜類",
    farmer: "佐藤農場",
    location: "佐賀県鳥栖市",
    tag: "曲がり・色ムラ",
    price: 100,
    originalPrice: 200,
    discount: "50% OFF",
    stock: "残り 30kg",
    image: "https://placehold.jp/24/baffc9/ffffff/400x300.png?text=きゅうり"
  },
  {
    id: 4,
    name: "ミニトマト",
    category: "果菜類",
    farmer: "中村農園",
    location: "佐賀県伊万里市",
    tag: "サイズバラつき",
    price: 180,
    originalPrice: 350,
    discount: "49% OFF",
    stock: "残り 40kg",
    image: "https://placehold.jp/24/ffb6b9/ffffff/400x300.png?text=ミニトマト"
  }
];

export default function SearchPage() {
  return (
    <div className={styles.container}>
      {/* ページタイトル */}
      <h2 className={styles.pageTitle}>規格外野菜を探す</h2>
      <p className={styles.pageSubtitle}>佐賀の農家が丹精込めて育てた、美味しい規格外野菜をお得に購入できます</p>

      {/* 検索フィルター */}
      <div className={styles.filterSection}>
        <input 
          type="text" 
          placeholder="🔍 野菜名、農家名、地域で検索..." 
          className={styles.searchInput} 
        />
        <select className={styles.categorySelect}>
          <option value="">▽ すべてのカテゴリー</option>
          <option value="果菜類">果菜類</option>
          <option value="根菜類">根菜類</option>
          <option value="葉菜類">葉菜類</option>
        </select>
      </div>

      <p className={styles.resultCount}>{vegetables.length}件の野菜が見つかりました</p>

      {/* 野菜カードのグリッド表示 */}
      <div className={styles.grid}>
        {/* map関数を使って、vegetablesの数だけカードを自動生成します */}
        {vegetables.map((veg) => (
          <div key={veg.id} className={styles.card}>
            <div className={styles.discountBadge}>{veg.discount}</div>
            <img src={veg.image} alt={veg.name} className={styles.cardImage} />
            
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <h3 className={styles.vegetableName}>{veg.name}</h3>
                <span className={styles.category}>{veg.category}</span>
              </div>
              
              <div className={styles.farmerInfo}>
                📍 {veg.farmer} / {veg.location}
              </div>
              
              <div className={styles.tag}>
                🏷 {veg.tag}
              </div>
              
              <div className={styles.priceRow}>
                <div>
                  <p className={styles.originalPrice}>通常価格 ¥{veg.originalPrice}</p>
                  <p className={styles.price}>
                    ¥{veg.price} <span className={styles.priceUnit}>/ kg</span>
                  </p>
                </div>
                <div className={styles.stock}>
                  {veg.stock}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}