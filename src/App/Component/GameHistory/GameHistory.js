import React, { Component } from "react";
import axios from "axios";

class GameHistory extends Component {

  componentWillMount() {
    this.setState({
      history:
        {
          "games": [
            {
              "id": 56972,
              "tx_hash": "0x388bff68e9d5f8cd6a4e6765b426301b2fa2e13efba608b09e11f888e6fb284a",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0xe5aaf4c14176b4eaa648c494ea465c136a9c016d3d3cbc1822e74ca0be81f521",
              "reveal": "0xa7721226d7bbaad8f2321633b85279bc29104a7f2b6ccf9a23020d325598d107",
              "bet_mask": "2",
              "amount": "800000000000000000",
              "reveal_tx_hash": "0x1c46cf88ed3ab11a10b47fa2382ee5dc8ebb8d1a9167ff721dbb40fff5c77348",
              "dice_payment": "1582000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x9966dc66995927241830a790105f386e3a2d760b8ea1b591dcd1e6f222735e9b",
              "bet_block_number": 6150480,
              "reveal_block_hash": null
            },
            {
              "id": 56977,
              "tx_hash": "0x7566582dc2349d9176de226dbe101d0fb7fc8da3a7a9a706aee5f9828f6db98f",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0x17c4a865a702f36ea1d6d6bfec5a5d5c500f4448856c72f9c89bb9e8e371065c",
              "reveal": "0x0bd2c1c3657d51f41ddbfad8be20e51b783916baf94c0db28bba3f404fe68792",
              "bet_mask": "2",
              "amount": "460000000000000000",
              "reveal_tx_hash": "0xa193bbd3d5288d86b302ab4d5e251b4657a61fb767a7c27861f820dfa4e88e07",
              "dice_payment": "908800000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0xe10bacb2a2e94ba12bb13541fae3ebde2a0290d604eb2ab883310c4468b4ef4f",
              "bet_block_number": 6150485,
              "reveal_block_hash": "0x3107b16c0854168612f53d00d4f044b41a04eb157a5aca25c8b636c913902667"
            },
            {
              "id": 56972,
              "tx_hash": "0x388bff68e9d5f8cd6a4e6765b426301b2fa2e13efba608b09e11f888e6fb284a",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0xe5aaf4c14176b4eaa648c494ea465c136a9c016d3d3cbc1822e74ca0be81f521",
              "reveal": "0xa7721226d7bbaad8f2321633b85279bc29104a7f2b6ccf9a23020d325598d107",
              "bet_mask": "2",
              "amount": "800000000000000000",
              "reveal_tx_hash": "0x1c46cf88ed3ab11a10b47fa2382ee5dc8ebb8d1a9167ff721dbb40fff5c77348",
              "dice_payment": "1582000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x9966dc66995927241830a790105f386e3a2d760b8ea1b591dcd1e6f222735e9b",
              "bet_block_number": 6150480,
              "reveal_block_hash": "0x7b7d641fb72af3b7b24e879e37e40ac60337ab8835bd45bc5496d2dcf2e0e6e3"
            },
            {
              "id": 56971,
              "tx_hash": "0x73493e9719ce0b78c9fbaeb75bdb6b1f1caab73cdb82c774750c74c633788476",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0x3b4e023fd6421be68c95decfeb34ae10df8a29ad7c06296b8baf7d1dd9e3a0a7",
              "reveal": "0x1b5f5ff06f845b173431d6dcc49409c8b866f60155b2fd4033b800a2359cb713",
              "bet_mask": "2",
              "amount": "600000000000000000",
              "reveal_tx_hash": "0x24c5f382929d675d0b52c699676e98e8c23345d4bf3d263af54377585ea42d5f",
              "dice_payment": "1186000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x5b9aba5bdd397d6afc2bc04615326c6a02adbf6930b66e285d908cf1c77b04fd",
              "bet_block_number": 6150477,
              "reveal_block_hash": "0x72f673b5e7609cc6cde845b5afcb274492065d53f1d91182f3f90f78558a9a94"
            },
            {
              "id": 56969,
              "tx_hash": "0x537d9defe375d99a59ce220f7204e1c645134296bfb085fc55cace0958337328",
              "address_from": "0x702df44ee0baff50f8906fd766d038d74df98769",
              "modulo": 2,
              "commit": "0x7b30e0b1315616cd61ae09bf9e12a3245c07209df17fc8ae44d56447ffb5fda4",
              "reveal": "0x9843c390353673175af9df852ec61c548328d68eef5562896145459be67c3d90",
              "bet_mask": "1",
              "amount": "20000000000000000",
              "reveal_tx_hash": "0x99ccdd6cc8ae73c908f80e72fb340a2614adfd118fcde1a589fd80ca3b6d5b24",
              "dice_payment": "39400000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x5b9aba5bdd397d6afc2bc04615326c6a02adbf6930b66e285d908cf1c77b04fd",
              "bet_block_number": 6150477,
              "reveal_block_hash": "0xd93d55bc0db45dd1fffe654f6d8da65a13e5e94998e9ba36342786b87e20dcf1"
            },
            {
              "id": 56968,
              "tx_hash": "0x4196c1a1dfd98cd2eaa01698eee7cef8f0c86fcde2865d6e4b89789175429309",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0x1bd0c36ffecff31074ef9f9d2a28db330fc213dd43c00f9d5b8db339b4d61434",
              "reveal": "0xdcc2fe55d921983f2bc94a2e8effd961a83bcaac953cfcd8e39870863e106549",
              "bet_mask": "2",
              "amount": "400000000000000000",
              "reveal_tx_hash": "0xaf66c51a26c58a25c09945beef50cf7ed3b5d268af418fe880eb571d6e4852b9",
              "dice_payment": "790000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0xca79e81c275796c891441f90b508714932663e8db93391c84cd084d634e7cfce",
              "bet_block_number": 6150474,
              "reveal_block_hash": "0x5b9aba5bdd397d6afc2bc04615326c6a02adbf6930b66e285d908cf1c77b04fd"
            },
            {
              "id": 56967,
              "tx_hash": "0x67ba870c154d1bb8c64ffc09b5726e68ca5338be664be1cc11cbe9cffb91aeef",
              "address_from": "0x702df44ee0baff50f8906fd766d038d74df98769",
              "modulo": 2,
              "commit": "0xa135bffbb75f9966dc6cd6253749a63d847bfbd528d9fb8478e9308a617f6c26",
              "reveal": "0xe887f5e63bc1321c426cad81b272a184a775206339289d5c528da66612676611",
              "bet_mask": "1",
              "amount": "200000000000000000",
              "reveal_tx_hash": "0xdb5cf25a11e77dd024f3e20d89eb2a17d0177e777a6aed9658599b2d6cd175eb",
              "dice_payment": "394000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0xca79e81c275796c891441f90b508714932663e8db93391c84cd084d634e7cfce",
              "bet_block_number": 6150474,
              "reveal_block_hash": "0x89f0f6661960a620832550a7ac90bd03a9b097a08fb9b84c7fb41249f54188f6"
            },
            {
              "id": 56965,
              "tx_hash": "0x17e8e87b4e5183a51533acc5f5c2e61ed3a72fe3bff1b6fea7390aa6c328db67",
              "address_from": "0x702df44ee0baff50f8906fd766d038d74df98769",
              "modulo": 2,
              "commit": "0xf806c1b91ce40e0d371b059a5b52f6f3542046a5ad6bb1a34770517ebec41e6e",
              "reveal": "0x9e412e5820cdfbdfd54dcd914efd2760918852195120bb38e4f82710ed4be067",
              "bet_mask": "1",
              "amount": "100000000000000000",
              "reveal_tx_hash": "0xacee09efb22dbfffa8cae02b788811f9cebd9c6452f761f8c11616ff6e298dfd",
              "dice_payment": "0",
              "jackpot_payment": "0",
              "bet_block_hash": "0x0f2b77500c3ca0cb08295e56ced5b316ab1dcaf357b3c4b980a3f336347a9ccc",
              "bet_block_number": 6150471,
              "reveal_block_hash": "0xca79e81c275796c891441f90b508714932663e8db93391c84cd084d634e7cfce"
            },
            {
              "id": 56971,
              "tx_hash": "0x73493e9719ce0b78c9fbaeb75bdb6b1f1caab73cdb82c774750c74c633788476",
              "address_from": "0xd1eb49fa03f2a96b642eb9b821345f11879a4f95",
              "modulo": 2,
              "commit": "0x3b4e023fd6421be68c95decfeb34ae10df8a29ad7c06296b8baf7d1dd9e3a0a7",
              "reveal": "0x1b5f5ff06f845b173431d6dcc49409c8b866f60155b2fd4033b800a2359cb713",
              "bet_mask": "2",
              "amount": "600000000000000000",
              "reveal_tx_hash": "0x24c5f382929d675d0b52c699676e98e8c23345d4bf3d263af54377585ea42d5f",
              "dice_payment": "1186000000000000000",
              "jackpot_payment": "0",
              "bet_block_hash": "0x5b9aba5bdd397d6afc2bc04615326c6a02adbf6930b66e285d908cf1c77b04fd",
              "bet_block_number": 6150477,
              "reveal_block_hash": "0x72f673b5e7609cc6cde845b5afcb274492065d53f1d91182f3f90f78558a9a94"
            }
          ]
        }
    });
  }

  renderGames(games) {
    return games.map(game =>
      <div className="row">
        <div>
          <p>{game.address_from.substring(0, 8)}</p>
        </div>
        <div>
          <p>{(game.amount / 3000000000000000000).toFixed(2)}</p>
        </div>
        <div>
          <img src={game.bet_mask === "1" ? "./src/images/coin-front.png" : "./src/images/coin-back.png"} width="15" height="15" />
        </div>
        <div>
          <img src={game.dice_payment === "0" && game.bet_mask === "1" ? "./src/images/coin-back.png" : "./src/images/coin-front.png"} width="15" height="15" />
        </div>
        <div>
          <p>{(game.dice_payment / 3000000000000000000).toFixed(2)}</p>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.history) {
      return null;
    }

    return (
      <div className="game-history">
        <h5 className="title">Game History</h5>
        <div className="caption">
          <p>Player</p>
          <p>Bet</p>
          <p></p>
          <p>Result</p>
          <p></p>
        </div>
        {this.renderGames(this.state.history.games)}
      </div>
    );
  }
};

export default GameHistory;
