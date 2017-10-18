import React, { Component } from 'react';
import request from 'request';

class DisplayPokemon extends Component {
  // quand MAJ des props
  
  // componentWillReceiveProps(nextProps) {
  //   const options = {
  //     url: (`http://pokeapi.co/api/v2/pokemon-form/${nextProps.num}`),
  //     headers: {
  //       'User-Agent': 'request',
  //       'Access-Control-Allow-Origin':'*'
  //     }
  //     request(options, (err, res, body)=> {
  //
  //     })
  //   }
  //
  //   // let myHeaders = new Headers();
  //   // myHeaders.append('Access-Control-Allow-Origin', '*')
  //   // let myRequest = new Request()
  //   // fetch(`http://pokeapi.co/api/v2/pokemon-form/${nextProps.num}`, {
  //   //   headers : myHeaders
  //   // })
  //   // .then((resolve, rejected) => {
  //   //
  //   // })
  // }
  render() {
    return (
      <div></div>
    );
  }

}

export default DisplayPokemon;
