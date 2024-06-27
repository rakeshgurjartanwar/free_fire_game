import React from 'react'
import "./Home.css"
import { Header } from '../componate/Header'
import { Footer } from '../componate/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PlusCircleFilled, WalletFilled } from '@ant-design/icons';
import { Button, Stack, Carousel } from 'react-bootstrap';
export const Home = () => {
  return (
    <>
      <Header />
      {/* fund seaction start now */}
      <div className="fund">
        <div className="box_home">
          <h5>Available Fund</h5>
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              ADD FUND
            </Button>
            <Button as="a" variant="success">
              WITHDROWEL
            </Button>
          </Stack>
        </div>
      </div>
      {/* silleder */}
      {/* image link */}
      <div className="Home_dis">
        <Carousel>
          <Carousel.Item>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Free-Fire-Max-Download-in-India-1200x900.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Free-Fire-Max-Download-in-India-1200x900.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Free-Fire-Max-Download-in-India-1200x900.png" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/03/Free-Fire-Max-Download-in-India-1200x900.png" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="join">
        <a href="/All_match"><button>JOIN NOW</button></a>
      </div>
      <div className='my-5'></div>


      <Footer />
    </>
  )
}
