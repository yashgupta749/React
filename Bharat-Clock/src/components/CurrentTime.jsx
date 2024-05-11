import { useEffect, useState } from "react";

const CurrentTime = () => {
  // let time = new Date();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    //used to clean the interval function
    return () => {
      clearInterval(intervalId);
      console.log("cancelled th interval");
    };
  }, []);

  return (
    <p>
      The current Date: {time.toLocaleDateString()}- {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
