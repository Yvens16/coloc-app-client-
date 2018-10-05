import React from "react";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

// import { Link } from "react-router-dom";

function Home(props) {
  const { currentUser } = props;
  return (
    <div className="home">
    <Container>
        <h4 className="mt-5 mb-2 color">Find the perfect roommate in Paris</h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem className="bla"  itemId="1">
              <View>
                <img className="img1" className="d-block w-100" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbaf60783e07f7b6bff745cc88da064a&auto=format&fit=crop&w=1650&q=80" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">You will feel cosy</h3>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="img1" className="d-block w-100" src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58e46263ad3bf111afb122d48a46b2c6&auto=format&fit=crop&w=1651&q=80' alt="Second slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">You will feel at home</h3>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="img1" className="d-block w-100" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b28e42e1dd19f807e6262ed37bb3e751&auto=format&fit=crop&w=1650&q=80" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive"> You will feel at peace</h3>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="img1" className="d-block w-100" src="https://images.unsplash.com/photo-1524061614234-8449637d36ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f86f1d40cd6242f8e054bd042f1182fc&auto=format&fit=crop&w=1567&q=80" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">You will feel really good</h3>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      <div className="wrapper">
      <Link className="btn" to='/signup'>Sign Up</Link>
        <Link className="btn" to='/Login'>Login</Link>
        </div>
      </div>
  );
}

export default Home;

  
      // <Container>
      //   <h4 className="mt-5 mb-2">Basic example</h4>
      //   <Carousel
      //     activeItem={1}
      //     length={4}
      //     showControls={true}
      //     showIndicators={false}
      //     className="z-depth-1">
      //     <CarouselInner>
      //       <CarouselItem itemId="1">
      //         <View>
      //           <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
      //           <Mask overlay="black-light"></Mask>
      //         </View>
      //         <CarouselCaption>
      //           <h3 className="h3-responsive">Light mask</h3>
      //           <p>First text</p>
      //         </CarouselCaption>
      //       </CarouselItem>
      //       <CarouselItem itemId="2">
      //         <View>
      //           <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
      //           <Mask overlay="black-strong"></Mask>
      //         </View>
      //         <CarouselCaption>
      //           <h3 className="h3-responsive">Strong mask</h3>
      //           <p>Second text</p>
      //         </CarouselCaption>
      //       </CarouselItem>
      //       <CarouselItem itemId="3">
      //         <View>
      //           <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
      //           <Mask overlay="black-slight"></Mask>
      //         </View>
      //         <CarouselCaption>
      //           <h3 className="h3-responsive">Slight mask</h3>
      //           <p>Third text</p>
      //         </CarouselCaption>
      //       </CarouselItem>
      //       <CarouselItem itemId="4">
      //         <View>
      //           <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
      //           <Mask overlay="black-light"></Mask>
      //         </View>
      //         <CarouselCaption>
      //           <h3 className="h3-responsive">Sopot Beach</h3>
      //           <p>Taken june 21th by @mattonit</p>
      //         </CarouselCaption>
      //       </CarouselItem>
      //     </CarouselInner>
      //   </Carousel>
      // </Container>
    
  
