import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Arrow from "../assets/Arrow.svg"
import CheckedIcon from "../assets/Check True.svg"
import CheckedIcon2 from "../assets/Check.svg"

const Todo = ({ setData }) => {

    const [gamers, setGamers] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {

        e.preventDefault()
        if (e.target[0].value.trim() === "") {
            alert("Please enter a name")
        }
        else {
            setGamers([...gamers, {
                id: Math.random(),
                name: e.target[0].value,
                checked: false
            }])

            e.target[0].value = ""
        }


    }

    const handleChecked = (id) => {
        setGamers(gamers.map(gamer => {
            if (gamer.id === id) {
                gamer.checked = !gamer.checked
            }
            return gamer
        }))
        setTimeout(() => {
            setGamers(gamers.filter(gamer => !gamer.checked))
        }, 2000)
    }

    const saveData = () => {
        if (gamers.length < 2) {
            alert("Please add at least 2 gamers")
        }
        else {
            setData(gamers)
            navigate("/game")
        }
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit} className="input-box">
                <input type="text" placeholder='Create a new gamer...' />
                <button type="submit">
                    <img src={Arrow} alt="" />
                </button>
            </form>
            <div className="todo-items">
                {
                    gamers.map(gamer => {
                        return (
                            <div className={gamer.checked ? "item checked" : "item"} key={gamer.id} onClick={() => handleChecked(gamer.id)}>
                                <img src={gamer.checked ? CheckedIcon2 : CheckedIcon} alt="" />
                                <p>{gamer.name}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="todo-footer">
                <p>{gamers.length} Gamers</p>
                <p onClick={() => setGamers([])}>Clear Complete</p>
            </div>
            <button className='game' onClick={() => saveData()}>Start</button>
        </Wrapper >
    )
}


export default Todo;

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    .game {
        width: 100%;
        background: rgba(90, 255, 49, 0.6);
        text-align: center;
        color: white;
        padding: 5px 4px;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }
    .input-box {
        display: flex;
        align-items: center;
        border-radius: 30px;
        background: #25273C;
        margin-bottom: 20px;

        input {
            display: block;
            border: none;
            outline: none;
            background-color: transparent;
            height: 100%;
            padding: 10px 15px;
            letter-spacing: 0.1em;
            width: 350px;

            color: rgba(255, 255, 255, 0.7);


            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        button {
            border: none;
            background: rgba(90, 255, 49, 0.6);
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            cursor: pointer;
            padding: 15px;
            width: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 20px;
            }
        }
    }

    .todo-items {
        height: 250px;
        background-color: #25273C;
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 0px;
        }

        .item {
            display: flex;
            align-items: center;
            gap: 10px;

            cursor: pointer;

            &.checked {
                p {
                    text-decoration: line-through;
                }
            }
            img {
                width: 25px;
            }

            p {
                font-size: 16px;
                letter-spacing: 0.1em;
                color: rgba(255, 255, 255, 0.7);
                border-bottom: 2px solid rgba(72, 64, 64, 0.37);
                width: 100%;
                padding: 5px;
            }
        }
    }

    .todo-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 15px;
        background: #25273C;
        border: 1px solid #AD02FE;
        p {
            letter-spacing: 0.1em;
            color: #FFFFFF;
            font-size: 14px;

            &:last-child {
                cursor: pointer;
            }
        }
    }
`