import Countdown, { zeroPad } from "react-countdown";
import useGlobalState from "../../../../../globalstate";
import { useNavigate } from "react-router-dom";

export default function Timer() {
  const { timer, setTimer } = useGlobalState();
  const navigate = useNavigate();
  return (
    <Countdown
      date={Date.now() + timer}
      onTick={() => {
        setTimer(timer - 1000);
      }}
      onComplete={() => {
        navigate("/dashboard/kuis/hasil");
      }}
      renderer={(props) => (
        <>
          {zeroPad(props.minutes)}:{zeroPad(props.seconds)}
        </>
      )}
    />
  );
}
