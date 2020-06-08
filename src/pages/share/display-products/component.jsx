import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

const banner = 'https://dummyimage.com/293x400/1a1a1a/1a1a1a'

export default () =>
  <section className={style.product}>
    <s.Container className={style.product__container}>
      <s.Title>recomendamos alguns produtos</s.Title>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
      <div className={style.product__div}>
        <s.Image className={style.product__image}>
          <source srcSet={banner} />
        </s.Image>
        <p className={style.product__p}>product name</p>
        <data className={style.product__data} value='999.99'>R$ 999,99</data>
      </div>
    </s.Container>
  </section>
