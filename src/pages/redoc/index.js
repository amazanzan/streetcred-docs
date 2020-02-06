import React from 'react';
import { RedocStandalone } from 'redoc';

function Redoc(props){
	return <RedocStandalone
  specUrl="./swagger.json"
  options={{
    nativeScrollbars: true,
    theme: { colors: { primary: { main: '#dd5522' } } },
  }}
/>
}

export default Redoc;