import React, {useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './VideoPlayer.css'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
      paritialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 40
    }
  };

const VideoPlayer = ({ deviceType }) => {
    const [play,setPlay] = useState(true)
    const [play2,setPlay2] = useState(false)
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
 
    const editPlaying = () => {
    setPlay(!play)  
    setPlay2(!play2)
  }

    const editPlaying2 = () => {
    setPlay2(!play2)
    setPlay(!play)
  }

  return (
    <>
    <div className='video-player-header'>
      <h1>Video Player</h1>
    </div>
        <div className='container col-md-6 main-video' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ReactPlayer url='https://youtu.be/UZp6dhheriM' light={true}  playing={play} onPlay={editPlaying} className='player-container2'/>
              
              
            {isHovering && (  <div className='container video-list' >
                <Carousel
      partialVisbile
      deviceType={deviceType}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
    >
      <div className='player-container'>
     <ReactPlayer url='https://youtu.be/S4ZWD_0VRK8' light={true} playing={play2}  onPlay={editPlaying2} width='100%' height='100%' className='react-player'/>
     </div> 
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>

                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>

                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                    <div className='player-container'>
                    <ReactPlayer url='https://youtu.be/EL0pTo9Z_XU' light={true} playing={play2} width='100px' height='100px' className='react-player'  onPlay={editPlaying2}/>
                    </div>
                   
    </Carousel>
                    
                </div>
       )}
            
        </div>
    </>
  )
}


export default VideoPlayer