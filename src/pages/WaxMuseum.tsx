import React,{useEffect} from 'react'

//Components
import Timeline from '../components/waxmuseum/timeline'

const WaxMuseum:React.FC = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Timeline/>
    </section>
  )
}

export default WaxMuseum
