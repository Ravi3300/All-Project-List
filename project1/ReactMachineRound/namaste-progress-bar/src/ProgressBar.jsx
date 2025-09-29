import { useEffect, useState } from 'react';
import './App.css'
const ProgressBar = () =>{
    const [progresswidth, setProgresswidth] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgresswidth(prev => {
          if (prev < 100) return prev + 1;
          clearInterval(interval); // Stop when it reaches 100
          return prev;
        });
      }, 50); // Adjust this interval for your animation speed
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    
    return(
        <div className='main-progress-conatiner'>
             <div className="empty-progress-bar"> </div>
             <div className="fill-progress-bar" style={{width:`${progresswidth}%`}}  
             role="progressbar"
             aria-valuenow={progresswidth}
             aria-valuemin="0"
             aria-valuemax="100"
             aria-label="Progress bar showing completion percentage"> </div>
             <div className='progress-percentage' style={{ color: progresswidth > 50 ? 'white' : 'black' }}> {progresswidth} %</div>
        </div>

    )
}

export default ProgressBar;