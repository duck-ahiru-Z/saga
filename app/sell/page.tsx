// app/sell/page.tsx
import styles from "./sell.module.css";

export default function SellPage() {
  return (
    <div className={styles.container}>
      {/* ページ上部のタイトル群 */}
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>規格外野菜を出品する</h2>
        <p className={styles.pageSubtitle}>形が不揃いな野菜も、価値を理解してくれる消費者に届けましょう</p>
      </div>

      {/* ステップバー（1. 農家情報 -> 2. 野菜情報） */}
      <div className={styles.stepper}>
        <div className={`${styles.step} ${styles.stepActive}`}>
          <div className={styles.stepNumber}>1</div>
          <span>農家情報</span>
        </div>
        <div className={styles.stepLine}></div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <span>野菜情報</span>
        </div>
      </div>

      {/* 入力フォームの白いカード */}
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>農家情報の登録</h3>

        <form>
          {/* 農園名 / 農家名 */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              農園名 / 農家名 <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="例: 田中農園" 
            />
          </div>

          {/* 所在地 */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              所在地 <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="例: 佐賀県佐賀市" 
            />
          </div>

          {/* 農業経験年数 */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              農業経験年数 <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="例: 20年" 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>
              電話番号 <span className={styles.required}>*</span>
            </label>
            <input 
              type="tel" 
              className={styles.input} 
              placeholder="例: 090-1234-5678" 
            />
          </div>

          {/* 農園の紹介 */}
          <div className={styles.formGroup}>
            <label className={styles.label}>
              農園の紹介 <span className={styles.required}>*</span>
            </label>
            <textarea 
              className={styles.textarea} 
              placeholder="農園のこだわりや栽培方法について教えてください" 
            />
          </div>

          {/* 農園の写真アップロード（今は見た目だけ） */}
          <div className={styles.formGroup}>
            <label className={styles.label}>農園の写真</label>
            <div className={styles.uploadArea}>
              <div className={styles.uploadIcon}>⬆️</div> {/* アイコンの代わり */}
              <p className={styles.uploadText}>クリックして画像をアップロード</p>
            </div>
          </div>

          {/* 次へボタン */}
          <button type="button" className={styles.submitBtn}>
            次へ：野菜情報の登録
          </button>
        </form>
      </div>
    </div>
  );
}