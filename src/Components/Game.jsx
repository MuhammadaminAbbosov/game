import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Game = ({ data }) => {

    console.log();
    return (
        <Wrapper>
            <div className="allPlayers">
                <b>Players</b>
                {data.map(gamer => {
                    return <div className="player" key={gamer.id} >
                        {gamer.name}
                    </div>
                })}
            </div>
            <div className="winner">
                <b>Winner</b>
                <p>
                    {
                        data[Math.floor(Math.random() * data.length)]?.name
                    }
                </p>
            </div>
            <Link to="/" className='play-again'>Play again</Link>
        </Wrapper >
    )
}

export default Game

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    height: 350px;
    width: 400px;
    background-color: #25273C;
    padding: 15px 20px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0;
    }

    .allPlayers, .winner {
        b {
            color: #90FF49;
        }
        .player , p{
            font-size: 16px;
            letter-spacing: 0.1em;
            color: rgba(255, 255, 255, 0.7);
            border-bottom: 2px solid rgba(72, 64, 64, 0.37);
            width: 100%;
            padding: 5px;
        }
    }
    .play-again {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(90, 255, 49, 0.6);
        text-decoration: none;
        text-align: center;
        color: white;
        padding: 5px 0;
        cursor: pointer;
    }
`