import './Gallery.css'

// import img1 from '../assets/gallery/1.jpeg'
import img2 from '../assets/gallery/2.jpeg'
import img3 from '../assets/gallery/3.jpeg'
import img4 from '../assets/gallery/4.jpeg'
import img5 from '../assets/gallery/5.jpeg'
import img6 from '../assets/gallery/6.jpeg'
import img7 from '../assets/gallery/7.jpeg'
import img8 from '../assets/gallery/8.jpeg'
import img9 from '../assets/gallery/9.jpeg'
import img10 from '../assets/gallery/10.jpeg'

function Gallery() {
  const skillImages = [img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header animate-on-scroll">
          <span className="section-label">Impact in Action</span>
          <h2 className="section-title">
            Our <span>Gallery</span>
          </h2>
          <div className="gradient-divider" style={{ margin: '16px auto 24px' }}></div>
          <p className="section-subtitle">
            Witness the change we bring to communities through our various programs and initiatives.
          </p>
        </div>

        <div className="gallery-category animate-on-scroll">
          <h3 className="category-title">Skill Development Center</h3>
          <div className="gallery-grid">
            {skillImages.map((src, index) => (
              <div key={index} className={`gallery-item delay-${(index % 4) + 1} animate-on-scroll`}>
                <div className="gallery-image-wrapper">
                  <img 
                    src={src} 
                    alt={`Skill Development ${index + 1}`} 
                  />
                  {/* <div className="image-overlay">
                    <span className="overlay-icon">📸</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* We can add more categories here later like Healthcare, Food Distribution, etc. */}
      </div>
    </section>
  )
}

export default Gallery
