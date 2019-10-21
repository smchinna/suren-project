import React from 'react';
/**Styles */
import {
  BackGroundMaker, BackGroundGradient, ThemeChanger, Theme
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
        bgUrl: defaultImg,
        imageIndex: 0
      }
    }

    changeTheme = (index, image) => {
      this.setState({
        imageIndex: index,
        bgUrl: image
      })
    }

    getThemeChangerUI = () => {
      const { imageIndex } = this.state;
      let data = [
        {
          url: defaultImg
        },
        {
          url: SeaImg
        },
        {
          url: iceImg
        },
        {
          url: mountainImg
        },
        {
          url: redSkyImg
        },
        {
          url: shipImg
        }
      ]
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
      const { bgUrl } = this.state;
      console.log("bgggg")
      return (
        <div>
          <BackGroundMaker url={bgUrl} />
          <BackGroundGradient />
          <WrapCom />
          {this.getThemeChangerUI()}
        </div>
      )
    }
  }
  return Hoc;
}

export default ThemeHoc;