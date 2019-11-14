import React from 'react';
import { withRouter } from 'react-router-dom';

/**Styles */
import {
   ThemeChanger, Theme, HOCWrapper,
} from './styles';

/**Images */
import SeaImg from '../../assets/images/login/sea.jpg';
import defaultImg from '../../assets/images/login/default.jpg';
import iceImg from '../../assets/images/login/Ice.jpg';
import mountainImg from '../../assets/images/login/mountain.jpg';
import redSkyImg from '../../assets/images/login/redSky.jpg';
import shipImg from '../../assets/images/login/ship.jpg';

const ThemeHoc = (WrapCom) => {
  class Hoc extends React.Component {
    constructor() {
      super();
      this.state = {
        bgUrl: shipImg,
        imageIndex: 0,
        imageArr: [
          {
            url: shipImg
          },
          {
            url: SeaImg
          },
          {
            url: defaultImg
          },
          {
            url: iceImg
          },
          {
            url: mountainImg
          },
          {
            url: redSkyImg
          }
        ]
      }
    }

    changeTheme = (index, image) => {
      this.setState({
        imageIndex: index,
        bgUrl: image
      })
    }

    changeImage = () => {
      const { imageIndex, imageArr } = this.state;
      if(imageIndex+1 > imageArr.length - 1 ) {
        this.setState({
          bgUrl: imageArr[0].url,
          imageIndex: 0
        })
      } else {
        this.setState({
          bgUrl: imageArr[imageIndex+1].url,
          imageIndex: imageIndex+1
        })
      }
    }

    componentDidMount() {
      const { history } = this.props;
      //let token = splitCookie('auth_token');
      let token = (localStorage && localStorage.getItem('auth_token')) ? localStorage.getItem('auth_token') : '';
      if(token && token.trim() !== '') {
        history.push('/current_execution');
      } 
    }

    // componentDidMount() {
    //   this.interval = setInterval(() => this.changeImage(), 1500);
    // }
    
    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }

    getThemeChangerUI = () => {
      const { imageIndex, imageArr } = this.state;
      let data = [...imageArr]
      return (
        <ThemeChanger>
          {data.map((image, index) => (
            <Theme
              active={index === imageIndex}
              url={image.url}
              onClick={() => this.changeTheme(index, image.url)}
              key={index}
            >
              <span />
            </Theme>
          ))
          }
        </ThemeChanger>
      )
    }

    render() {
      //const { bgUrl, imageIndex } = this.state;
      return (
        <>
          {/* <FixedPosition>
            <BackGroundMaker url={bgUrl} key={`image-${imageIndex}`}/>
            <BackGroundGradient />
            {this.getThemeChangerUI()}
          </FixedPosition> */}
          <HOCWrapper>
            <WrapCom {...this.props}/>
          </HOCWrapper>          
        </>
      )
    }
  }
  return withRouter(Hoc);
}

export default ThemeHoc;