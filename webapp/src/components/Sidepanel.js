import './Sidepanel.css'

function Sidepanel({Score, ResetFunction, GameEnd, setGameEnd, XTurn}) {
    return (
        <div className="Sidepanel">
            <ScoreDiv Score={Score}/>
            <TurnIndicator XTurn={XTurn}/>
            <TryAgain ResetFunction={ResetFunction} GameEnd={GameEnd} setGameEnd={setGameEnd}/>
        </div>
    )
}

function ScoreDiv({Score}) {
    return (
        <div className="Score">
            <div className="ScoreComponent">
                <div className="ScoreComponentHeader">X</div>
                <div className="ScoreComponentNum">{Score.XWins} wins</div>
            </div>
            <div className="ScoreComponent">
                <div className="ScoreComponentHeader">O</div>
                <div className="ScoreComponentNum">{Score.OWins} wins</div>
            </div>
            <div className="ScoreComponent">
                <div className="ScoreComponentHeader">Draws</div>
                <div className="ScoreComponentNum">{Score.Draws} Draws</div>
            </div>
        </div>
    )
}

function TurnIndicator({XTurn}) {
    if (XTurn) {
        return (
            <div className='TurnIndicatorDiv'>
                <div className='TurnIndicator'>
                    <div className='CurrentTurn'>
                        X
                    </div>
                    <div>
                        O
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='TurnIndicatorDiv'>
                <div className='TurnIndicator'>
                    <div>
                        X
                    </div>
                    <div className='CurrentTurn'>
                        O
                    </div>
                </div>
            </div>
        )
    }
}

function TryAgain({ResetFunction, GameEnd, setGameEnd}) {
    function Handler() {
        ResetFunction('Grid')
        setGameEnd(false)
    }

    if (GameEnd) {
        return (
            <div className="PlayAgainBtn">
                <button onClick={Handler}>Play Again</button>
            </div>
        )
    }
}

export default Sidepanel