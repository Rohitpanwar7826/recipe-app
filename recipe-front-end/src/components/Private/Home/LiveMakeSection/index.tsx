import React from 'react'
import useLiveRecipe from './hooks/useLiveRecipe'

const LiveMakeSection = () => {
  const recipes = useLiveRecipe();
  console.log(recipes)
  return (
    <>
      <div className='w-100 row col-md-12 bg-dark mx-0 my-4'>

        <div className="card p-2 m-4" style={{ width: "18rem" }}>
          <img src="https://cdn.shopify.com/s/files/1/0011/2354/9250/articles/mex_squash_600x.png?v=1648239748" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <div className="card p-2 m-4" style={{ width: "18rem" }}>
          <img src="https://cdn.shopify.com/s/files/1/0011/2354/9250/articles/mex_squash_600x.png?v=1648239748" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveMakeSection