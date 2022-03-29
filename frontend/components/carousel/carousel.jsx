// import React from 'react';
// import DiscoverIndexItem from '../discover/discover_index_item'

// class Carousel extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       index: 0,
//       genre: this.props.genre,
//       tracks: '',
//       maxIndex: 0
//     }

//     this.prevSlide = this.prevSlide.bind(this);
//     this.nextSlide = this.nextSlide.bind(this);
//     this.getTrackItems = this.getTrackItems.bind(this)
//     this.spamBlock = false;
//     this.spamBlock2 = false;
//   }

//   componentDidMount() {
//     this.getTrackItems(this.props.genre)
//   }
  
//   getTrackItems(genre) {
//     let trackItems = []
//     this.props.tracks.slice().map( track => {
//       if (track.genre === genre) {
//         trackItems.push(
//           <DiscoverIndexItem key={trackItems.length} photoUrl={track.photoUrl} track={track}/>
//         )}
//       })

//     let maxIndex = Math.floor(trackItems.length / 9) + 1
//     this.setState( {
//       tracks: trackItems,
//       maxIndex: maxIndex
//     } )
//     return trackItems
//   }

//   prevSlide() {
//     if (!this.spamBlock && !this.spamBlock2) {
//       if (this.state.index !== 0) {
//         this.spamBlock2 = true
//         if (this.state.index === 1) {
//           setTimeout(() => {
//             this.spamBlock2 = false
//           }, 500)
//         } else {
//           setTimeout(() => {
//             this.spamBlock2 = false
//           }, 150)
//         }
//         this.setState( {index: this.state.index -= 1} )
//       } else {
//         let carouselWrapper = document.getElementById(this.props.genre)
//         carouselWrapper.classList.add("peekaboo")
//         this.spamBlock = true
//         setTimeout(() => {
//           carouselWrapper.classList.remove("peekaboo")
//           this.spamBlock = false
//         }, 300)
//       }
//     }
//   }

//   nextSlide() {
//     if (!this.spamBlock && !this.spamBlock2) {
//       if (this.state.index !== this.state.maxIndex) {
//         this.setState( {index: this.state.index += 1} )
//         this.spamBlock2 = true
//         setTimeout(() => {
//           this.spamBlock2 = false
//         }, 150)
//       } else {
//         let carouselWrapper = document.getElementById(this.props.genre)
//         carouselWrapper.classList.add("peekNext")
//         this.spamBlock = true
//         setTimeout(() => {
//           carouselWrapper.classList.remove("peekNext")
//           this.spamBlock = false
//         }, 300)
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="carousel-container">
//           <div className="carousel-prev-btn-wrapper" onClick={this.prevSlide}>
//             <div className="carousel-prev-btn-shadow">
//               <button className="carousel-prev-btn" />
//             </div>
//           </div>
//         <div className="carousel-wrapper">
//           <ul 
//             className="content-list-ul carousel"
//             id={`${this.props.genre}`}
//             style={
//               {transform: `translateX(-${this.state.index * 380 / this.state.tracks.length}%)`}
//             }
//           >
//             {this.state.tracks}
//           </ul>
//         </div>
//           <div className="carousel-next-btn-wrapper" onClick={this.nextSlide}>
//             <div className="carousel-next-btn-shadow">
//               <button className="carousel-next-btn"/>
//             </div>
//           </div>
//       </div>
//     )
//   }
// }

// export default Carousel

// // import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// // class Carousel extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.scrollElement = React.createRef();
// //     this.state = {
// //       increment: 772,
// //       scrollPosition: 0,
// //       // Each item is 193px in width, container 820px, last item margin -20px
// //       scrollMax: this.props.trackItems.length * 193 - 820 - 20
// //     }
// //   }

// //   componentDidMount() {
// //     this.scrollElement.current.scrollLeft = 0;
// //   }

// //   handleScroll(dir) {
// //     let inc = this.state.increment;
// //     let pos = this.state.scrollPosition;

// //     // Reduce increment if pos at a container edge
// //     if (pos === 0 || pos === this.state.scrollMax) inc -= 34;
    
// //     if (dir === "left") inc *= -1;
// //     pos += inc;

// //     this.scrollElement.current.scrollLeft = pos;
// //     this.setState({ scrollPosition: Math.max(0, Math.min(pos, this.state.scrollMax)) });
// //   }

// //   render() {
// //     let leftClass = (this.state.scrollPosition !== 0) ? "discover-button-container" : "discover-button-container hide-scroll";
// //     let rightClass = (this.state.scrollPosition !== this.state.scrollMax) ? "discover-button-container" : "discover-button-container hide-scroll";

// //     return(
// //       <div ref={this.scrollElement} className="discover-list">
// //         <div className="discover-scroll-container">
// //           <div className={leftClass} onClick={() => this.handleScroll("left")}>
// //             <button className="button-carousel" onClick={() => this.handleScroll("left")}><FontAwesomeIcon icon={faAngleLeft} size="lg"/></button>
// //           </div>
// //           <div className={rightClass} onClick={() => this.handleScroll("right")}>
// //             <button className="button-carousel" onClick={() => this.handleScroll("right")}><FontAwesomeIcon icon={faAngleRight} size="lg"/></button>
// //           </div>
// //         </div>
// //         {this.props.trackItems}
// //       </div>
// //     );
// //   }

// // }

// // export default Carousel;