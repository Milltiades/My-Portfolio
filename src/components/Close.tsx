
import styled from 'styled-components';

export default function Close() {
  return (
    <Svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></Svg>
  )
}

const Svg = styled.svg`
    transform: scale(2);
`