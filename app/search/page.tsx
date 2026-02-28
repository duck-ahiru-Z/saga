// app/search/page.tsx
'use client'; // ★動くパーツにする

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import styles from "./search.module.css";

// データの型（TypeScript用のおまじない）
type Vegetable = {
  id: string;
  name: string;
  category: string;
  farmer: string;
  location: string;
  tag: string;
  price: number;
  originalPrice: number;
  stock: string;
  image: string;
};

export default function SearchPage() {
  // ★ データベースから取ってきたデータを保存する箱
  const [vegetables, setVegetables] = useState<Vegetable[]>([]);
  // ★ 読み込み中かどうかを判定するフラグ
  const [isLoading, setIsLoading] = useState(true);

  // ★ ページが開かれた瞬間に1回だけ実行される魔法（useEffect）
  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        // Firestoreの「vegetables」コレクションから、作成日の新しい順（desc）でデータを取得する準備
        const q = query(collection(db, "vegetables"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        
        // 取ってきたデータを、画面で使いやすい形（配列）に変換する
        const vegData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as Vegetable[];
        
        setVegetables(vegData); // 変数にセット！
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      } finally {
        setIsLoading(false); // 読み込み完了
      }
    };

    fetchVegetables(); // 上で作った関数を実行
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>規格外野菜を探す</h2>
      <p className={styles.pageSubtitle}>佐賀の農家が丹精込めて育てた、美味しい規格外野菜をお得に購入できます</p>

      {/* 検索フィルター */}
      <div className={styles.filterSection}>
        <input type="text" placeholder="🔍 野菜名、農家名、地域で検索..." className={styles.searchInput} />
        <select className={styles.categorySelect}>
          <option value="">▽ すべてのカテゴリー</option>
          <option value="果菜類">果菜類</option>
          <option value="根菜類">根菜類</option>
          <option value="葉菜類">葉菜類</option>
        </select>
      </div>

      {/* 読み込み中の表示 */}
      {isLoading ? (
        <p style={{ textAlign: 'center', padding: '40px', color: '#666' }}>データを読み込み中...</p>
      ) : (
        <>
          <p className={styles.resultCount}>{vegetables.length}件の野菜が見つかりました</p>

          <div className={styles.grid}>
            {/* 取ってきた本物のデータでカードを作る！ */}
            {vegetables.map((veg) => {
              // 割引率の計算（例: 300円から150円なら 50% OFF）
              const discountRate = Math.round((1 - veg.price / veg.originalPrice) * 100);

              return (
                <div key={veg.id} className={styles.card}>
                  {/* 割引率を自動計算して表示 */}
                  <div className={styles.discountBadge}>{discountRate}% OFF</div>
                  {/* 画像はダミーURLが入ります */}
                  <img src={veg.image || "https://placehold.jp/24/cccccc/ffffff/400x300.png?text=NoImage"} alt={veg.name} className={styles.cardImage} />
                  
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
                        残り {veg.stock}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 出品が0件の時のメッセージ */}
          {vegetables.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <p>現在出品されている野菜はありません。</p>
              <p>あなたが最初の出品者になりませんか？</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}