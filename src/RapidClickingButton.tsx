import { Progress } from "antd";
import { useEffect, useState } from "react";

const useAnimationFrame = (
  funcOnNextAnimateFrame: (deltaTime: number) => void,
  shouldRunAnimationFrame = true
) => {
  useEffect(() => {
    if (shouldRunAnimationFrame === false) return;
    let isRunningCountDown = true;
    let previousTimeStamp: number;

    function onNextFrame(timestamp: number) {
      if (isRunningCountDown) {
        if (previousTimeStamp) {
          //avoid first frame with previousTimeStamp = undefined
          const deltaTime = timestamp - previousTimeStamp;

          funcOnNextAnimateFrame(deltaTime);
        }

        previousTimeStamp = timestamp;
        window.requestAnimationFrame(onNextFrame);
      }
    }

    window.requestAnimationFrame(onNextFrame);

    return () => {
      isRunningCountDown = false;
    };
  }, [shouldRunAnimationFrame]);
};

const RapidClickingButton = ({
  onClick = null,
  children = "sdf",
  countdownTime = 4000,
}) => {
  const [percent, setPercent] = useState(0);

  const shouldRunAnimationFrame = percent > 0 && percent < 100;

  useAnimationFrame((deltaTime: number) => {
    setPercent((prevValue) => {
      const delta = (deltaTime / countdownTime) * 100;
      console.log("delta", delta);
      let newPercent = prevValue - delta;

      if (newPercent < 0) {
        newPercent = 0;
      }
      return newPercent;
    });
  }, shouldRunAnimationFrame);

  return (
    <div className="main">
      <Progress
        type="circle"
        percent={percent}
        format={() => (
          <button
            onClick={() => {
              setPercent((prevValue) => prevValue + 15);
            }}
          >
            {children}
          </button>
        )}
      ></Progress>
    </div>
  );
};

export default RapidClickingButton;
