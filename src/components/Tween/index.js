import React, { useEffect, useState } from 'react';
import TWEEN from '@tweenjs/tween.js';
import styled from 'styled-components';

const Text = styled.div`
  font-size: 30px;
  color: #1e1e28;
  line-height: 34px;
  margin-right: 5px;
}
`

const Tween = ({ num, style = {} }) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    tween(num)
  }, [])

  const tween = ( number, duration = 900) => {
    new TWEEN.Tween({ number: 0 }).to({ number: number }, duration)
    .onUpdate(asd => { setCount(asd.number.toFixed(0))}).start()
    animate()
  }

  const animate = () =>
    TWEEN.update() && requestAnimationFrame(animate);

  return (
    <Text>{count}</Text>
  )
}

export default Tween;
