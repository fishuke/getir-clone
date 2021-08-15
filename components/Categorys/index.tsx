import { FC } from 'react';
import styles from './categorys.module.css';
export const Categorys: FC = () => {
    const classes = `${styles.margintop } ${styles.product }`
    const classes2 = `${styles.margintop2 } ${styles.product }`
    return(
        <div>
             <div className="container">
               <p className={styles.categorytext}>Kategoriler</p>
     <div className={classes}>
     <div className="row">
    <div className="col-md-1">
      <img src="http://cdn.getir.com/cat/5697c78dc181490f00c99fea_f7ef7ccb-f3a4-4388-b787-232967c16320.jpeg" alt="" />
      
          <p>Yeni Ürünler</p>
      
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_3322c10f-2eed-4ce9-ab5a-90db5ce067f2.jpeg" alt="" />
     <p>İndirimler</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg" alt="" />
     <p>Su & içecek</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg" alt="" />
     <p>Meyve Sebze</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg" alt="" />
    <p>Fırından</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg" alt="" />
     <p>Temel Gıda</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg" alt="" />
     <p>Atıştırmalık</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg" alt="" />
     <p>Dondurma</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg" alt="" />
     <p>Yiyecek</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/56dfed05ab747f03008d9379_1619242850313_1619242850394.jpeg" alt="" />
     <p>Süt Kahvaltı</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg" alt="" />
     <p>Fit Form</p>
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg" alt="" />
     <p>Kişisel Bakım</p>
    </div>
   
    
  </div>
</div>
         </div>  
         <div className="container">
     <div className={classes2}>
     <div className="row">
     <div className="col-md-1">
      <img src="http://cdn.getir.com/cat/55449fdf02632e11003c2da8_1619242719523_1619242719602.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/5b06b056b883b700044e3e4c_1619242916956_1619242917048.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c62_1619242697597_1619242697702.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c63_1619242711604_1619242711687.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5b_1619242620186_1619242620271.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/559c07b093be370c0063dd29_1619242727735_1619242727816.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5f_1619242679723_1619242679822.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5d_1619242660025_1619242660107.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/56dfed05ab747f03008d9379_1619242850313_1619242850394.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/57e2996551f3ee030027e28b_1619242858559_1619242858642.jpeg" alt="" />
    </div>
    <div className="col-md-1">
     <img src="http://cdn.getir.com/cat/551430043427d5010a3a5c5c_1619242651249_1619242651335.jpeg" alt="" />
    </div>
   
    
  </div>
</div>
         </div>  
        </div>
    
  
    )
};