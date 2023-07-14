import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedReactHooksDemo = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Type your desired text here...', 'And it will be typed out!', 'You can customize the animation.'],
      typeSpeed: 40,
      backSpeed: 40,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="wrap">
      <h1>Typed.js</h1>

      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>

      <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => typed.current.start()}>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button>
    </div>
  );
};

export default TypedReactHooksDemo;
