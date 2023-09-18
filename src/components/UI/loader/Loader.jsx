import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.parent}>
      <h2>YÜKLƏNİR...</h2>
      <div className={cl.eye}>
        <svg className={cl.sharingan} viewBox="0 0 100 100">
          <g id="full_pupil">
            <circle id={cl["iris"]} r="30" cx="50%" cy="50%"></circle>
            <circle id={cl["pupil"]} r="10" cx="50%" cy="50%"></circle>

            <text
              id="iris_anomaly"
              className={cl.iris_anomaly}
              transform="rotate(180 30,8)"
            >
              ,
            </text>
            <use
              href="#iris_anomaly"
              transform="rotate(120 50,50)"
              fill="black"
            ></use>
            <use
              href="#iris_anomaly"
              transform="rotate(240 50,50)"
              fill="black"
            ></use>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
