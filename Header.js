import React from 'react'

export default function Header() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/04/online-1617947180.jpg"className="d-block w-100" alt="clg" width ="1000" height="550"/>
    </div>
    <div className="carousel-item">    
    <img src="https://ocdn.eu/pulscms-transforms/1/M6bk9kpTURBXy82OWE2OWZmNWQxMDgwNGYzY2IxMmNiMjI3YzdhODQ1NS5qcGeSlQMAUM0KAM0FoJMFzQMWzQGugaEwBQ"className="d-block w-100" alt="clg" width ="1030" height="550"/>
    </div>
    <div className="carousel-item">
    <img src="https://www.verywellmind.com/thmb/lTCcMixrHyGDkhbBiZu9ozI_ky4=/1885x1414/smart/filters:no_upscale()/GettyImages-1215678331-c93dd66b9dda41709b8e78a16edc3635.jpg"className="d-block w-100" alt="clg" width ="1030" height="550"/>
        

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
