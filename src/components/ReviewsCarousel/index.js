import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {active: 0}

  prev = () => {
    const {active} = this.state
    if (active > 0) {
      const update = active - 1
      this.setState({active: update})
    }
  }

  next = () => {
    const {reviewsList} = this.props
    const {active} = this.state
    if (active < reviewsList.length - 1) {
      const update = active + 1
      this.setState({active: update})
    }
  }

  render() {
    const {active} = this.state
    const {reviewsList} = this.props
    return (
      <div className="bg-contianer">
        <div className="inner-contianer">
          <h1 className="heading">Reviews</h1>
          <div className="review-main-contianer">
            <button
              type="button"
              className="btn"
              onClick={this.prev}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <div className="each-review-contianer">
              <img
                src={reviewsList[active].imgUrl}
                alt={reviewsList[active].username}
              />
              <p className="name">{reviewsList[active].username}</p>
              <p className="company">{reviewsList[active].companyName}</p>
              <p className="description">{reviewsList[active].description}</p>
            </div>

            <button
              type="button"
              className="btn"
              onClick={this.next}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
