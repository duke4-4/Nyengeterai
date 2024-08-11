
import BannerImage from '../assets/banner_pic.png';

const Banner = () => {
  return (
  <section className="banner">
      <div className="row">
        <div className="col left">
          <p className='header'>Your Next Level of Transformation Starts Here</p>
          <p className='subtext'><a href="https://www.tiktok.com/@iamnyengeterai?_t=8nWUD4DpeMP&_r=1">Unlock your potential below</a></p>
        </div>
        <div className="col right">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </section>
  )
}

export default Banner
